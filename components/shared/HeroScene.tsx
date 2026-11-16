import { site } from '@/lib/site-data';
import { HeroArtTall, HeroArtWide } from './HeroArt';
import { Cloud, Petal, SoftStar, SunBadge } from './Motifs';

/**
 * Композиция первого экрана: фото в арке, эмблема-медальон на краю арки,
 * вокруг — небольшие солнце, облако и листочки (отдельный декоративный слой).
 * Двигается только солнце — один акцент на экран.
 */
export function HeroScene({ variant }: { variant: 'desktop' | 'mobile' }) {
  const photo = site.media.heroPhoto;
  const emblem = site.media.hero;
  const mobile = variant === 'mobile';

  // Без фото: прежний вариант — эмблема или иллюстрация
  if (!photo) {
    if (emblem) {
      return (
        <div className={`hero-scene hero-scene-${variant} hero-scene-solo`}>
          <span className="hero-scene-backdrop" aria-hidden="true" />
          <img src={emblem.src} width={emblem.width} height={emblem.height} alt={emblem.alt} fetchPriority="high" decoding="async" className="hero-solo-emblem" />
        </div>
      );
    }
    return mobile ? <HeroArtWide id="mobile" className="m-hero-media" /> : <HeroArtTall id="desktop" className="hero-media" />;
  }

  return (
    <div className={`hero-scene hero-scene-${variant}`}>
      <span className="hero-scene-backdrop" aria-hidden="true" />
      <div className="hero-arch">
        <img
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {emblem && (
        <img
          src={emblem.src}
          width={emblem.width}
          height={emblem.height}
          alt={emblem.alt}
          decoding="async"
          className="hero-badge"
        />
      )}
      <span className="hero-scene-decor" aria-hidden="true">
        <SunBadge spin className="decor decor-lg hero-sun" />
        <Cloud className="decor decor-md hero-cloud" color="#CFE6F2" />
        <Petal className="decor decor-sm hero-leaf-a" />
        <Petal className="decor decor-xs hero-leaf-b" color="#5E9A6C" />
        <SoftStar className="decor decor-xs hero-star" color="#F3A780" />
      </span>
    </div>
  );
}
