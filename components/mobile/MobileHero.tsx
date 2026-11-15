import { site } from '@/lib/site-data';
import { HeroArtWide } from '../shared/HeroArt';
import { HeroFactText } from '../shared/HeroHeading';
import { Icon } from '../shared/Icons';
import { ButtonLink } from '../shared/ui';

/** Мобильный первый экран: действия выше иллюстрации, чтобы кнопка была видна сразу */
export function MobileHeroBody() {
  const hero = site.media.hero;
  return (
    <div className="m-hero-body">
      <div className="m-hero-actions rise rise-2">
        <ButtonLink href="#groups" trailing="arrow-right" className="m-hero-cta">
          Топтармен танысу
        </ButtonLink>
        <a href="#contact" className="text-link">
          <Icon name="map" className="size-5" />
          Мекенжайымыз
        </a>
      </div>
      <div className="m-hero-visual rise rise-3">
        {hero ? (
          <img
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt={hero.alt}
            fetchPriority="high"
            decoding="async"
            className={`m-hero-media ${hero.transparent ? 'object-contain' : 'm-hero-photo'}`}
          />
        ) : (
          <HeroArtWide id="mobile" className="m-hero-media" />
        )}
      </div>
      <ul className="m-hero-facts rise rise-3" aria-label="Қысқаша мәлімет">
        {site.heroFacts.map((fact) => (
          <li key={fact.id}>
            <HeroFactText fact={fact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
