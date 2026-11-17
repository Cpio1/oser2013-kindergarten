/**
 * Объёмные мультяшные иллюстрации приёмов пищи (сетка 240 × 200).
 * Объём — за счёт радиальных градиентов, бликов и мягких теней.
 *  • Таңғы ас — тарелка каши с ягодами и бананом, стакан молока
 *  • Түскі ас — суп в пиале, второе с котлетой и пюре, овощи
 *  • Бесін ас — бауырсақ и булочка, яблоко, сок с трубочкой
 * Это иллюстрации, а не фотографии блюд садика.
 */

export type MealArtKind = 'breakfast' | 'lunch' | 'snack';

type Ids = { u: (n: string) => string; url: (n: string) => string };

/** Мягкая тень под предметом */
function Ground({ cx, cy, rx, ry, url }: { cx: number; cy: number; rx: number; ry: number; url: Ids['url'] }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={url('shadow')} />;
}

/** Белый блик */
function Gloss({ d, w = 4, o = 0.7 }: { d: string; w?: number; o?: number }) {
  return <path d={d} stroke="#fff" strokeWidth={w} strokeLinecap="round" fill="none" opacity={o} />;
}

function Strawberry({ x, y, s = 1, r = 0, url }: { x: number; y: number; s?: number; r?: number; url: Ids['url'] }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 14C-10 8-11-3-6-7c3-2 9-2 12 0 5 4 4 15-6 21Z" fill={url('berry')} />
      <g fill="#ffe7a8">
        <ellipse cx="-3" cy="-1" rx=".9" ry="1.3" />
        <ellipse cx="3" cy="0" rx=".9" ry="1.3" />
        <ellipse cx="0" cy="5" rx=".9" ry="1.3" />
        <ellipse cx="-3.5" cy="6" rx=".8" ry="1.2" />
        <ellipse cx="3.5" cy="6" rx=".8" ry="1.2" />
      </g>
      <path d="M-7-7c3 1 5 0 7-3 2 3 4 4 7 3-2 3-5 4-7 3-2 1-5 0-7-3Z" fill="#3fae5a" />
      <Gloss d="M-4-3q-1 3 0 5" w={1.6} o={0.8} />
    </g>
  );
}

function Blueberry({ x, y, r = 4.2, url }: { x: number; y: number; r?: number; url: Ids['url'] }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={url('blue')} />
      <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.28} fill="#fff" opacity=".7" />
    </g>
  );
}

function Sparkle({ x, y, s = 1, fill = '#fff' }: { x: number; y: number; s?: number; fill?: string }) {
  return <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-8C1-2 2-1 8 0 2 1 1 2 0 8-1 2-2 1-8 0-2-1-1-2 0-8Z" fill={fill} />;
}

