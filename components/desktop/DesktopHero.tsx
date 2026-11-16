import { site } from '@/lib/site-data';
import { HeroFactText } from '../shared/HeroHeading';
import { Icon } from '../shared/Icons';
import { HeroScene } from '../shared/HeroScene';
import { ButtonLink } from '../shared/ui';

export function DesktopHeroExtras() {
  return (
    <>
      <div className="hero-actions rise rise-2">
        <ButtonLink href="#groups" trailing="arrow-right">
          Топтармен танысу
        </ButtonLink>
        <a href="#contact" className="text-link">
          <Icon name="map" className="size-5" />
          Мекенжайымыз
        </a>
      </div>
      <ul className="hero-facts rise rise-3" aria-label="Қысқаша мәлімет">
        {site.heroFacts.map((fact) => (
          <li key={fact.id}>
            <HeroFactText fact={fact} />
          </li>
        ))}
      </ul>
    </>
  );
}

export function DesktopHeroVisual() {
  return (
    <div className="hero-visual rise rise-2">
      <HeroScene variant="desktop" />
    </div>
  );
}
