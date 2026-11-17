import { site } from '@/lib/site-data';
import { FactArt, Flower, Petal, SoftStar } from './Motifs';

export function AboutFacts({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={`about-facts ${compact ? 'about-facts-compact' : ''}`}>
      {site.about.facts.map((fact, i) => (
        <div key={fact.label} className={`fact-chip fact-${i + 1} reveal`}>
          <span className="fact-art" aria-hidden="true">
            <FactArt kind={fact.art} className="fact-art-svg" />
          </span>
          <div className="min-w-0">
            <dt className="fact-label">{fact.label}</dt>
            <dd className="fact-value">{fact.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

/** main-page2: изображение или настоящий видеофайл (тип задаётся в site-data) */
export function AboutMedia({ className = '' }: { className?: string }) {
  const media = site.media.about;
  if (!media) return null;
  return (
    <div className={`about-frame ${className}`}>
      <span className="about-frame-backdrop" aria-hidden="true" />
      <AboutMediaElement />
      <span className="about-frame-decor" aria-hidden="true">
        <Petal className="decor decor-md about-leaf sway-leaf" />
        <Flower className="decor decor-sm about-flower" color="#F3A780" />
        <SoftStar className="decor decor-xs about-star" />
      </span>
    </div>
  );
}

function AboutMediaElement() {
  const media = site.media.about;
  if (!media) return null;
  if (media.kind === 'video') {
    return (
      <video
        className="about-media"
        controls
        playsInline
        preload="metadata"
        width={media.width}
        height={media.height}
        poster={media.poster || undefined}
        aria-label={media.label}
      >
        <source src={media.src} />
      </video>
    );
  }
  return (
    <img
      className={`about-media ${media.transparent ? 'object-contain' : 'object-cover'}`}
      src={media.src}
      width={media.width}
      height={media.height}
      alt={media.alt}
      loading="lazy"
      decoding="async"
    />
  );
}

/** «Балабақшаның мақсаты» — отдельная карточка в разделе «Біз туралы» */
export function AboutGoal() {
  const { title, paragraphs } = site.about.goal;
  return (
    <article className="goal-card reveal" aria-labelledby="goal-title">
      <span className="goal-decor" aria-hidden="true">
        <GoalOrnament className="goal-orn goal-orn-tl" />
        <GoalOrnament className="goal-orn goal-orn-br" />
        <SoftStar className="decor decor-sm goal-star" />
        <Flower className="decor decor-sm goal-flower" color="#F3A780" />
      </span>
      <header className="goal-head">
        <span className="goal-badge" aria-hidden="true">
          <GoalTarget />
        </span>
        <h3 id="goal-title" className="goal-title">
          {title}
        </h3>
      </header>
      <div className="goal-body">
        {paragraphs.map((p, i) => (
          <p key={i} className={`goal-p goal-p-${i + 1}`}>
            <span className="goal-dot" aria-hidden="true" />
            <span>{p}</span>
          </p>
        ))}
      </div>
    </article>
  );
}

/** Нишана — мишень со стрелой: цель */
function GoalTarget() {
  return (
    <svg viewBox="0 0 48 48" fill="none" focusable="false">
      <circle cx="22" cy="26" r="17" fill="#F45F61" />
      <circle cx="22" cy="26" r="12" fill="#FFFFFF" />
      <circle cx="22" cy="26" r="7.5" fill="#FFB020" />
      <circle cx="22" cy="26" r="3" fill="#F45F61" />
      <path d="M22 26 40 8" stroke="#2F5E45" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 6l6-1-1 6-4 1Z" fill="#5E9A6C" />
    </svg>
  );
}

/** Уголок с орнаментом «қошқар мүйіз» */
function GoalOrnament({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" focusable="false">
      <path
        d="M6 58V30c0-14 10-24 24-24h28M6 30c0-8 6-12 11-12s8 4 8 8-3 6-6 6-4-2-4-4M30 6c-8 0-12 6-12 11"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 6c8 0 12 6 12 11s-4 8-8 8-6-3-6-6 2-4 4-4" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

export function AboutText() {
  return (
    <div className="space-y-3 text-muted">
      {site.about.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}
