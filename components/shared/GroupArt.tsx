import type { MotifKind } from '@/lib/site-data';

/**
 * Яркие мультяшные сцены для карточек групп. Сетка 240 × 150.
 *  • Құлыншақ — жеребёнок на лугу
 *  • Балдаурен — мальчик и девочка на фоне радуги
 *  • Балбөбек — малыши с игрушками
 *  • Бөбек — малыши в сказочном окружении (грибок-домик, звёздочки)
 * id делает идентификаторы градиентов уникальными (версии для компьютера и телефона).
 */

const SKIN = '#FCCBA8';
const HAIR = '#3B2416';

type KidProps = {
  x: number;
  y: number;
  s?: number;
  shirt: string;
  pants?: string;
  girl?: boolean;
  wave?: 'left' | 'right';
  hair?: string;
  flip?: boolean;
};

/** Малыш-«чиби»: начало координат — между ступнями */
function Kid({ x, y, s = 1, shirt, pants = '#2F4F8F', girl = false, wave, hair = HAIR, flip = false }: KidProps) {
  const armL = wave === 'left' ? 'M-10-30-19-45' : 'M-10-30-17-19';
  const armR = wave === 'right' ? 'M10-30 19-45' : 'M10-30 17-19';
  const handL = wave === 'left' ? [-19, -46] : [-17, -18];
  const handR = wave === 'right' ? [19, -46] : [17, -18];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <ellipse cx="0" cy="1" rx="15" ry="3" fill="#1E3A2C" opacity=".15" />
      {/* ножки */}
      <rect x="-8" y="-15" width="6" height="14" rx="3" fill={girl ? SKIN : pants} />
      <rect x="2" y="-15" width="6" height="14" rx="3" fill={girl ? SKIN : pants} />
      <ellipse cx="-5" cy="-1.5" rx="5" ry="3" fill="#C2413A" />
      <ellipse cx="5" cy="-1.5" rx="5" ry="3" fill="#C2413A" />
      {/* руки */}
      <path d={`${armL}${armR}`} stroke={shirt} strokeWidth="6" strokeLinecap="round" />
      <circle cx={handL[0]} cy={handL[1]} r="3.6" fill={SKIN} />
      <circle cx={handR[0]} cy={handR[1]} r="3.6" fill={SKIN} />
      {/* туловище: платье или рубашка */}
      {girl ? (
        <path d="M-15-11-8-37H8L15-11Q0-6-15-11Z" fill={shirt} />
      ) : (
        <path d="M-12-13Q-13-35 0-37 13-35 12-13Z" fill={shirt} />
      )}
      {girl && <path d="M-14-13Q0-8 14-13" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".7" />}
      {/* голова */}
      <circle cx="0" cy="-51" r="15" fill={SKIN} />
      {girl && (
        <>
          <circle cx="-16" cy="-50" r="5.5" fill={hair} />
          <circle cx="16" cy="-50" r="5.5" fill={hair} />
          <path d="M-20-58l-6-4v8ZM20-58l6-4v8Z" fill="#FF4D7E" />
        </>
      )}
      <path d="M-15-53Q-15-69 0-68 15-69 15-53 9-61 3-58-2-62-7-58-12-60-15-53Z" fill={hair} />
      <circle cx="-5.5" cy="-49" r="2.4" fill="#2A1A12" />
      <circle cx="5.5" cy="-49" r="2.4" fill="#2A1A12" />
      <circle cx="-4.8" cy="-49.8" r=".8" fill="#fff" />
      <circle cx="6.2" cy="-49.8" r=".8" fill="#fff" />
      <ellipse cx="-9.5" cy="-44" rx="3" ry="1.9" fill="#FF7E8A" opacity=".55" />
      <ellipse cx="9.5" cy="-44" rx="3" ry="1.9" fill="#FF7E8A" opacity=".55" />
      <path d="M-4-43q4 4.5 8 0Z" fill="#C2413A" />
    </g>
  );
}

function Flower({ x, y, s = 1, petal = '#FF6B9A', core = '#FFD34D' }: { x: number; y: number; s?: number; petal?: string; core?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0v12" stroke="#3E9B5A" strokeWidth="2.2" strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="0" cy="-5" rx="3.6" ry="5" fill={petal} transform={`rotate(${r})`} />
      ))}
      <circle r="3" fill={core} />
    </g>
  );
}

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M6 20C0 20-1 12 4 10 4 3 12 0 17 4 20-2 30-2 32 6 38 5 42 10 40 15 42 19 39 21 36 20Z"
      fill="#fff"
    />
  );
}

