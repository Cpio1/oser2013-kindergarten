import { site } from '@/lib/site-data';
import { Flower, Petal, SoftStar, SunBadge } from './Motifs';

const factDecor = [
  <Flower key="0" className="decor decor-sm" color="#F3A780" />,
  <SoftStar key="1" className="decor decor-sm" color="#F6C85F" />,
  <Petal key="2" className="decor decor-sm" color="#93BF85" />,
  <SunBadge key="3" className="decor decor-sm" />,
];
const factTones = ['tone-apricot', 'tone-sun', 'tone-leaf', 'tone-sky'];

export function AboutFacts({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 ${compact ? 'gap-2.5' : 'gap-3 lg:gap-4'}`}>
      {site.about.facts.map((fact, i) => (
        <div key={fact.label} className={`fact-tile ${factTones[i]} ${compact ? 'fact-tile-compact' : ''} reveal`}>
          <span className="fact-decor">{factDecor[i]}</span>
          <dt className="fact-label">{fact.label}</dt>
          <dd className="fact-value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** main-page2: изображение или настоящий видеофайл (тип задаётся в site-data) */
export function AboutMedia({ className = '' }: { className?: string }) {
  const media = site.media.about;
  if (!media) return null;
  if (media.kind === 'video') {
    return (
      <video
        className={`about-media ${className}`}
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
      className={`about-media ${media.transparent ? 'object-contain' : 'object-cover'} ${className}`}
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
