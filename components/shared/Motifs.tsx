import type { MotifKind } from '@/lib/site-data';

/**
 * Единый стиль иллюстраций: плоские мягкие заливки, скруглённые формы,
 * тёмные детали только для глаз и мелких акцентов. Сетка 64 × 64.
 */

const C = {
  ink: '#263B31',
  foal: '#D9A27A',
  foalLight: '#F2CFAF',
  mane: '#8A5A3C',
  sun: '#F6C85F',
  sunDeep: '#E3A93A',
  apricot: '#F3A780',
  clay: '#B8653E',
  leaf: '#427A5B',
  leafMid: '#5E9A6C',
  leafLight: '#93BF85',
  leafPale: '#CFE2C4',
  cream: '#FFF9EE',
};

export function MotifShape({ kind }: { kind: MotifKind }) {
  switch (kind) {
    case 'foal':
      return (
        <g>
          <path d="M18 63C18 49 21 39 27 31l14 3c-4 9-4 19-2 29Z" fill={C.foal} />
          <ellipse cx="38" cy="23" rx="15" ry="10" transform="rotate(28 38 23)" fill={C.foal} />
          <ellipse cx="49" cy="30.5" rx="7.6" ry="6.2" transform="rotate(28 49 30.5)" fill={C.foalLight} />
          <path d="M27 15 28.5 4.5 35.5 12.5Z" fill={C.foal} stroke={C.foal} strokeWidth="3" strokeLinejoin="round" />
          <path d="M29.4 12.6 30 8.6l2.6 3Z" fill={C.apricot} stroke={C.apricot} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M30 9c-8 6-11 18-10.5 35" stroke={C.mane} strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M31 11.5c3.5-2 7-1.2 8.4 1.8" stroke={C.mane} strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="44" cy="27" r="2.6" fill={C.apricot} opacity=".7" />
          <circle cx="39" cy="21" r="2.1" fill={C.ink} />
          <circle cx="39.7" cy="20.3" r=".6" fill="#fff" />
          <circle cx="52.6" cy="31.6" r="1.15" fill={C.clay} />
        </g>
      );
    case 'flower':
      return (
        <g>
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={i} cx="32" cy="14.5" rx="6.8" ry="10.5" fill={i % 2 ? C.sunDeep : C.sun} transform={`rotate(${i * 45} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="10.5" fill={C.apricot} />
          <circle cx="28.5" cy="30" r="1.6" fill={C.ink} />
          <circle cx="35.5" cy="30" r="1.6" fill={C.ink} />
          <path d="M28.6 34.6q3.4 2.8 6.8 0" stroke={C.ink} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </g>
      );
    case 'sprout':
      return (
        <g>
          <ellipse cx="32" cy="56.5" rx="19" ry="4.5" fill={C.leafPale} />
          <path d="M32 56V30" stroke={C.leaf} strokeWidth="4" strokeLinecap="round" />
          <path d="M32 39C20 41 12 31 13 22c11-2 19 5 19 17Z" fill={C.leafLight} />
          <path d="M32 31.5C33 18 44 11 53 13c1 12-8 19-21 18.5Z" fill={C.leafMid} />
          <path d="M51 1.8c.7 3 1.6 3.9 4.6 4.6-3 .7-3.9 1.6-4.6 4.6-.7-3-1.6-3.9-4.6-4.6 3-.7 3.9-1.6 4.6-4.6Z" fill={C.sun} stroke={C.sun} strokeWidth="1.4" strokeLinejoin="round" />
        </g>
      );
    case 'chick':
      return (
        <g>
          <path d="M26 55.5v5.5m8-5.5v5.5" stroke={C.clay} strokeWidth="3" strokeLinecap="round" />
          <circle cx="30" cy="38" r="18" fill={C.sun} />
          <circle cx="40" cy="24" r="11" fill={C.sun} />
          <path d="M19.5 38c4-8 14-6.5 14.5 2-4 6.5-12 5.5-14.5-2Z" fill={C.sunDeep} />
          <path d="M50 22.6 58 26l-8 3.4Z" fill={C.apricot} stroke={C.apricot} strokeWidth="2" strokeLinejoin="round" />
          <path d="M38.5 13.6c-.4-4 2.6-5.6 4.8-3.6m-2.4 3.8c1.5-3 4.6-2.6 5-.4" stroke={C.sunDeep} strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <circle cx="45" cy="27.4" r="2.2" fill={C.apricot} opacity=".8" />
          <circle cx="43.4" cy="21.4" r="2" fill={C.ink} />
          <circle cx="44" cy="20.8" r=".55" fill="#fff" />
        </g>
      );
  }
}

export function Motif({ kind, className = 'size-12' }: { kind: MotifKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <MotifShape kind={kind} />
    </svg>
  );
}

export type MealIconKind = 'cup' | 'bowl' | 'apple';

export function MealIcon({ kind, className = 'size-14' }: { kind: MealIconKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      {kind === 'cup' && (
        <g>
          <ellipse cx="30" cy="55" rx="22" ry="4.5" fill="#EADFC8" />
          <path d="M46 32.5c10-1 10 13 0 12" stroke="#C9902B" strokeWidth="4" strokeLinecap="round" />
          <path d="M14 28h32v12c0 10-7 14.5-16 14.5S14 50 14 40Z" fill={C.sun} />
          <path d="M14 28h32" stroke="#C9902B" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 22c-4-5 4-7 0-13m10 13c-4-5 4-7 0-13" stroke="#C9902B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="23" cy="39" r="2.6" fill="#fff" opacity=".55" />
        </g>
      )}
      {kind === 'bowl' && (
        <g>
          <path d="M43.5 29 53 10" stroke={C.clay} strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="54.6" cy="7.6" rx="3.2" ry="4.6" transform="rotate(27 54.6 7.6)" fill={C.clay} />
          <path d="M8 32h48c0 14-10 23-24 23S8 46 8 32Z" fill={C.apricot} />
          <ellipse cx="32" cy="32" rx="24" ry="5" fill="#FBD5BF" />
          <path d="M22 25c-4-5 4-7 0-13" stroke={C.clay} strokeWidth="3" strokeLinecap="round" />
          <path d="M16 41c2 5 6 7.5 11 8.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
        </g>
      )}
      {kind === 'apple' && (
        <g>
          <path d="M32 20C22 12 9 20 11 34s11 23 21 19c10 4 19-5 21-19s-11-22-21-14Z" fill={C.leafLight} />
          <path d="M32 20c0-6 2-10 5-12" stroke="#6B4A32" strokeWidth="3" strokeLinecap="round" />
          <path d="M34.5 14.5C38.5 6.5 47 6 50.5 9c-4 6-11 7.5-16 5.5Z" fill={C.leaf} />
          <path d="M18.5 31c0-5 3-8.5 7-9.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".6" />
        </g>
      )}
    </svg>
  );
}

/* ——— Небольшие декоративные формы ——— */

type DecorProps = { className?: string; color?: string };

export function Flower({ className = 'decor', color = C.apricot }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      {Array.from({ length: 5 }, (_, i) => (
        <ellipse key={i} cx="20" cy="10.5" rx="6.5" ry="8.5" fill={color} transform={`rotate(${i * 72} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="5.5" fill={C.sun} />
    </svg>
  );
}

export function Cloud({ className = 'decor', color = '#FFFFFF' }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 64 36" aria-hidden="true" focusable="false">
      <path d="M14 34a12 12 0 0 1-1-24 14 14 0 0 1 26-3 11 11 0 0 1 16 10 9 9 0 0 1-1 17Z" fill={color} />
    </svg>
  );
}

export function SoftStar({ className = 'decor', color = C.sun }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path
        d="M20 4c2 8 5 11 13 13-8 2-11 5-13 13-2-8-5-11-13-13 8-2 11-5 13-13Z"
        fill={color}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Petal({ className = 'decor', color = C.leafLight }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path d="M6 34C4 18 16 5 34 6c2 17-11 30-28 28Z" fill={color} />
      <path d="M8 32 27 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function SunBadge({ className = 'decor' }: DecorProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g className="spin-slow">
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x="22" y="2" width="4" height="9" rx="2" fill={C.sunDeep} transform={`rotate(${i * 45} 24 24)`} />
        ))}
      </g>
      <circle cx="24" cy="24" r="11" fill={C.sun} />
    </svg>
  );
}

/** Логотип-знак, пока не предоставлен настоящий логотип */
export function BrandMark({ id, className = 'size-11' }: { id: string; className?: string }) {
  const clip = `brandmark-${id}`;
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <circle cx="32" cy="32" r="31" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="31" fill={C.sun} />
      <g clipPath={`url(#${clip})`}>
        <circle cx="32" cy="70" r="26" fill={C.leafLight} />
        <g transform="translate(6 8) scale(.86)">
          <MotifShape kind="foal" />
        </g>
      </g>
    </svg>
  );
}