function Sparkle({ x, y, s = 1, color = '#FFD34D' }: { x: number; y: number; s?: number; color?: string }) {
  return <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-7C1-2 2-1 7 0 2 1 1 2 0 7-1 2-2 1-7 0-2-1-1-2 0-7Z" fill={color} />;
}

function Sun({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={-1.8} y={-r - 8} width="3.6" height="6" rx="1.8" fill="#FFA928" transform={`rotate(${i * 36})`} />
      ))}
      <circle r={r} fill="#FFD34D" stroke="#F3A21F" strokeWidth="1.5" />
      <path d={`M${-r * 0.4} ${r * 0.15}q${r * 0.4} ${r * 0.4} ${r * 0.8} 0`} stroke="#8A5A2B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx={-r * 0.35} cy={-r * 0.15} r="1.5" fill="#8A5A2B" />
      <circle cx={r * 0.35} cy={-r * 0.15} r="1.5" fill="#8A5A2B" />
    </g>
  );
}

function Meadow({ id, back = '#8FD16F', front = '#5DBB63' }: { id: string; back?: string; front?: string }) {
  return (
    <>
      <ellipse cx="60" cy="168" rx="140" ry="52" fill={back} />
      <ellipse cx="200" cy="164" rx="110" ry="44" fill={`url(#${id}-grass)`} />
      <ellipse cx="120" cy="182" rx="180" ry="46" fill={front} />
    </>
  );
}

function Foal({ body }: { body: string }) {
  return (
    <g>
      {/* хвост */}
      <path d="M78 92c-14-4-20 8-16 20 2-8 8-12 16-12Z" fill="#8A4B2A" />
      {/* дальние ножки */}
      <rect x="88" y="104" width="8" height="26" rx="4" fill="#C8875A" />
      <rect x="124" y="104" width="8" height="26" rx="4" fill="#C8875A" />
      {/* туловище */}
      <ellipse cx="110" cy="98" rx="34" ry="20" fill={body} />
      <ellipse cx="104" cy="104" rx="16" ry="8" fill="#F6D3B0" opacity=".7" />
      {/* ближние ножки с копытцами */}
      <rect x="80" y="106" width="9" height="28" rx="4.5" fill="#D9985F" />
      <rect x="132" y="106" width="9" height="28" rx="4.5" fill="#D9985F" />
      <path d="M80 129h9v4a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3ZM132 129h9v4a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3Z" fill="#6B3F22" />
      {/* шея и голова */}
      <path d="M128 90c4-14 10-26 20-32l14 10c-6 8-12 20-16 30Z" fill="#E1A570" />
      <ellipse cx="160" cy="62" rx="19" ry="21" transform="rotate(28 160 62)" fill={body} />
      <ellipse cx="170" cy="76" rx="12" ry="10" transform="rotate(28 170 76)" fill="#F6D3B0" />
      <circle cx="168" cy="78" r="1.6" fill="#8A4B2A" />
      <circle cx="175" cy="75" r="1.6" fill="#8A4B2A" />
      {/* ушки */}
      <path d="M146 46l-2-14 10 8Z" fill="#D9985F" />
      <path d="M156 42l4-13 6 11Z" fill="#D9985F" />
      <path d="M148 43l-1-6 4 4ZM158 40l2-6 3 5Z" fill="#F6B4A6" />
      {/* грива */}
      <path d="M150 42c-10 2-14 10-14 16-6 2-10 10-10 16-4 4-5 10-4 14 6-6 10-12 12-20 4-2 8-8 10-14 4-2 6-6 6-12Z" fill="#8A4B2A" />
      <path d="M152 42c-2 4-6 6-8 6" stroke="#B5683C" strokeWidth="2" strokeLinecap="round" />
      {/* глаз и щёчка */}
      <ellipse cx="160" cy="60" rx="4.6" ry="5.6" fill="#2A1A12" />
      <circle cx="161.6" cy="58" r="1.7" fill="#fff" />
      <ellipse cx="164" cy="68" rx="4" ry="2.4" fill="#FF7E8A" opacity=".5" />
      <path d="M164 82q4 3 8 1" stroke="#8A4B2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* блик */}
      <path d="M92 88c6-5 14-6 22-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".35" />
    </g>
  );
}

function Blocks({ x, y }: { x: number; y: number }) {
  const cube = (cx: number, cy: number, c: string, letter: string) => (
    <g key={letter}>
      <rect x={cx} y={cy} width="18" height="18" rx="3" fill={c} />
      <path d={`M${cx} ${cy + 3}l4-5h14l-4 5Z`} fill="#fff" opacity=".35" />
      <text x={cx + 9} y={cy + 13.5} textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff" fontFamily="Nunito, sans-serif">
        {letter}
      </text>
    </g>
  );
  return (
    <g transform={`translate(${x} ${y})`}>
      {cube(0, 0, '#F45F61', 'Ә')}
      {cube(20, 0, '#3AA8EC', 'Б')}
      {cube(10, -19, '#FFB020', 'А')}
    </g>
  );
}

