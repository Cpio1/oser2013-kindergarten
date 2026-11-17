/**
 * Мультяшные дети в казахских национальных костюмах для первого экрана.
 * Мальчик — сине-бархатный шапан с золотым орнаментом и бөрік с мехом;
 * девочка — камзол, платье с оборкой (етек) и тақия с пером үкі.
 * Сетка 120 × 210. Идентификаторы градиентов уникальны для каждого экземпляра (id).
 */

const GOLD = '#F5B92E';
const GOLD_DEEP = '#C98A12';
const SKIN_EDGE = '#F0B48C';
const HAIR = '#3B2416';

/** Қошқар мүйіз — стилизованный «бараний рог» */
function Horn({ x, y, s = 1, color = GOLD }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 5V-1M0-1c-1-5-8-5-8 0 0 3.5 4.5 3.5 4.5 0M0-1c1-5 8-5 8 0 0 3.5-4.5 3.5-4.5 0"
      fill="none"
      stroke={color}
      strokeWidth={2.2 / s}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Face({ id, cx = 60, cy = 72 }: { id: string; cx?: number; cy?: number }) {
  return (
    <g>
      <circle cx={cx - 32} cy={cy + 3} r="7" fill={SKIN_EDGE} />
      <circle cx={cx + 32} cy={cy + 3} r="7" fill={SKIN_EDGE} />
      <circle cx={cx} cy={cy} r="32" fill={`url(#${id}-skin)`} />
      {/* глаза с бликами */}
      <ellipse cx={cx - 12} cy={cy + 3} rx="5" ry="6.5" fill="#2A1A12" />
      <ellipse cx={cx + 12} cy={cy + 3} rx="5" ry="6.5" fill="#2A1A12" />
      <circle cx={cx - 10.5} cy={cy + 0.5} r="2.1" fill="#fff" />
      <circle cx={cx + 13.5} cy={cy + 0.5} r="2.1" fill="#fff" />
      <circle cx={cx - 13.5} cy={cy + 6} r="1" fill="#fff" opacity=".8" />
      <circle cx={cx + 10.5} cy={cy + 6} r="1" fill="#fff" opacity=".8" />
      {/* брови */}
      <path d={`M${cx - 17} ${cy - 8}q5-3 9 0M${cx + 8} ${cy - 8}q5-3 9 0`} stroke="#5A3520" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* щёчки */}
      <ellipse cx={cx - 20} cy={cy + 13} rx="6.5" ry="4" fill="#FF7E8A" opacity=".45" />
      <ellipse cx={cx + 20} cy={cy + 13} rx="6.5" ry="4" fill="#FF7E8A" opacity=".45" />
      {/* носик и улыбка */}
      <path d={`M${cx - 2} ${cy + 9}q2 2 4 0`} stroke="#C97B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d={`M${cx - 7} ${cy + 15}q7 8 14 0Z`} fill="#C2413A" />
      <path d={`M${cx - 4} ${cy + 18.5}q4 2.5 8 0`} stroke="#FF8D8D" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </g>
  );
}

function SkinDefs({ id }: { id: string }) {
  return (
    <radialGradient id={`${id}-skin`} cx=".42" cy=".38" r=".7">
      <stop offset="0" stopColor="#FFE6D2" />
      <stop offset=".7" stopColor="#FCCBA8" />
      <stop offset="1" stopColor={SKIN_EDGE} />
    </radialGradient>
  );
}

