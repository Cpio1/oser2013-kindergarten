import { MotifShape } from './Motifs';

/**
 * Иллюстрация первого экрана (используется, пока нет фото main-page).
 * Это сцена из мотивов групп, а не фотография садика.
 */

const label = 'Иллюстрация: күн, бұлттар, төбешіктер, құлыншақ, балапан, гүл және өскін';

function SunFace({ r }: { r: number }) {
  return (
    <g className="sun-face" stroke="#624524" strokeWidth={r * .045} strokeLinecap="round" fill="none">
      <path d={`M${-r*.34} ${-r*.06}q${r*.07} ${-r*.12} ${r*.14} 0M${r*.2} ${-r*.06}q${r*.07} ${-r*.12} ${r*.14} 0`} />
      <path d={`M${-r*.16} ${r*.19}q${r*.16} ${r*.16} ${r*.32} 0`} />
      <g fill="#EC9971" stroke="none" opacity=".7">
        <ellipse cx={-r*.43} cy={r*.15} rx={r*.12} ry={r*.07} />
        <ellipse cx={r*.43} cy={r*.15} rx={r*.12} ry={r*.07} />
      </g>
    </g>
  );
}

function Butterfly({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="butterfly-flight">
        <g className="butterfly-wings" fill="#E78867">
          <ellipse cx="-7" cy="-4" rx="7" ry="10" transform="rotate(-28 -7 -4)" />
          <ellipse cx="7" cy="-4" rx="7" ry="10" transform="rotate(28 7 -4)" />
          <ellipse cx="-5" cy="7" rx="5" ry="6" fill="#F6C85F" />
          <ellipse cx="5" cy="7" rx="5" ry="6" fill="#F6C85F" />
        </g>
        <path d="M0 -7V9m0-15-4-5m4 5 4-5" stroke="#6B4A32" strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  );
}

const Rays = ({ r }: { r: number }) => (
  <g className="spin-slow">
    {Array.from({ length: 10 }, (_, i) => (
      <rect key={i} x={-r * 0.1} y={-r * 1.62} width={r * 0.2} height={r * 0.42} rx={r * 0.1} fill="#E9B54A" transform={`rotate(${i * 36})`} />
    ))}
  </g>
);

const CloudPath = 'M14 34a12 12 0 0 1-1-24 14 14 0 0 1 26-3 11 11 0 0 1 16 10 9 9 0 0 1-1 17Z';

