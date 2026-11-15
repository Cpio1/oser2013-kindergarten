// Проверка медиа перед сборкой:
//  • каждый путь '/…' из lib/site-data.ts существует в public/ с ТОЧНЫМ регистром (Vercel чувствителен к регистру);
//  • фактический тип файла (по сигнатуре) совпадает с расширением;
//  • сохранённая HTML-страница не подключена как изображение или видео.
import { readFile, readdir, open } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const data = (await readFile(join(root, 'lib/site-data.ts'), 'utf8'))
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/^\s*\/\/.*$/gm, '');
const paths = [...data.matchAll(/['"](\/[^'"\s]+\.[a-z0-9]{2,5})['"]/gi)].map((m) => m[1]);

const sniff = (b) => {
  const hex = b.subarray(0, 12).toString('hex');
  const text = b.subarray(0, 256).toString('utf8').trimStart().toLowerCase();
  if (hex.startsWith('89504e47')) return 'png';
  if (hex.startsWith('ffd8ff')) return 'jpeg';
  if (hex.startsWith('47494638')) return 'gif';
  if (hex.startsWith('52494646') && b.subarray(8, 12).toString() === 'WEBP') return 'webp';
  if (b.subarray(4, 8).toString() === 'ftyp') {
    const brand = b.subarray(8, 12).toString();
    if (/^(avif|avis)/.test(brand)) return 'avif';
    if (/^(heic|heix|mif1)/.test(brand)) return 'heic';
    return 'mp4';
  }
  if (hex.startsWith('1a45dfa3')) return 'webm';
  if (text.startsWith('<svg') || (text.startsWith('<?xml') && text.includes('<svg'))) return 'svg';
  if (text.startsWith('<!doctype html') || text.startsWith('<html') || text.includes('<head')) return 'html';
  if (hex.startsWith('25504446')) return 'pdf';
  return 'unknown';
};
const expected = { '.png': 'png', '.jpg': 'jpeg', '.jpeg': 'jpeg', '.gif': 'gif', '.webp': 'webp', '.avif': 'avif', '.svg': 'svg', '.mp4': 'mp4', '.mov': 'mp4', '.m4v': 'mp4', '.webm': 'webm', '.pdf': 'pdf' };

let failed = false;
for (const p of new Set(paths)) {
  if (p.startsWith('//')) continue;
  const file = join(root, 'public', p);
  let entries = [];
  try {
    entries = await readdir(dirname(file));
  } catch {}
  if (!entries.includes(basename(file))) {
    const near = entries.find((e) => e.toLowerCase() === basename(file).toLowerCase());
    console.error(`✗ ${p}: файл не найден в public/${near ? ` (есть «${near}» — отличается регистр)` : ''}`);
    failed = true;
    continue;
  }
  const fh = await open(file);
  const { buffer } = await fh.read(Buffer.alloc(256), 0, 256, 0);
  await fh.close();
  const kind = sniff(buffer);
  const want = expected[extname(p).toLowerCase()];
  if (kind === 'html') {
    console.error(`✗ ${p}: это сохранённая HTML-страница, а не медиафайл`);
    failed = true;
  } else if (want && kind !== want) {
    console.error(`✗ ${p}: расширение ${extname(p)}, но фактический тип — ${kind}`);
    failed = true;
  } else {
    console.log(`✓ ${p} (${kind})`);
  }
}
if (!paths.length) console.log('check-media: медиафайлы в site-data пока не указаны — используются иллюстрации.');
if (failed) process.exit(1);