function Breakfast({ u, url }: Ids) {
  return (
    <>
      <defs>
        <radialGradient id={u('shadow')}>
          <stop offset="0" stopColor="#a8541a" stopOpacity=".38" />
          <stop offset="1" stopColor="#a8541a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={u('bowl')} cx=".35" cy=".25" r=".9">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset=".55" stopColor="#ffe9c4" />
          <stop offset="1" stopColor="#f2b56b" />
        </radialGradient>
        <linearGradient id={u('band')} x1="0" x2="1">
          <stop offset="0" stopColor="#ff9d2e" />
          <stop offset=".5" stopColor="#ffc24a" />
          <stop offset="1" stopColor="#ff8a1f" />
        </linearGradient>
        <radialGradient id={u('porridge')} cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#fff6dc" />
          <stop offset=".6" stopColor="#f8dca1" />
          <stop offset="1" stopColor="#e7b46a" />
        </radialGradient>
        <radialGradient id={u('berry')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#ff8a8a" />
          <stop offset=".55" stopColor="#f2333f" />
          <stop offset="1" stopColor="#b5121f" />
        </radialGradient>
        <radialGradient id={u('blue')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#8aa6ff" />
          <stop offset="1" stopColor="#2c3c9e" />
        </radialGradient>
        <linearGradient id={u('banana')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff7c9" />
          <stop offset="1" stopColor="#f6d66b" />
        </linearGradient>
        <linearGradient id={u('glass')} x1="0" x2="1">
          <stop offset="0" stopColor="#e9f6ff" stopOpacity=".9" />
          <stop offset=".5" stopColor="#ffffff" stopOpacity=".55" />
          <stop offset="1" stopColor="#cfe6f7" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={u('milk')} x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".7" stopColor="#f6f8ff" />
          <stop offset="1" stopColor="#dfe6f5" />
        </linearGradient>
        <linearGradient id={u('honey')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd25e" />
          <stop offset="1" stopColor="#f39a1b" />
        </linearGradient>
      </defs>

      {/* стакан молока */}
      <Ground cx={186} cy={172} rx={30} ry={7} url={url} />
      <path d="M166 92h40l-4 76a6 6 0 0 1-6 5h-20a6 6 0 0 1-6-5Z" fill={url('glass')} stroke="#bcd9ee" strokeWidth="2" />
      <path d="M168.5 110h35l-3 57a5 5 0 0 1-5 4h-19a5 5 0 0 1-5-4Z" fill={url('milk')} />
      <ellipse cx="186" cy="110" rx="17.5" ry="4" fill="#fff" />
      <ellipse cx="186" cy="92" rx="20" ry="4.5" fill="#f4fbff" stroke="#bcd9ee" strokeWidth="2" />
      <Gloss d="M173 100l-1 60" w={4} o={0.85} />

      {/* тарелка каши */}
      <Ground cx={104} cy={176} rx={84} ry={12} url={url} />
      <path d="M26 112h156c0 34-30 60-78 60S26 146 26 112Z" fill={url('bowl')} />
      <path d="M33 132c14 4 40 7 71 7s57-3 71-7c-2 5-4 9-7 13-14 3-38 6-64 6s-50-3-64-6c-3-4-5-8-7-13Z" fill={url('band')} />
      <g fill="#fff" opacity=".85">
        <circle cx="56" cy="141" r="2.4" />
        <circle cx="82" cy="145" r="2.4" />
        <circle cx="104" cy="146" r="2.4" />
        <circle cx="126" cy="145" r="2.4" />
        <circle cx="152" cy="141" r="2.4" />
      </g>
      <ellipse cx="104" cy="112" rx="78" ry="18" fill="#fff3dc" />
      <ellipse cx="104" cy="112" rx="70" ry="13.5" fill={url('porridge')} />
      {/* горка каши */}
      <path d="M44 112c6-14 30-22 60-22s54 8 60 22c-14 6-36 9-60 9s-46-3-60-9Z" fill={url('porridge')} />
      <path d="M70 98q8-4 18-2M118 96q10 0 18 4" stroke="#fffaf0" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".9" />
      {/* мёд */}
      <path d="M86 104c6-4 14-5 22-3s14 1 20-3c-2 6-8 9-14 9-4 0-6 3-6 7-1-4-4-6-8-6-6 0-11-1-14-4Z" fill={url('honey')} opacity=".95" />
      {/* бананы */}
      <g>
        <ellipse cx="70" cy="104" rx="11" ry="7" fill={url('banana')} stroke="#e8c158" strokeWidth="1.5" />
        <ellipse cx="70" cy="104" rx="5" ry="3" fill="none" stroke="#e8c158" strokeWidth="1" opacity=".7" />
        <ellipse cx="134" cy="105" rx="11" ry="7" fill={url('banana')} stroke="#e8c158" strokeWidth="1.5" />
        <ellipse cx="134" cy="105" rx="5" ry="3" fill="none" stroke="#e8c158" strokeWidth="1" opacity=".7" />
      </g>
      <Strawberry x={102} y={86} s={1.25} url={url} />
      <Strawberry x={120} y={92} s={1} r={24} url={url} />
      <Blueberry x={86} y={96} url={url} />
      <Blueberry x={93} y={102} r={3.6} url={url} />
      <Blueberry x={150} y={104} url={url} />
      <Blueberry x={56} y={108} r={3.6} url={url} />
      {/* листик мяты */}
      <path d="M108 74c6-8 16-8 20-4-4 6-12 8-20 4Z" fill="#53c06e" />
      <path d="M108 74q8-2 18-4" stroke="#2f8f4b" strokeWidth="1.2" fill="none" />
      <Gloss d="M40 122q6 18 26 30" w={5} o={0.75} />

      {/* ложка */}
      <path d="M150 116l36-44" stroke="#f0b049" strokeWidth="6" strokeLinecap="round" />
      <path d="M150 116l36-44" stroke="#ffe08a" strokeWidth="2.2" strokeLinecap="round" />

      <Sparkle x={30} y={64} s={1.2} fill="#fff6c7" />
      <Sparkle x={212} y={60} s={0.9} />
    </>
  );
}

function Lunch({ u, url }: Ids) {
  return (
    <>
      <defs>
        <radialGradient id={u('shadow')}>
          <stop offset="0" stopColor="#0d6e6a" stopOpacity=".34" />
          <stop offset="1" stopColor="#0d6e6a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={u('plate')} cx=".4" cy=".3" r=".85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".7" stopColor="#f1fbfa" />
          <stop offset="1" stopColor="#bfe3df" />
        </radialGradient>
        <radialGradient id={u('bowl')} cx=".3" cy=".2" r=".95">
          <stop offset="0" stopColor="#7ff0e2" />
          <stop offset=".5" stopColor="#20c3b4" />
          <stop offset="1" stopColor="#0b8a86" />
        </radialGradient>
        <radialGradient id={u('soup')} cx=".45" cy=".4" r=".75">
          <stop offset="0" stopColor="#ffb487" />
          <stop offset=".7" stopColor="#ff7f50" />
          <stop offset="1" stopColor="#e65a32" />
        </radialGradient>
        <radialGradient id={u('mash')} cx=".4" cy=".3" r=".8">
          <stop offset="0" stopColor="#fffbe8" />
          <stop offset="1" stopColor="#f3d98f" />
        </radialGradient>
        <radialGradient id={u('patty')} cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#d98a4e" />
          <stop offset=".6" stopColor="#a65a2a" />
          <stop offset="1" stopColor="#7a3d18" />
        </radialGradient>
        <radialGradient id={u('tomato')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#ff9a8a" />
          <stop offset=".6" stopColor="#ff4b3e" />
          <stop offset="1" stopColor="#c22a22" />
        </radialGradient>
        <linearGradient id={u('cuc')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9ffd9" />
          <stop offset="1" stopColor="#a7e07f" />
        </linearGradient>
        <linearGradient id={u('carrot')} x1="0" x2="1">
          <stop offset="0" stopColor="#ffb057" />
          <stop offset="1" stopColor="#f07a12" />
        </linearGradient>
      </defs>

      {/* тарелка второго (сзади) */}
      <Ground cx={150} cy={152} rx={78} ry={11} url={url} />
      <ellipse cx="150" cy="128" rx="78" ry="26" fill={url('plate')} />
      <ellipse cx="150" cy="126" rx="62" ry="18" fill="#ffffff" stroke="#d8efec" strokeWidth="2" />
      <ellipse cx="150" cy="128" rx="78" ry="26" fill="none" stroke="#ff7f6e" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" opacity=".8" />
      {/* пюре */}
      <path d="M118 128c-4-16 10-26 26-24 6-8 22-6 26 4 10 2 12 14 4 20-14 6-44 6-56 0Z" fill={url('mash')} />
      <path d="M134 112q8-4 14 0M156 112q6-2 10 2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <ellipse cx="150" cy="110" rx="5" ry="2.5" fill="#ffd86a" />
      {/* котлеты */}
      <ellipse cx="184" cy="124" rx="18" ry="11" fill={url('patty')} />
      <ellipse cx="200" cy="130" rx="13" ry="8" fill={url('patty')} />
      <Gloss d="M174 118q6-3 12-2" w={2.4} o={0.55} />
      {/* зелень */}
      <g fill="#46b85d">
        <circle cx="128" cy="132" r="3.2" />
        <circle cx="133" cy="135" r="2.6" />
        <circle cx="124" cy="136" r="2.4" />
      </g>

      {/* пиала супа (спереди) */}
      <Ground cx={82} cy={180} rx={66} ry={10} url={url} />
      <path d="M22 122h120c0 30-24 54-60 54s-60-24-60-54Z" fill={url('bowl')} />
      <path d="M30 146c12 5 30 7 52 7s40-2 52-7" stroke="#fff" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" fill="none" opacity=".85" />
      <path d="M34 140q12 6 28 8M102 148q16-2 28-8" stroke="#ffd34d" strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <ellipse cx="82" cy="122" rx="60" ry="14" fill="#c6f6f0" />
      <ellipse cx="82" cy="122" rx="53" ry="10.5" fill={url('soup')} />
      {/* овощи в супе */}
      <g>
        <rect x="56" y="116" width="8" height="6" rx="2" fill={url('carrot')} transform="rotate(-12 60 119)" />
        <rect x="96" y="119" width="8" height="6" rx="2" fill={url('carrot')} transform="rotate(14 100 122)" />
        <rect x="76" y="114" width="7" height="6" rx="2" fill="#fff4cc" />
        <rect x="110" y="114" width="7" height="6" rx="2" fill="#fff4cc" />
        <circle cx="68" cy="124" r="2.4" fill="#4fc35f" />
        <circle cx="90" cy="126" r="2.4" fill="#4fc35f" />
        <circle cx="46" cy="121" r="2.2" fill="#4fc35f" />
        <circle cx="120" cy="121" r="2.2" fill="#4fc35f" />
      </g>
      <Gloss d="M34 132q6 20 26 32" w={5} o={0.6} />
      {/* пар */}
      <g className="meal-steam" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9">
        <path d="M66 104c-7-8 7-12 0-22" />
        <path d="M84 100c-7-8 7-12 0-22" />
        <path d="M102 104c-7-8 7-12 0-22" />
      </g>
      {/* ложка */}
      <path d="M118 118l30-50" stroke="#e3edf2" strokeWidth="6" strokeLinecap="round" />
      <path d="M118 118l30-50" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

      {/* овощи рядом */}
      <Ground cx={212} cy={176} rx={24} ry={5} url={url} />
      <circle cx="210" cy="160" r="15" fill={url('tomato')} />
      <path d="M202 147c3 2 5 2 8 0 3 2 5 2 8 0-1 4-4 6-8 6s-7-2-8-6Z" fill="#3fae5a" />
      <Gloss d="M202 154q-2 4 0 8" w={3} o={0.75} />
      <g transform="translate(176 168) rotate(-8)">
        <ellipse rx="14" ry="6" fill="#4caf50" />
        <ellipse rx="11.5" ry="4.2" fill={url('cuc')} />
        <g fill="#cfe9b0">
          <circle cx="-4" r="1.2" />
          <circle cx="0" r="1.2" />
          <circle cx="4" r="1.2" />
        </g>
      </g>

      <Sparkle x={26} y={84} s={1} fill="#fff" />
      <Sparkle x={214} y={84} s={1.1} fill="#fff6c7" />
    </>
  );
}

function Snack({ u, url }: Ids) {
  return (
    <>
      <defs>
        <radialGradient id={u('shadow')}>
          <stop offset="0" stopColor="#b0466e" stopOpacity=".3" />
          <stop offset="1" stopColor="#b0466e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={u('plate')} cx=".4" cy=".3" r=".85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".7" stopColor="#fff1f5" />
          <stop offset="1" stopColor="#f6c3d3" />
        </radialGradient>
        <radialGradient id={u('dough')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#ffe3a6" />
          <stop offset=".55" stopColor="#f0a94e" />
          <stop offset="1" stopColor="#c46e22" />
        </radialGradient>
        <radialGradient id={u('bun')} cx=".4" cy=".25" r=".85">
          <stop offset="0" stopColor="#ffd38a" />
          <stop offset=".6" stopColor="#e99a46" />
          <stop offset="1" stopColor="#b8631e" />
        </radialGradient>
        <radialGradient id={u('apple')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#d6ff9a" />
          <stop offset=".6" stopColor="#7fd34e" />
          <stop offset="1" stopColor="#3f9a2c" />
        </radialGradient>
        <radialGradient id={u('peach')} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#ffe0c2" />
          <stop offset=".55" stopColor="#ffab7a" />
          <stop offset="1" stopColor="#f2737a" />
        </radialGradient>
        <linearGradient id={u('glass')} x1="0" x2="1">
          <stop offset="0" stopColor="#ffeef4" stopOpacity=".9" />
          <stop offset=".5" stopColor="#ffffff" stopOpacity=".5" />
          <stop offset="1" stopColor="#f8d4e1" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={u('juice')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc2d6" />
          <stop offset="1" stopColor="#ff7aa6" />
        </linearGradient>
      </defs>

      {/* стакан сока */}
      <Ground cx={196} cy={172} rx={28} ry={6} url={url} />
      <path d="M200 92l14-30" stroke="#62c98b" strokeWidth="5" strokeLinecap="round" />
      <path d="M200 92l14-30" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="3 4" strokeLinecap="round" />
      <path d="M176 92h40l-4 76a6 6 0 0 1-6 5h-20a6 6 0 0 1-6-5Z" fill={url('glass')} stroke="#f2bdd0" strokeWidth="2" />
      <path d="M178.4 106h35.2l-3 61a5 5 0 0 1-5 4h-19a5 5 0 0 1-5-4Z" fill={url('juice')} />
      <ellipse cx="196" cy="106" rx="17.6" ry="4" fill="#ffd6e4" />
      <ellipse cx="196" cy="92" rx="20" ry="4.5" fill="#fff7fa" stroke="#f2bdd0" strokeWidth="2" />
      <Gloss d="M183 100l-1 60" w={4} o={0.85} />
      {/* долька на краю */}
      <path d="M210 92a12 12 0 0 1 12-12v12Z" fill="#ffd36b" stroke="#f4a836" strokeWidth="1.5" />

      {/* тарелка с выпечкой */}
      <Ground cx={98} cy={172} rx={86} ry={12} url={url} />
      <ellipse cx="98" cy="150" rx="84" ry="24" fill={url('plate')} />
      <ellipse cx="98" cy="148" rx="68" ry="16" fill="#ffffff" stroke="#fbe0e9" strokeWidth="2" />
      <ellipse cx="98" cy="150" rx="84" ry="24" fill="none" stroke="#9adf9f" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      {/* булочка */}
      <path d="M70 146c-14 0-22-10-18-24 4-16 20-26 40-26s34 10 38 26c4 14-4 24-18 24Z" fill={url('bun')} />
      <path d="M64 118q28-14 56 0" stroke="#ffe2a8" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9" />
      <g fill="#fff8e6">
        <ellipse cx="80" cy="108" rx="2" ry="1.2" />
        <ellipse cx="92" cy="104" rx="2" ry="1.2" />
        <ellipse cx="104" cy="108" rx="2" ry="1.2" />
        <ellipse cx="88" cy="114" rx="2" ry="1.2" />
      </g>
      <Gloss d="M62 128q2-12 14-20" w={3.4} o={0.55} />
      {/* бауырсақтар */}
      <g>
        <ellipse cx="46" cy="144" rx="15" ry="12" fill={url('dough')} />
        <Gloss d="M38 138q4-6 10-6" w={2.6} o={0.6} />
        <ellipse cx="140" cy="146" rx="15" ry="12" fill={url('dough')} />
        <Gloss d="M132 140q4-6 10-6" w={2.6} o={0.6} />
        <ellipse cx="120" cy="154" rx="12" ry="9.5" fill={url('dough')} />
        <ellipse cx="66" cy="156" rx="12" ry="9.5" fill={url('dough')} />
      </g>

      {/* яблоко */}
      <Ground cx={30} cy={178} rx={18} ry={4} url={url} />
      <path d="M30 150c-10-6-24 0-22 14 2 12 12 18 22 14 10 4 20-2 22-14 2-14-12-20-22-14Z" fill={url('apple')} />
      <path d="M30 150q0-8 4-12" stroke="#7a4a22" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M33 143c6-6 14-4 16 0-6 4-12 4-16 0Z" fill="#46b85d" />
      <Gloss d="M16 158q0 8 6 12" w={3} o={0.7} />
      {/* персик */}
      <circle cx="160" cy="166" r="12" fill={url('peach')} />
      <path d="M160 155q-3 6 0 22" stroke="#e65f6b" strokeWidth="1.4" fill="none" opacity=".55" />
      <path d="M161 154c4-6 11-5 13-2-4 4-9 4-13 2Z" fill="#5fc46c" />

      <Sparkle x={150} y={78} s={1.1} fill="#fff" />
      <Sparkle x={24} y={98} s={0.9} fill="#ffe6f0" />
    </>
  );
}

export function MealArt({ kind, id, className = '' }: { kind: MealArtKind; id: string; className?: string }) {
  const u = (n: string) => `${id}-${n}`;
  const url = (n: string) => `url(#${u(n)})`;
  const label = { breakfast: 'Таңғы ас иллюстрациясы', lunch: 'Түскі ас иллюстрациясы', snack: 'Бесін ас иллюстрациясы' }[kind];
  return (
    <svg className={className} viewBox="0 56 240 134" width="240" height="134" role="img" aria-label={label}>
      {kind === 'breakfast' && <Breakfast u={u} url={url} />}
      {kind === 'lunch' && <Lunch u={u} url={url} />}
      {kind === 'snack' && <Snack u={u} url={url} />}
    </svg>
  );
}
