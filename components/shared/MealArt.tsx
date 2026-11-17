/**
 * Объёмные мультяшные иллюстрации приёмов пищи. Сетка 200 × 150.
 *  • Таңғы ас — каша с ягодами, стакан молока, банан и клубника
 *  • Түскі ас — тарелка супа, второе с котлетой и пюре, овощи
 *  • Бесін ас — бауырсақ и булочка, яблоко, сок с трубочкой
 * Это иллюстрации, а не фотографии блюд садика.
 */

export type MealArtKind = 'breakfast' | 'lunch' | 'snack';

function Shine({ d }: { d: string }) {
  return <path d={d} stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".55" />;
}

function Steam({ x, y }: { x: number; y: number }) {
  return (
    <path
      transform={`translate(${x} ${y})`}
      d="M0 0c-5-6 5-9 0-16M12 2c-5-6 5-9 0-16"
      stroke="#fff"
      strokeWidth="3.4"
      strokeLinecap="round"
      opacity=".9"
    />
  );
}

export function MealArt({ kind, id, className = '' }: { kind: MealArtKind; id: string; className?: string }) {
  const u = (n: string) => `${id}-${n}`;
  const url = (n: string) => `url(#${u(n)})`;
  return (
    <svg className={className} viewBox="0 0 200 150" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={u('bowl')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={kind === 'lunch' ? '#3AA8EC' : '#FF6B9A'} />
          <stop offset="1" stopColor={kind === 'lunch' ? '#1F78C2' : '#D93A72'} />
        </linearGradient>
        <radialGradient id={u('plate')} cx=".5" cy=".4" r=".6">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E9EEF5" />
        </radialGradient>
        <linearGradient id={u('glass')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".95" />
          <stop offset="1" stopColor="#DDEFFC" stopOpacity=".95" />
        </linearGradient>
        <radialGradient id={u('red')} cx=".35" cy=".35" r=".7">
          <stop offset="0" stopColor="#FF7A7A" />
          <stop offset="1" stopColor="#E0283E" />
        </radialGradient>
        <radialGradient id={u('gold')} cx=".35" cy=".3" r=".75">
          <stop offset="0" stopColor="#FFD98A" />
          <stop offset="1" stopColor="#D98A2B" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="140" rx="88" ry="8" fill="#000" opacity=".12" />

      {kind === 'breakfast' && (
        <g>
          {/* стакан молока */}
          <path d="M138 52h36l-5 82a6 6 0 0 1-6 6h-14a6 6 0 0 1-6-6Z" fill={url('glass')} stroke="#BFE0F7" strokeWidth="2" />
          <path d="M140 70h32l-4 64a5 5 0 0 1-5 5h-14a5 5 0 0 1-5-5Z" fill="#FFFFFF" />
          <ellipse cx="156" cy="70" rx="16" ry="3.5" fill="#F4F8FC" />
          <Shine d="M145 78l2 44" />
          {/* банан */}
          <path d="M14 112c10 18 40 22 56 8-16 4-38 0-50-14Z" fill="#FFD84D" stroke="#E0A800" strokeWidth="2" strokeLinejoin="round" />
          <path d="M14 112l-4-4" stroke="#7A5A1E" strokeWidth="3.4" strokeLinecap="round" />
          {/* миска каши */}
          <ellipse cx="86" cy="80" rx="52" ry="12" fill="#FFF0CF" />
          <path d="M34 80h104c0 32-22 52-52 52S34 112 34 80Z" fill={url('bowl')} />
          <ellipse cx="86" cy="80" rx="52" ry="12" fill="none" stroke="#FFB3CE" strokeWidth="3" />
          <path d="M40 80q46 18 92 0 0-8-46-9-46 1-46 9Z" fill="#FFE2A6" />
          {/* горошины-узор миски */}
          <circle cx="56" cy="104" r="4" fill="#fff" opacity=".85" />
          <circle cx="86" cy="112" r="4" fill="#fff" opacity=".85" />
          <circle cx="116" cy="104" r="4" fill="#fff" opacity=".85" />
          {/* ягоды и кусочек масла */}
          <rect x="76" y="70" width="14" height="10" rx="3" fill="#FFF6A8" stroke="#F1D45A" strokeWidth="1.5" />
          <circle cx="58" cy="78" r="5.5" fill="#5B6CF0" />
          <circle cx="66" cy="74" r="5" fill="#6E7EF5" />
          <circle cx="104" cy="76" r="5.5" fill={url('red')} />
          <circle cx="114" cy="79" r="5" fill={url('red')} />
          <path d="M55 74l2 2M102 72l2 2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          <Steam x={78} y={56} />
          {/* клубника */}
          <path d="M120 118c0-10 8-14 14-14s14 4 14 14c0 8-8 16-14 18-6-2-14-10-14-18Z" fill={url('red')} />
          <path d="M126 104l8 5 8-5-4 6h-8Z" fill="#4CAF50" />
          <g fill="#FFE08A">
            <circle cx="128" cy="116" r="1.2" />
            <circle cx="136" cy="114" r="1.2" />
            <circle cx="140" cy="122" r="1.2" />
            <circle cx="131" cy="125" r="1.2" />
          </g>
          <Shine d="M44 92q4 16 18 24" />
        </g>
      )}

      {kind === 'lunch' && (
        <g>
          {/* второе: тарелка с пюре, котлетой и горошком */}
          <ellipse cx="146" cy="112" rx="48" ry="22" fill={url('plate')} stroke="#D5DEEA" strokeWidth="2" />
          <ellipse cx="146" cy="110" rx="34" ry="14" fill="#F2F5FA" />
          <path d="M120 112c0-12 10-18 20-16 8-6 20-2 20 8 4 6-2 14-10 14h-22c-6 0-8-3-8-6Z" fill="#FFE7A3" />
          <ellipse cx="164" cy="108" rx="15" ry="9" fill="#B5652E" />
          <ellipse cx="162" cy="105" rx="10" ry="4" fill="#D9874A" />
          <g fill="#5DBB63">
            <circle cx="140" cy="122" r="3.4" />
            <circle cx="147" cy="124" r="3.4" />
            <circle cx="154" cy="122" r="3.4" />
            <circle cx="132" cy="120" r="3.4" />
          </g>
          {/* суп */}
          <ellipse cx="72" cy="74" rx="56" ry="13" fill="#FFF3E2" />
          <path d="M16 74h112c0 34-24 56-56 56S16 108 16 74Z" fill={url('bowl')} />
          <ellipse cx="72" cy="74" rx="56" ry="13" fill="none" stroke="#9FD6FA" strokeWidth="3" />
          <path d="M22 74q50 20 100 0 0-9-50-10-50 1-50 10Z" fill="#FF9A3D" />
          {/* кусочки овощей в супе */}
          <rect x="40" y="70" width="8" height="8" rx="2" fill="#FFD34D" transform="rotate(14 44 74)" />
          <rect x="88" y="72" width="8" height="8" rx="2" fill="#FFD34D" transform="rotate(-10 92 76)" />
          <circle cx="62" cy="76" r="4.4" fill="#FF6A3D" />
          <circle cx="104" cy="74" r="4" fill="#FF6A3D" />
          <path d="M70 70q4-4 8 0M54 72q3-3 6 0" stroke="#3E9B5A" strokeWidth="3" strokeLinecap="round" />
          {/* ложка */}
          <path d="M110 70 132 26" stroke="#C0CAD8" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="134" cy="22" rx="6" ry="8" transform="rotate(27 134 22)" fill="#D9E1EC" />
          <Steam x={56} y={50} />
          {/* овощи: морковь, огурец, помидор */}
          <path d="M8 128l26-14c4-2 8 4 4 7l-26 12c-3 1-6-3-4-5Z" fill="#FF8A3D" />
          <path d="M36 114l8-8M38 117l10-4" stroke="#3E9B5A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="184" cy="72" r="12" fill={url('red')} />
          <path d="M178 61l6 4 6-4-2 5h-8Z" fill="#3E9B5A" />
          <ellipse cx="180" cy="68" rx="3" ry="2" fill="#fff" opacity=".6" />
          <Shine d="M26 88q6 18 22 28" />
        </g>
      )}

      {kind === 'snack' && (
        <g>
          {/* сок с трубочкой */}
          <path d="M148 22l18 6-10 26" stroke="#3AA8EC" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M136 50h40l-5 82a6 6 0 0 1-6 6h-18a6 6 0 0 1-6-6Z" fill={url('glass')} stroke="#BFE0F7" strokeWidth="2" />
          <path d="M138 66h36l-4 66a5 5 0 0 1-5 5h-18a5 5 0 0 1-5-5Z" fill="#FF9A3D" />
          <ellipse cx="156" cy="66" rx="18" ry="3.6" fill="#FFB766" />
          <circle cx="176" cy="54" r="10" fill="#FFB020" />
          <circle cx="176" cy="54" r="6.5" fill="#FFD34D" />
          <path d="M176 47v14M169 54h14" stroke="#FFB020" strokeWidth="1.4" />
          <Shine d="M143 74l2 50" />
          {/* тарелка */}
          <ellipse cx="78" cy="118" rx="70" ry="18" fill={url('plate')} stroke="#D5DEEA" strokeWidth="2" />
          <ellipse cx="78" cy="116" rx="52" ry="11" fill="#F2F5FA" />
          {/* булочка с сахарной глазурью */}
          <path d="M70 108c-2-24 14-36 32-36s34 12 32 36Z" fill={url('gold')} />
          <path d="M80 86q22-12 44 0" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".9" />
          <path d="M84 98l3-2M98 92l3-2M112 96l3-2" stroke="#FF6B9A" strokeWidth="2.6" strokeLinecap="round" />
          {/* бауырсақ */}
          {[
            [32, 108, 13],
            [52, 110, 12],
            [42, 92, 12],
          ].map(([cx, cy, r]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={r} fill={url('gold')} />
              <ellipse cx={cx - r * 0.3} cy={cy - r * 0.35} rx={r * 0.35} ry={r * 0.22} fill="#fff" opacity=".55" />
            </g>
          ))}
          {/* яблоко */}
          <g transform="translate(16 -4)">
          <path d="M20 60c-12-8-26 0-24 16s12 24 24 20c12 4 22-4 24-20s-12-24-24-16Z" fill={url('red')} />
          <path d="M20 60c0-7 2-10 6-12" stroke="#6B4A32" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M24 52c4-8 12-8 16-6-4 6-11 8-16 6Z" fill="#4CAF50" />
          <Shine d="M6 72c0-5 3-8 7-9" />
          </g>
        </g>
      )}
    </svg>
  );
}