const Daisy = ({ x, y, s = 1, color = '#FFFFFF' }: { x: number; y: number; s?: number; color?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {Array.from({ length: 5 }, (_, i) => (
      <ellipse key={i} cx="0" cy="-5.5" rx="3.6" ry="5" fill={color} transform={`rotate(${i * 72})`} />
    ))}
    <circle r="3.2" fill="#F6C85F" />
  </g>
);

export function HeroArtTall({ id, className = '' }: { id: string; className?: string }) {
  const clip = `hero-clip-${id}`;
  const sky = `hero-sky-${id}`;
  const arch = 'M20 250A240 240 0 0 1 500 250V430Q500 470 460 470H60Q20 470 20 430Z';
  return (
    <svg className={className} viewBox="0 0 520 480" width="520" height="480" role="img" aria-label={label}>
      <defs>
        <clipPath id={clip}>
          <path d={arch} />
        </clipPath>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE6F2" />
          <stop offset="1" stopColor="#EEF7F3" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="520" height="480" fill={`url(#${sky})`} />
        <g transform="translate(392 128)">
          <Rays r={46} />
          <circle r="46" fill="#F6C85F" />
          <circle r="34" fill="#F9D67F" />
          <SunFace r={46} />
        </g>
        <g transform="translate(64 118) scale(1.6)">
          <g className="drift">
            <path d={CloudPath} fill="#FFFFFF" />
          </g>
        </g>
        <g transform="translate(232 62)">
          <g className="drift drift-late">
            <path d={CloudPath} fill="#FFFFFF" opacity=".85" />
          </g>
        </g>
        <ellipse cx="130" cy="480" rx="260" ry="158" fill="#BFDCAE" />
        <ellipse cx="440" cy="455" rx="210" ry="112" fill="#A6CC93" />
        {/* Балдаурен — гүл */}
        <path d="M72 292V410" stroke="#5E9A6C" strokeWidth="6" strokeLinecap="round" />
        <path d="M72 372c-18-2-28-14-26-26 14 0 24 10 26 26Z" fill="#7FB070" />
        <g transform="translate(30 250) scale(1.3)">
          <g className="sway">
            <MotifShape kind="flower" />
          </g>
        </g>
        {/* Құлыншақ — төбешік артынан қарап тұр */}
        <g transform="translate(170 168) scale(3.6)">
          <g className="nod">
            <MotifShape kind="foal" />
          </g>
        </g>
        <ellipse cx="260" cy="525" rx="330" ry="164" fill="#86B47B" />
        {/* Балбөбек — өскін */}
        <g transform="translate(116 318) scale(1.15)">
          <MotifShape kind="sprout" />
        </g>
        {/* Бөбек — балапан */}
        <g transform="translate(378 316) scale(1.5)">
          <g className="bob">
            <MotifShape kind="chick" />
          </g>
        </g>
        <Butterfly x={354} y={246} s={1.15} />
        <Daisy x={214} y={428} s={1.5} />
        <Daisy x={300} y={448} s={1.2} color="#FCE1D2" />
        <Daisy x={468} y={424} s={1.3} />
        <Daisy x={52} y={440} s={1.1} color="#FCE1D2" />
      </g>
      <path d={arch} fill="none" stroke="#FFFFFF" strokeWidth="8" />
    </svg>
  );
}

export function HeroArtWide({ id, className = '' }: { id: string; className?: string }) {
  const clip = `hero-clip-${id}`;
  const sky = `hero-sky-${id}`;
  const shape = 'M0 64Q0 28 36 28H118Q132 28 142 16Q156 0 180 0Q204 0 218 16Q228 28 242 28H324Q360 28 360 64V184Q360 212 332 212H28Q0 212 0 184Z';
  return (
    <svg className={className} viewBox="0 0 360 212" width="360" height="212" role="img" aria-label={label}>
      <defs>
        <clipPath id={clip}>
          <path d={shape} />
        </clipPath>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE6F2" />
          <stop offset="1" stopColor="#EEF7F3" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="360" height="212" fill={`url(#${sky})`} />
        <g transform="translate(306 66)">
          <Rays r={22} />
          <circle r="22" fill="#F6C85F" />
          <circle r="16" fill="#F9D67F" />
          <SunFace r={22} />
        </g>
        <g transform="translate(20 46) scale(1.05)">
          <g className="drift">
            <path d={CloudPath} fill="#FFFFFF" />
          </g>
        </g>
        <g transform="translate(212 38) scale(.62)">
          <g className="drift drift-late">
            <path d={CloudPath} fill="#FFFFFF" opacity=".85" />
          </g>
        </g>
        <ellipse cx="80" cy="252" rx="190" ry="108" fill="#BFDCAE" />
        <ellipse cx="320" cy="244" rx="160" ry="88" fill="#A6CC93" />
        <path d="M44 126V200" stroke="#5E9A6C" strokeWidth="4" strokeLinecap="round" />
        <g transform="translate(17 99) scale(.85)">
          <g className="sway">
            <MotifShape kind="flower" />
          </g>
        </g>
        <g transform="translate(118 60) scale(1.95)">
          <g className="nod">
            <MotifShape kind="foal" />
          </g>
        </g>
        <ellipse cx="180" cy="292" rx="262" ry="122" fill="#86B47B" />
        <g transform="translate(70 130) scale(.72)">
          <MotifShape kind="sprout" />
        </g>
        <g transform="translate(252 128) scale(.95)">
          <g className="bob">
            <MotifShape kind="chick" />
          </g>
        </g>
        <Butterfly x={242} y={104} s={.65} />
        <Daisy x={160} y={196} s={1.1} />
        <Daisy x={218} y={204} s={0.9} color="#FCE1D2" />
        <Daisy x={336} y={194} s={1} />
      </g>
    </svg>
  );
}
