import { site } from '@/lib/site-data';
import { HeroScene } from '../shared/HeroScene';
import { HeroFactText } from '../shared/HeroHeading';
import { Icon } from '../shared/Icons';
import { ButtonLink } from '../shared/ui';

/** Мобильный первый экран: действия выше иллюстрации, чтобы кнопка была видна сразу */
export function MobileHeroBody() {
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
        <HeroScene variant="mobile" />
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
