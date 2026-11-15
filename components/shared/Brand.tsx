import { site } from '@/lib/site-data';
import { BrandMark } from './Motifs';

/** Логотип и название — ведут на первый экран */
export function Brand({ id, compact = false }: { id: string; compact?: boolean }) {
  const logo = site.media.logo;
  return (
    <a href="#home" className="brand group inline-flex min-h-11 min-w-0 items-center gap-2.5 rounded-2xl">
      {logo ? (
        <img
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt=""
          className="size-10 shrink-0 object-contain sm:size-11"
        />
      ) : (
        <BrandMark id={id} className="size-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6 sm:size-11" />
      )}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap font-display text-[1.25rem] font-black tracking-[-0.01em] text-ink sm:text-[1.375rem]">{site.name}</span>
        {!compact && <span className="truncate text-[0.875rem] font-semibold text-muted">{site.tagline}</span>}
      </span>
    </a>
  );
}