function Teddy({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="-8" cy="-30" r="5" fill="#B5743F" />
      <circle cx="8" cy="-30" r="5" fill="#B5743F" />
      <ellipse cx="0" cy="-9" rx="11" ry="10" fill="#C98A52" />
      <circle cx="0" cy="-24" r="10" fill="#C98A52" />
      <ellipse cx="0" cy="-20" rx="4.5" ry="3.4" fill="#F1D3AE" />
      <circle cx="-3.5" cy="-26" r="1.5" fill="#2A1A12" />
      <circle cx="3.5" cy="-26" r="1.5" fill="#2A1A12" />
      <circle cx="0" cy="-21" r="1.4" fill="#2A1A12" />
      <ellipse cx="0" cy="-7" rx="6" ry="5" fill="#F1D3AE" />
      <path d="M-5-15l5 3 5-3-5 3Z" stroke="#F45F61" strokeWidth="3" strokeLinejoin="round" />
    </g>
  );
}

function Ball({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#FFD34D" />
      <path d={`M${-r} 0a${r} ${r} 0 0 0 ${2 * r} 0Z`} fill="#3AA8EC" />
      <path d={`M0 ${-r}v${2 * r}`} stroke="#F45F61" strokeWidth={r / 3} />
      <circle cx={-r * 0.4} cy={-r * 0.45} r={r * 0.22} fill="#fff" opacity=".7" />
    </g>
  );
}

function Duck({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="-7" rx="11" ry="7" fill="#FFD34D" />
      <circle cx="7" cy="-16" r="6" fill="#FFD34D" />
      <path d="M12-16l6 1-6 3Z" fill="#FF8A3D" />
      <circle cx="8.5" cy="-17.5" r="1.3" fill="#2A1A12" />
      <path d="M-4-9q4 3 8 0" stroke="#F3A21F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </g>
  );
}

function MushroomHouse({ x, y, cap }: { x: number; y: number; cap: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-18 0v-26h36V0Z" fill="#FFF3DA" />
      <path d="M-5 0v-13a5 5 0 0 1 10 0V0Z" fill="#C2783E" />
      <circle cx="3" cy="-7" r="1" fill="#FFD34D" />
      <circle cx="11" cy="-18" r="3.6" fill="#8FD0F6" stroke="#C2783E" strokeWidth="1.4" />
      <path d="M-34-24C-30-50 30-50 34-24Z" fill={cap} />
      <circle cx="-16" cy="-34" r="4.5" fill="#fff" />
      <circle cx="4" cy="-40" r="3.5" fill="#fff" />
      <circle cx="20" cy="-31" r="4" fill="#fff" />
      <circle cx="-26" cy="-27" r="2.5" fill="#fff" />
    </g>
  );
}

