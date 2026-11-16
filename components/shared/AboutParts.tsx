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

export function AboutText() {
  return (
    <div className="space-y-3 text-muted">
      {site.about.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}