export function KidBoy({ id, className = '' }: { id: string; className?: string }) {
  const g = (n: string) => `url(#${id}-${n})`;
  return (
    <svg className={className} viewBox="0 0 120 210" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <SkinDefs id={id} />
        <linearGradient id={`${id}-coat`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4C8DF6" />
          <stop offset=".55" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E3FA8" />
        </linearGradient>
        <linearGradient id={`${id}-crown`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2425A" />
          <stop offset="1" stopColor="#B3162E" />
        </linearGradient>
        <linearGradient id={`${id}-fur`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A06A40" />
          <stop offset="1" stopColor="#6B3F22" />
        </linearGradient>
        <linearGradient id={`${id}-boot`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B83A24" />
          <stop offset="1" stopColor="#7A2214" />
        </linearGradient>
      </defs>

      <ellipse cx="60" cy="203" rx="36" ry="5.5" fill="#1E3A2C" opacity=".16" />
      {/* брюки и сапожки с загнутым носком */}
      <rect x="44" y="170" width="32" height="16" rx="4" fill="#1E2F5C" />
      <path d="M43 182h14v12c0 4-3 6-7 6H37c-3.5 0-4.5-3-1.5-5l7.5-4Z" fill={g('boot')} />
      <path d="M63 182h14l7.5 9c3 2 2 5-1.5 5H70c-4 0-7-2-7-6Z" fill={g('boot')} />
      <path d="M44 186h12M64 186h12" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />

      {/* рукава */}
      <path d="M40 106c-9 8-14 22-15 44l11 3c1-16 5-28 11-36Z" fill={g('coat')} />
      <path d="M80 106c9 8 14 22 15 44l-11 3c-1-16-5-28-11-36Z" fill={g('coat')} />
      <path d="M24.5 148.5l12 3.5M95.5 148.5l-12 3.5" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="158" r="6.5" fill="#FCCBA8" />
      <circle cx="90" cy="158" r="6.5" fill="#FCCBA8" />

      {/* шапан */}
      <path d="M38 103q22-9 44 0l11 79q-33 9-66 0Z" fill={g('coat')} />
      {/* белая рубашка и жилет под шапаном */}
      <path d="M52 102h16l-3 70h-10Z" fill="#B3162E" />
      <path d="M52 102l8 17 8-17Z" fill="#FFFFFF" />
      {/* золотая кайма полочек и подола */}
      <path d="M51.5 102 55 182M68.5 102 65 182" stroke={GOLD} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M29 177q31 9 62 0" stroke={GOLD} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M31 171q29 7 58 0" stroke={GOLD_DEEP} strokeWidth="1.3" strokeDasharray="2 3" strokeLinecap="round" opacity=".8" />
      {/* пояс */}
      <path d="M35 141q25 7 50 0" stroke="#E23D3D" strokeWidth="7" strokeLinecap="round" />
      <circle cx="60" cy="144.5" r="4.6" fill={GOLD} stroke={GOLD_DEEP} strokeWidth="1.4" />
      {/* орнамент */}
      <Horn x={42} y={160} s={1.05} />
      <Horn x={78} y={160} s={1.05} />
      <Horn x={44} y={120} s={0.8} />
      <Horn x={76} y={120} s={0.8} />
      {/* блик бархата */}
      <path d="M41 112c-2 10-2 20 0 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".25" />

      {/* шея и голова */}
      <rect x="54" y="94" width="12" height="12" rx="4" fill="#F7BE97" />
      <Face id={id} />
      {/* чёлка под шапкой */}
      <path d="M31 62q4-8 29-9 25 1 29 9-7-3-12 1-5-5-9 0-4-5-8-1-4-4-9 0-5-4-9 0-5-4-11 0Z" fill={HAIR} />

      {/* бөрік: бархатная тулья и меховой околыш */}
      <path d="M34 47q1-33 26-37 25 4 26 37-26-9-52 0Z" fill={g('crown')} />
      <path d="M60 12v34M47 16q-4 14-4 28M73 16q4 14 4 28" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" opacity=".9" />
      <Horn x={60} y={32} s={1.1} />
      <circle cx="60" cy="9.5" r="4.6" fill={GOLD} stroke={GOLD_DEEP} strokeWidth="1.2" />
      <path d="M25 59q35-20 70 0 3-8-4-13-31-15-62 0-7 5-4 13Z" fill={g('fur')} />
      <path d="M32 52q3-3 6 0M44 47q3-3 6 0M57 45q3-3 6 0M70 47q3-3 6 0M82 52q3-3 6 0" stroke="#C99A6E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Нижняя оборка платья — фестоны */
function scallops(x0: number, x1: number, y: number, r: number) {
  let d = `M${x0} ${y}`;
  for (let x = x0; x < x1 - 0.1; x += 2 * r) d += `a${r} ${r} 0 0 0 ${2 * r} 0`;
  return `${d}L${x1} ${y - 9}Q60 ${y - 1} ${x0} ${y - 9}Z`;
}

export function KidGirl({ id, className = '' }: { id: string; className?: string }) {
  const g = (n: string) => `url(#${id}-${n})`;
  return (
    <svg className={className} viewBox="0 0 120 210" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <SkinDefs id={id} />
        <linearGradient id={`${id}-dress`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF6B9A" />
          <stop offset=".6" stopColor="#F0386B" />
          <stop offset="1" stopColor="#C81E52" />
        </linearGradient>
        <linearGradient id={`${id}-vest`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#24A3B5" />
          <stop offset="1" stopColor="#11677A" />
        </linearGradient>
        <linearGradient id={`${id}-hat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF4D6D" />
          <stop offset="1" stopColor="#C2183E" />
        </linearGradient>
      </defs>

      <ellipse cx="60" cy="203" rx="38" ry="5.5" fill="#1E3A2C" opacity=".16" />
      {/* туфельки */}
      <path d="M45 190h11v6c0 3-2 5-6 5h-7c-3 0-4-3-1-5Z" fill="#B3162E" />
      <path d="M64 190h11l3 6c2 2 1 5-2 5h-7c-4 0-5-2-5-5Z" fill="#B3162E" />

      {/* волосы сзади */}
      <path d="M28 72q-2-34 32-36 34 2 32 36v22H28Z" fill={HAIR} />

      {/* рукава с оборками */}
      <path d="M41 106c-9 8-14 22-15 42l10 3c1-15 5-26 11-34Z" fill="#FFE3EC" />
      <path d="M79 106c9 8 14 22 15 42l-10 3c-1-15-5-26-11-34Z" fill="#FFE3EC" />
      <path d="M23 147q3 5 7 2 3 5 7 2M97 147q-3 5-7 2-3 5-7 2" stroke="#FF8FB1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="156" r="6.2" fill="#FCCBA8" />
      <circle cx="90" cy="156" r="6.2" fill="#FCCBA8" />

      {/* юбка */}
      <path d="M37 126q23-6 46 0l14 56q-37 10-74 0Z" fill={g('dress')} />
      <path d={scallops(21, 99, 190, 6.5)} fill="#FFC2D6" />
      <path d="M25 176q35 9 70 0" stroke={GOLD} strokeWidth="3.4" strokeLinecap="round" />
      <Horn x={44} y={160} s={0.95} color="#FFE08A" />
      <Horn x={60} y={163} s={0.95} color="#FFE08A" />
      <Horn x={76} y={160} s={0.95} color="#FFE08A" />
      <path d="M46 134c-3 12-5 24-6 36" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".25" />

      {/* камзол */}
      <path d="M40 103q20-7 40 0l6 37q-26 7-52 0Z" fill={g('vest')} />
      <path d="M52 101h16l-2 40h-12Z" fill="#FFE3EC" />
      <path d="M40 103q20-7 40 0l6 37q-26 7-52 0Z" stroke={GOLD} strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M52 102l2 39M68 102l-2 39" stroke={GOLD} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="60" cy="112" r="1.8" fill={GOLD} />
      <circle cx="60" cy="122" r="1.8" fill={GOLD} />
      <circle cx="60" cy="132" r="1.8" fill={GOLD} />
      <Horn x={45} y={121} s={0.75} />
      <Horn x={75} y={121} s={0.75} />

      {/* шея и голова */}
      <rect x="54" y="94" width="12" height="12" rx="4" fill="#F7BE97" />
      <Face id={id} />
      {/* серёжки */}
      <circle cx="28" cy="84" r="2.6" fill={GOLD} />
      <circle cx="92" cy="84" r="2.6" fill={GOLD} />
      {/* чёлка */}
      <path d="M29 66q2-26 31-27 29 1 31 27-9-12-22-12-6 6-17 7-12 0-23 5Z" fill={HAIR} />
      {/* косички */}
      {[32, 88].map((x) => (
        <g key={x}>
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx={x + (x < 60 ? -1 : 1) * (i % 2)} cy={96 + i * 9} rx="5.2" ry="6" fill={HAIR} />
          ))}
          <rect x={x - 4} y={130} width="8" height="4" rx="2" fill="#E23D3D" />
          <path d={`M${x - 3} 134l-1 8M${x} 134v9M${x + 3} 134l1 8`} stroke="#E23D3D" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ))}

      {/* тақия с пером үкі */}
      <g>
        <ellipse cx="62" cy="14" rx="7" ry="13" transform="rotate(18 62 14)" fill="#FFFFFF" />
        <ellipse cx="54" cy="16" rx="5.5" ry="11" transform="rotate(-14 54 16)" fill="#F5F5F5" />
        <ellipse cx="68" cy="20" rx="5" ry="9" transform="rotate(38 68 20)" fill="#FFFFFF" />
        <path d="M66 3q-3 2-2 6M55 6q-2 2-1 6M72 13q-2 2-2 5" stroke="#9AA3AD" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <path d="M38 47q-1-21 22-23 23 2 22 23-22 6-44 0Z" fill={g('hat')} />
      <path d="M38 44q22 6 44 0" stroke={GOLD} strokeWidth="4" strokeLinecap="round" />
      <Horn x={60} y={34} s={0.95} />
      <circle cx="46" cy="36" r="1.6" fill={GOLD} />
      <circle cx="74" cy="36" r="1.6" fill={GOLD} />
    </svg>
  );
}