export function GroupArt({ kind, id, className = '' }: { kind: MotifKind; id: string; className?: string }) {
  const u = (n: string) => `${id}-${n}`;
  const skies: Record<MotifKind, [string, string]> = {
    foal: ['#5FC3F5', '#C9EEFF'],
    flower: ['#7FD0FA', '#E3F6FF'],
    sprout: ['#B9A6FF', '#FFE3F1'],
    chick: ['#FF9CC8', '#FFE9B8'],
  };
  const [top, bottom] = skies[kind];
  return (
    <svg className={className} viewBox="0 0 240 150" fill="none" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={u('sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
        <linearGradient id={u('grass')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7CCB5B" />
          <stop offset="1" stopColor="#4FA64F" />
        </linearGradient>
        {kind === 'foal' && (
          <linearGradient id={u('foal')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EDB27C" />
            <stop offset="1" stopColor="#D08E58" />
          </linearGradient>
        )}
        {kind === 'chick' && (
          <linearGradient id={u('cap')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF5A6E" />
            <stop offset="1" stopColor="#D92E4A" />
          </linearGradient>
        )}
      </defs>
      <rect width="240" height="150" fill={`url(#${u('sky')})`} />

      {kind === 'foal' && (
        <>
          <Sun x={36} y={32} r={13} />
          <Cloud x={160} y={12} s={1.1} />
          <Cloud x={80} y={26} s={0.7} />
          <Meadow id={id} />
          <Foal body={`url(#${u('foal')})`} />
          <Flower x={36} y={122} s={1.2} />
          <Flower x={60} y={134} petal="#FFD34D" core="#FF8A3D" />
          <Flower x={196} y={128} s={1.1} petal="#B48CFF" />
          <Flower x={220} y={118} petal="#fff" />
          <path d="M188 40c4-6 12-6 12 0-4 6-12 6-12 0Zm12 0c4-6 12-6 12 0-4 6-12 6-12 0Z" fill="#FF8A3D" />
        </>
      )}

      {kind === 'flower' && (
        <>
          {/* радуга */}
          {['#F45F61', '#FF963F', '#FFD34D', '#5DBB63', '#3AA8EC', '#8B6CF0'].map((c, i) => (
            <path key={c} d={`M${22 + i * 8} 138a${98 - i * 8} ${98 - i * 8} 0 0 1 ${196 - i * 16} 0`} stroke={c} strokeWidth="8.5" />
          ))}
          <Cloud x={6} y={112} s={1.3} />
          <Cloud x={176} y={112} s={1.3} />
          <Sparkle x={120} y={26} s={1.2} color="#fff" />
          <Meadow id={id} back="#8FD16F" front="#62C46A" />
          <path d="M108 104q12-6 24 0" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
          <Kid x={96} y={138} s={1.15} shirt="#3AA8EC" wave="left" />
          <Kid x={144} y={138} s={1.15} shirt="#FF4D7E" girl wave="right" />
          <Flower x={40} y={128} s={1.1} petal="#FFD34D" core="#FF8A3D" />
          <Flower x={200} y={130} s={1.1} />
          <Flower x={220} y={140} petal="#fff" />
          <Flower x={22} y={140} petal="#B48CFF" />
        </>
      )}

      {kind === 'sprout' && (
        <>
          <Sparkle x={30} y={28} s={1.3} color="#fff" />
          <Sparkle x={206} y={22} color="#FFD34D" />
          <Sparkle x={150} y={18} s={0.8} color="#fff" />
          {/* ковёр-полянка */}
          <ellipse cx="120" cy="170" rx="170" ry="58" fill={`url(#${u('grass')})`} />
          <ellipse cx="120" cy="140" rx="98" ry="14" fill="#FFE08A" opacity=".55" />
          <Blocks x={14} y={124} />
          <Kid x={82} y={140} s={1.05} shirt="#FFB020" pants="#3AA8EC" wave="left" />
          <Teddy x={110} y={140} s={0.95} />
          <Kid x={150} y={140} s={1} shirt="#7CCB5B" girl hair="#5A3520" />
          <Ball x={184} y={130} r={10} />
          <Duck x={214} y={142} />
        </>
      )}

      {kind === 'chick' && (
        <>
          {/* сказочный замок вдали */}
          <g fill="#FFFFFF" opacity=".75">
            <path d="M150 92V56h10v-8l5-8 5 8v8h10v-8l5-8 5 8v8h10v36Z" />
          </g>
          <path d="M162 50l3-10 3 10ZM187 50l3-10 3 10Z" fill="#B48CFF" />
          <path d="M168 92V78a4 4 0 0 1 8 0v14Z" fill="#FFB8D6" />
          <Sparkle x={24} y={24} s={1.3} color="#fff" />
          <Sparkle x={60} y={46} s={0.8} color="#FFD34D" />
          <Sparkle x={122} y={20} s={1.1} color="#FFD34D" />
          <Sparkle x={222} y={38} s={0.9} color="#fff" />
          <Meadow id={id} back="#9BDB7A" front="#6CCB6C" />
          <MushroomHouse x={48} y={128} cap={`url(#${u('cap')})`} />
          <Kid x={118} y={140} s={0.92} shirt="#B48CFF" girl wave="right" hair="#5A3520" />
          <Kid x={158} y={140} s={0.92} shirt="#FFB020" pants="#F45F61" wave="left" />
          {/* бабочка */}
          <g transform="translate(206 102)">
            <ellipse cx="-5" cy="-3" rx="5" ry="7" transform="rotate(-25 -5 -3)" fill="#3AA8EC" />
            <ellipse cx="5" cy="-3" rx="5" ry="7" transform="rotate(25 5 -3)" fill="#3AA8EC" />
            <ellipse cx="-4" cy="5" rx="3.5" ry="4" fill="#FFD34D" />
            <ellipse cx="4" cy="5" rx="3.5" ry="4" fill="#FFD34D" />
            <path d="M0-5v13" stroke="#3B2416" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <Flower x={196} y={134} s={1.1} petal="#FFD34D" core="#FF8A3D" />
          <Flower x={222} y={130} petal="#FF6B9A" />
          <Flower x={90} y={138} s={0.9} petal="#fff" />
        </>
      )}
    </svg>
  );
}
