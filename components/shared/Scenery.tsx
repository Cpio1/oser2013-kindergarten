import { MotifShape } from './Motifs';

/**
 * Фоновые рисунки «Прогулка құлыншақа»: тропинка со следами копыт проходит
 * через весь сайт отдельными фрагментами и заканчивается домиком у адреса.
 * Слой декоративный: aria-hidden, pointer-events: none, обрезается границами секции.
 * У каждого раздела — отдельный рисунок для компьютера (.sc-wide) и телефона (.sc-narrow).
 */

const G = {
  line: '#427A5B',
  mid: '#5E9A6C',
  light: '#93BF85',
  pale: '#E4EFDA',
  path: '#F1DCA8',
  sun: '#F6C85F',
  apricot: '#F3A780',
  coral: '#E77D5E',
  milk: '#FFFDF8',
};

/** След копыта: подкова, носком по направлению движения */
export function Hoof({ x, y, rot = 0, s = 1 }: { x: number; y: number; rot?: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}
      d="M-5 4C-6.5-3-3.5-6.5 0-6.5S6.5-3 5 4C4 2.2 2.4 1.4 1.6 1.6L1.4-1.8C1.4-3-1.4-3-1.4-1.8L-1.6 1.6C-2.4 1.4-4 2.2-5 4Z"
      fill={G.mid}
    />
  );
}

function Grass({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 0C-1-6-4-10-8-12M3 0C3-7 4-12 7-16M6 0C8-5 11-8 15-9"
      stroke={G.mid}
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
    />
  );
}

function Daisy({ x, y, s = 1, petal = G.apricot }: { x: number; y: number; s?: number; petal?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 4V18" stroke={G.mid} strokeWidth="2.4" strokeLinecap="round" />
      {Array.from({ length: 5 }, (_, i) => (
        <ellipse key={i} cx="0" cy="-5" rx="3.6" ry="5" fill={petal} stroke={G.line} strokeWidth="1.2" transform={`rotate(${i * 72})`} />
      ))}
      <circle r="3.2" fill={G.sun} stroke={G.line} strokeWidth="1.2" />
    </g>
  );
}

