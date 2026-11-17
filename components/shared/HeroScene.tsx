import Image from 'next/image';
import { site } from '@/lib/site-data';
import { HeroArtTall, HeroArtWide } from './HeroArt';
import { SoftStar } from './Motifs';
import { HeroTrail, Rainbow } from './Scenery';

/**
 * Композиция первого экрана: фото в арке, крупная эмблема вместо солнца
 * (над правым краем арки), по сторонам фото — мальчик и девочка
 * в казахских национальных костюмах (отдельный декоративный слой).
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
      <Rainbow className="hero-rainbow" single={mobile} />
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
        <HeroTrail className="hero-trail" />
        <SoftStar className="decor decor-xs hero-star" color="#F3A780" />
        {/* маскоты: прозрачный PNG 1086×1448, без оптимизации (static export) — исходное качество */}
        <Image src="/mascot-boy.png" width={1086} height={1448} alt="" sizes={mobile ? '6rem' : '10rem'} priority unoptimized className="hero-kid hero-kid-boy" />
        <Image src="/mascot-girl.png" width={1086} height={1448} alt="" sizes={mobile ? '6rem' : '10rem'} priority unoptimized className="hero-kid hero-kid-girl" />
      </span>
    </div>
  );
}
