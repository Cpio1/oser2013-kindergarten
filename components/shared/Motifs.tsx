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

/** Иллюстрации приёмов пищи: чашка и хлеб, тарелка супа, фрукты. Сетка 80 × 64. */
export function MealIcon({ kind, className = 'meal-art' }: { kind: MealIconKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 64" fill="none" aria-hidden="true" focusable="false">
      {kind === 'cup' && (
        <g>
          <ellipse cx="40" cy="57" rx="30" ry="4.5" fill="#EADFC8" />
          {/* булочка */}
          <path d="M8 55c-2-9 4-15 14-15s16 6 14 15Z" fill="#E8B676" />
          <path d="M14 46c2-2 4-2 6 0m3-2c2-2 4-2 6 0" stroke="#B8794A" strokeWidth="2.2" strokeLinecap="round" />
          {/* чашка */}
          <path d="M60 33.5c9-1 9 12 0 11" stroke="#C9902B" strokeWidth="3.6" strokeLinecap="round" />
          <path d="M34 29h28v11c0 9-6 15-14 15s-14-6-14-15Z" fill={C.sun} />
          <path d="M34 29h28" stroke="#C9902B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="48" cy="42" r="3" fill="#fff" opacity=".7" />
          <path d="M43 23c-3.5-4.5 3.5-6.5 0-11.5m9 11.5c-3.5-4.5 3.5-6.5 0-11.5" stroke="#C9902B" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      )}
      {kind === 'bowl' && (
        <g>
          {/* тарелка */}
          <ellipse cx="40" cy="54" rx="34" ry="7.5" fill="#FFFFFF" stroke="#E4CDB8" strokeWidth="2" />
          <ellipse cx="40" cy="53" rx="22" ry="4" fill="#F5EBDD" />
          {/* суп */}
          <path d="M16 32h48c0 13-10 21-24 21S16 45 16 32Z" fill={C.apricot} />
          <ellipse cx="40" cy="32" rx="24" ry="5" fill="#FBD5BF" />
          <circle cx="32" cy="31.5" r="2.2" fill={C.leafMid} />
          <circle cx="44" cy="32.5" r="1.8" fill="#E9B54A" />
          <circle cx="50" cy="31" r="1.6" fill={C.leafMid} />
          {/* ложка */}
          <path d="M56 30 67 12" stroke={C.clay} strokeWidth="3.2" strokeLinecap="round" />
          <ellipse cx="68.4" cy="9.6" rx="3.2" ry="4.6" transform="rotate(31 68.4 9.6)" fill={C.clay} />
          <path d="M30 25c-3.5-4.5 3.5-6.5 0-11.5" stroke={C.clay} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M23 41c2 4.5 5.5 6.5 10 7.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" opacity=".6" />
        </g>
      )}
      {kind === 'apple' && (
        <g>
          <ellipse cx="40" cy="57" rx="30" ry="4.5" fill="#DCE8CF" />
          {/* груша */}
          <path d="M58 22c-5 0-6 7-8 12-3 7-4 20 8 21 12-1 11-14 8-21-2-5-3-12-8-12Z" fill="#F2D06B" />
          <path d="M58 22c0-4 1-6 3-8" stroke="#6B4A32" strokeWidth="2.6" strokeLinecap="round" />
          {/* яблоко */}
          <path d="M30 24C21 17 9 24 11 37s10 20 19 17c9 3 17-4 19-17s-10-20-19-13Z" fill="#E77D5E" />
          <path d="M30 24c0-6 2-9 5-11" stroke="#6B4A32" strokeWidth="3" strokeLinecap="round" />
          <path d="M32.5 18C36 11 43.5 10.5 47 13c-3.5 5.5-10 7-14.5 5Z" fill={C.leafMid} />
          <path d="M17.5 34c0-4.5 2.6-7.6 6.2-8.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" opacity=".6" />
        </g>
      )}
    </svg>
  );
}

/* ——— Иллюстрации разделов ——— */