function Svg({ className, viewBox, children }: { className: string; viewBox: string; children: React.ReactNode }) {
  return (
    <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/* ——— Главный экран: тропинка вдоль нижнего края фото ——— */
export function HeroTrail({ className = '' }: { className?: string }) {
  const prints: [number, number, number][] = [
    [62, 30, 70], [88, 40, 76], [116, 38, 82], [146, 47, 88], [176, 42, 92], [206, 47, 96], [236, 38, 104], [262, 39, 110],
  ];
  return (
    <Svg className={className} viewBox="0 0 330 72">
      <path d="M30 26C90 50 170 58 290 32" stroke={G.path} strokeWidth="18" strokeLinecap="round" />
      <path d="M30 26C90 50 170 58 290 32" stroke={G.line} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 7" opacity=".9" />
      {prints.map(([x, y, r]) => (
        <Hoof key={x} x={x} y={y} rot={r} s={0.85} />
      ))}
      <Grass x={292} y={40} s={1.1} />
      <Grass x={312} y={44} s={0.8} />
      <Daisy x={304} y={14} s={1.05} />
    </Svg>
  );
}

/* ——— Біз туралы: мягкий холм ——— */
function Hill({ className, small = false }: { className: string; small?: boolean }) {
  return (
    <Svg className={className} viewBox="0 0 240 96">
      <circle cx="196" cy="24" r="12" fill={G.sun} stroke={G.line} strokeWidth="2" />
      {!small && <path d="M196 4v-3M214 10l2-2M218 26h3M178 10l-2-2" stroke={G.sun} strokeWidth="2.6" strokeLinecap="round" />}
      <path d="M6 92C38 52 78 34 120 40s74 30 112 52Z" fill={G.pale} stroke={G.line} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M70 92c22-22 50-30 84-24" stroke={G.light} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 8" />
      {/* деревце */}
      <path d="M118 46V24" stroke={G.line} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="118" cy="20" r="12" fill={G.light} stroke={G.line} strokeWidth="2.2" />
      <circle cx="113" cy="17" r="2" fill={G.coral} />
      <circle cx="123" cy="22" r="2" fill={G.coral} />
      {!small && (
        <>
          <Hoof x={46} y={82} rot={60} s={0.8} />
          <Hoof x={60} y={74} rot={62} s={0.8} />
          <Hoof x={76} y={70} rot={70} s={0.8} />
          <Grass x={184} y={80} />
          <Daisy x={164} y={60} s={0.8} petal={G.sun} />
        </>
      )}
    </Svg>
  );
}

/* ——— Топтар: следы, ведущие к карточкам ——— */
function GroupsTrail({ className, small = false }: { className: string; small?: boolean }) {
  const wide: [number, number, number][] = [
    [214, 12, 200], [196, 20, 206], [184, 36, 214], [164, 44, 220], [150, 62, 228], [128, 68, 232], [116, 88, 238], [94, 92, 244],
  ];
  const narrow: [number, number, number][] = [[48, 6, 200], [36, 16, 210], [38, 32, 220], [24, 40, 230]];
  const prints = small ? narrow : wide;
  return (
    <Svg className={className} viewBox={small ? '0 0 60 48' : '0 0 240 110'}>
      {!small && <path d="M226 6C190 30 150 60 80 102" stroke={G.path} strokeWidth="14" strokeLinecap="round" />}
      {prints.map(([x, y, r]) => (
        <Hoof key={`${x}-${y}`} x={x} y={y} rot={r} s={small ? 0.9 : 1} />
      ))}
      {!small && <Daisy x={226} y={80} s={0.85} />}
      {!small && <Grass x={208} y={102} />}
    </Svg>
  );
}

/* ——— Тамақтану: веточка с ягодами ——— */
function Berries({ className }: { className: string }) {
  return (
    <Svg className={className} viewBox="0 0 140 72">
      <path d="M6 62C40 54 74 40 132 14" stroke={G.line} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M44 51c-4-12 2-22 14-24 2 12-4 21-14 24Z" fill={G.light} stroke={G.line} strokeWidth="2" strokeLinejoin="round" />
      <path d="M86 36c2-12 12-18 24-14-2 12-12 17-24 14Z" fill={G.light} stroke={G.line} strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 58c-8-6-8-16-2-22 8 4 8 15 2 22Z" fill={G.pale} stroke={G.line} strokeWidth="2" strokeLinejoin="round" />
      <path d="M64 44l4 12M104 28l6 12" stroke={G.line} strokeWidth="2" strokeLinecap="round" />
      <circle cx="68" cy="60" r="6" fill="#F45F61" stroke={G.line} strokeWidth="1.8" />
      <circle cx="79" cy="57" r="5" fill="#FF963F" stroke={G.line} strokeWidth="1.8" />
      <circle cx="110" cy="44" r="6" fill="#F45F61" stroke={G.line} strokeWidth="1.8" />
      <circle cx="121" cy="40" r="4.6" fill="#FFD34D" stroke={G.line} strokeWidth="1.8" />
      <circle cx="66" cy="58" r="1.6" fill="#fff" opacity=".8" />
      <circle cx="108" cy="42" r="1.6" fill="#fff" opacity=".8" />
    </Svg>
  );
}

/* ——— Галерея: құлыншақ выглядывает из травы у края ——— */
function FoalPeek({ className }: { className: string }) {
  return (
    <Svg className={className} viewBox="0 0 96 72">
      <g transform="translate(18 2) scale(.9)">
        <MotifShape kind="foal" />
      </g>
      <path d="M4 70C14 56 30 50 48 52s32 8 44 18Z" fill={G.pale} stroke={G.line} strokeWidth="2.2" strokeLinejoin="round" />
      <Grass x={20} y={66} s={0.9} />
      <Grass x={66} y={64} s={0.9} />
      <Daisy x={84} y={44} s={0.7} petal={G.sun} />
    </Svg>
  );
}

/* ——— Құжаттар: тропинка уходит к контактам ——— */
function DocsTrail({ className, small = false }: { className: string; small?: boolean }) {
  const prints = small
    ? [[12, 18, 100], [36, 12, 92], [60, 18, 96], [84, 12, 90], [108, 16, 94]]
    : [[20, 26, 100], [48, 16, 92], [78, 24, 96], [108, 14, 90], [138, 22, 94], [168, 12, 88], [198, 20, 92], [228, 12, 86]];
  return (
    <Svg className={className} viewBox={small ? '0 0 120 28' : '0 0 270 40'}>
      {!small && <path d="M8 24C80 34 170 6 262 16" stroke={G.path} strokeWidth="14" strokeLinecap="round" />}
      {prints.map(([x, y, r]) => (
        <Hoof key={x} x={x} y={y} rot={r} s={small ? 0.8 : 1} />
      ))}
      {!small && <Grass x={250} y={36} />}
    </Svg>
  );
}

/* ═══════════ Солнечное небо ═══════════ */

/** Белое облако из нескольких округлых долей с голубоватой тенью */
export function SkyCloud({ className = '' }: { className?: string }) {
  const lobes = 'M18 52C7 52 2 44 4 37s10-11 17-9C22 18 32 10 44 12c6-9 20-11 29-3 7-6 19-5 25 3 10-2 19 6 18 16 6 3 7 11 3 17-3 5-8 7-13 7Z';
  return (
    <svg className={className} viewBox="0 0 124 60" fill="none" aria-hidden="true" focusable="false">
      <path d={lobes} transform="translate(2 5)" fill="#8EC3E6" opacity=".75" />
      <path d={lobes} fill="#FFFFFF" />
      <path d="M30 40c6 4 14 4 20 0" stroke="#E3EFF6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Улыбающееся солнце с короткими лучами */
export function SmileSun({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <g className="spin-slow">
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x="30" y="2" width="4" height="9" rx="2" fill="#FFA928" transform={`rotate(${i * 36} 32 32)`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="17" fill="#FFD34D" stroke="#F3A21F" strokeWidth="2" />
      <path d="M24.5 30q2.5-3 5 0M34.5 30q2.5-3 5 0" stroke="#624524" strokeWidth="2" strokeLinecap="round" />
      <path d="M26.5 36q5.5 5 11 0" stroke="#624524" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22.5" cy="36" r="2.6" fill="#EC9971" opacity=".75" />
      <circle cx="41.5" cy="36" r="2.6" fill="#EC9971" opacity=".75" />
    </svg>
  );
}

/** Два воздушных шарика на тонких нитях */
export function Balloons({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 112" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 46c-3 14 6 22 2 36s4 22 8 28M44 38c2 16-6 26-2 40s-8 26-12 32" stroke="#6B7F75" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="20" cy="26" rx="15" ry="19" fill="#F45F61" />
      <path d="M17 45h6l-3-4Z" fill="#D9474A" />
      <ellipse cx="14" cy="19" rx="3.5" ry="6" transform="rotate(20 14 19)" fill="#fff" opacity=".55" />
      <ellipse cx="44" cy="20" rx="14" ry="17.5" fill="#FFD34D" />
      <path d="M41 37h6l-3-4Z" fill="#F3A21F" />
      <ellipse cx="38.5" cy="13.5" rx="3.2" ry="5.5" transform="rotate(20 38.5 13.5)" fill="#fff" opacity=".6" />
    </svg>
  );
}

/** Радуга за фото: три дуги (компьютер) или одна дуга (телефон) */
export function Rainbow({ className = '', single = false }: { className?: string; single?: boolean }) {
  if (single) {
    return (
      <svg className={className} viewBox="0 0 100 44" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="rainbow-one" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#F45F61" />
            <stop offset=".5" stopColor="#FF963F" />
            <stop offset="1" stopColor="#FFD34D" />
          </linearGradient>
        </defs>
        <path d="M8 44a42 42 0 0 1 84 0" stroke="url(#rainbow-one)" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 50a45 45 0 0 1 90 0" stroke="#F45F61" strokeWidth="6" />
      <path d="M11 50a39 39 0 0 1 78 0" stroke="#FF963F" strokeWidth="6" />
      <path d="M17 50a33 33 0 0 1 66 0" stroke="#FFD34D" strokeWidth="6" />
    </svg>
  );
}

function Twinkle({ x, y, s = 1, color = '#FFD34D' }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-8C1-3 3-1 8 0 3 1 1 3 0 8-1 3-3 1-8 0-3-1-1-3 0-8Z"
      fill={color}
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  );
}

/** Пара маленьких звёздочек */
export function Stars({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 40" fill="none" aria-hidden="true" focusable="false">
      <Twinkle x={14} y={24} s={1.3} />
      <Twinkle x={36} y={10} s={0.85} color="#FF963F" />
    </svg>
  );
}

/** Небо первого экрана: облака (вместо солнца — эмблема в HeroScene, радуга — там же) */
export function HeroSky() {
  return (
    <div className="scenery hero-sky" aria-hidden="true">
      <div className="scenery-frame">
        <SkyCloud className="sc sc-wide sky-cloud-mid" />
        <SkyCloud className="sc sc-wide sky-cloud-edge" />
      </div>
    </div>
  );
}

export type SceneryKind = 'about' | 'groups' | 'meals' | 'gallery' | 'documents';

/** Декоративный слой раздела: вставляется первым элементом секции */
export function Scenery({ kind }: { kind: SceneryKind }) {
  return (
    <div className={`scenery scenery-${kind}`} aria-hidden="true">
      <div className="scenery-frame">
        {kind === 'about' && (
          <>
            <Hill className="sc sc-wide sc-about" />
            <Hill className="sc sc-narrow sc-about-m" small />
            <SkyCloud className="sc sc-wide sky-about-cloud" />
          </>
        )}
        {kind === 'groups' && (
          <>
            <GroupsTrail className="sc sc-wide sc-groups" />
            <GroupsTrail className="sc sc-narrow sc-groups-m" small />
          </>
        )}
        {kind === 'meals' && (
          <>
            <Berries className="sc sc-wide sc-meals" />
            <Berries className="sc sc-narrow sc-meals-m" />
            <Stars className="sc sc-wide sky-meals-stars" />
            <SkyCloud className="sc sc-wide sky-meals-cloud" />
          </>
        )}
        {kind === 'gallery' && (
          <>
            <FoalPeek className="sc sc-wide sc-gallery" />
            <FoalPeek className="sc sc-narrow sc-gallery-m" />
            <SkyCloud className="sc sc-wide sky-gallery-cloud" />
            <Stars className="sc sc-wide sky-gallery-stars" />
          </>
        )}
        {kind === 'documents' && (
          <>
            <DocsTrail className="sc sc-wide sc-docs" />
            <DocsTrail className="sc sc-narrow sc-docs-m" small />
            <SkyCloud className="sc sc-wide sky-docs-cloud" />
          </>
        )}
      </div>
    </div>
  );
}

/** Финал тропинки: следы подходят к домику (для блока с адресом) */
export function HouseTrail({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 168 100" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="112" cy="93" rx="54" ry="6" fill="#427A5B" />
      <path d="M4 90C24 84 40 90 66 86" stroke="#FFD34D" strokeOpacity=".55" strokeWidth="10" strokeLinecap="round" />
      {[[10, 88, 80], [24, 84, 84], [38, 89, 88], [52, 84, 92]].map(([x, y, r]) => (
        <path
          key={x}
          transform={`translate(${x} ${y}) rotate(${r}) scale(.75)`}
          d="M-5 4C-6.5-3-3.5-6.5 0-6.5S6.5-3 5 4C4 2.2 2.4 1.4 1.6 1.6L1.4-1.8C1.4-3-1.4-3-1.4-1.8L-1.6 1.6C-2.4 1.4-4 2.2-5 4Z"
          fill="#F6C85F"
        />
      ))}
      <Twinkle x={150} y={14} s={0.9} />
      <Twinkle x={160} y={34} s={0.6} color="#FF963F" />
      <g transform="translate(46 0)">
        <path d="M18 52 50 26l32 26v36H18Z" fill="#FFF9EE" />
        <path d="M12 54 50 22l38 32" stroke="#E77D5E" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="64" y="22" width="9" height="16" rx="2" fill="#E77D5E" />
        <path d="M41 88V68a9 9 0 0 1 18 0v20Z" fill="#5E9A6C" />
        <circle cx="54.5" cy="77" r="1.6" fill="#F6C85F" />
        <rect x="24" y="58" width="12" height="12" rx="3" fill="#BFE0F0" />
        <rect x="64" y="58" width="12" height="12" rx="3" fill="#BFE0F0" />
        <circle cx="50" cy="44" r="4.5" fill="#F6C85F" />
        <circle cx="88" cy="85" r="6" fill="#93BF85" />
        <circle cx="97" cy="87" r="4.5" fill="#7FB070" />
        <circle cx="12" cy="86" r="4" fill="#93BF85" />
      </g>
    </svg>
  );
}