/** Папка с листами — «Құжаттар». Сетка 96 × 80. */
export function FolderArt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 80" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="48" cy="75" rx="36" ry="4" fill="#C9DCE6" />
      <path d="M10 22a6 6 0 0 1 6-6h20l7 7h37a6 6 0 0 1 6 6v38a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6Z" fill="#E3A93A" />
      <g className="sheet-peek">
        <rect x="24" y="8" width="44" height="50" rx="5" fill="#FFFFFF" transform="rotate(-7 46 33)" stroke="#E6DCCB" strokeWidth="1.5" />
        <rect x="30" y="6" width="44" height="50" rx="5" fill="#FFFDF8" transform="rotate(5 52 31)" stroke="#E6DCCB" strokeWidth="1.5" />
        <path d="M38 18h24M38 25h24M38 32h16" stroke="#9DBBAF" strokeWidth="3" strokeLinecap="round" transform="rotate(5 52 31)" />
      </g>
      <path d="M8 36a6 6 0 0 1 6-6h68a6 6 0 0 1 6 6l-3 31a6 6 0 0 1-6 6H17a6 6 0 0 1-6-6Z" fill={C.sun} />
      <path d="M40 46h16" stroke="#C9902B" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M78 9c.8 3.4 1.8 4.4 5.2 5.2-3.4.8-4.4 1.8-5.2 5.2-.8-3.4-1.8-4.4-5.2-5.2 3.4-.8 4.4-1.8 5.2-5.2Z" fill={C.apricot} stroke={C.apricot} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/** Домик с указателем — «Байланыс». Сетка 128 × 96. */
export function HouseArt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 96" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="64" cy="90" rx="60" ry="6" fill="#427A5B" />
      {/* указатель */}
      <path d="M104 88V44" stroke="#E8D3B5" strokeWidth="4" strokeLinecap="round" />
      <g className="sign-sway">
        <path d="M92 46h22l6 6-6 6H92Z" fill={C.apricot} />
        <path d="M97 52h13" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".85" />
      </g>
      {/* дом */}
      <path d="M18 52 50 26l32 26v36H18Z" fill="#FFF9EE" />
      <path d="M12 54 50 22l38 32" stroke="#E77D5E" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="64" y="22" width="9" height="16" rx="2" fill="#E77D5E" />
      <path d="M41 88V68a9 9 0 0 1 18 0v20Z" fill={C.leafMid} />
      <circle cx="54.5" cy="77" r="1.6" fill={C.sun} />
      <rect x="24" y="58" width="12" height="12" rx="3" fill="#BFE0F0" />
      <rect x="64" y="58" width="12" height="12" rx="3" fill="#BFE0F0" />
      <path d="M50 46a5 5 0 1 1 0-.1" fill={C.sun} />
      {/* кусты */}
      <circle cx="16" cy="84" r="7" fill={C.leafLight} />
      <circle cx="25" cy="86" r="5" fill="#7FB070" />
      <circle cx="84" cy="85" r="5.5" fill={C.leafLight} />
    </svg>
  );
}

/** Маленькие иллюстрации фактов «Біз туралы». Сетка 40 × 40. */
export type FactArtKind = 'pin' | 'book' | 'blocks' | 'spoon';
export function FactArt({ kind, className = 'size-7' }: { kind: FactArtKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      {kind === 'pin' && (
        <g>
          <ellipse cx="20" cy="35" rx="9" ry="2.6" fill="#E4CDB8" />
          <path d="M20 35s-10-9-10-17a10 10 0 0 1 20 0c0 8-10 17-10 17Z" fill="#E77D5E" />
          <circle cx="20" cy="18" r="4" fill="#FFF9EE" />
        </g>
      )}
      {kind === 'book' && (
        <g>
          <path d="M5 10c5-2 10-2 15 1v22c-5-3-10-3-15-1Z" fill={C.leafMid} />
          <path d="M35 10c-5-2-10-2-15 1v22c5-3 10-3 15-1Z" fill={C.leafLight} />
          <path d="M9 16c2.5-.6 5-.4 7 .6M9 21c2.5-.6 5-.4 7 .6M24 16.6c2-1 4.5-1.2 7-.6M24 21.6c2-1 4.5-1.2 7-.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      )}
      {kind === 'blocks' && (
        <g>
          <rect x="4" y="20" width="15" height="15" rx="3.5" fill={C.apricot} />
          <rect x="21" y="20" width="15" height="15" rx="3.5" fill="#8CC2DE" />
          <rect x="12.5" y="5" width="15" height="15" rx="3.5" fill={C.sun} transform="rotate(8 20 12.5)" />
          <circle cx="11.5" cy="27.5" r="2.4" fill="#fff" />
          <path d="M25 27.5h7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M20 9.5v6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      )}
      {kind === 'spoon' && (
        <g>
          <ellipse cx="18" cy="24" rx="14" ry="10" fill="#FFFFFF" stroke="#E4CDB8" strokeWidth="2" />
          <ellipse cx="18" cy="23" rx="8" ry="5" fill={C.apricot} />
          <path d="M34 34 30 14" stroke={C.clay} strokeWidth="2.6" strokeLinecap="round" />
          <ellipse cx="29.4" cy="9.5" rx="2.8" ry="4.2" transform="rotate(-11 29.4 9.5)" fill={C.clay} />
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

export function SunBadge({ className = 'decor', spin = false }: DecorProps & { spin?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g className={spin ? 'spin-slow' : undefined}>
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
