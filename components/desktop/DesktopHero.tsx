import { site } from '@/lib/site-data';
import { HeroArtTall } from '../shared/HeroArt';
import { HeroFactText } from '../shared/HeroHeading';
import { Icon } from '../shared/Icons';
import { Petal, SoftStar } from '../shared/Motifs';
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
  const hero = site.media.hero;
  return (
    <div className="hero-visual rise rise-2">
      {hero ? (
        <img
          src={hero.src}
          width={hero.width}
          height={hero.height}
          alt={hero.alt}
          fetchPriority="high"
          decoding="async"
          className={`hero-media ${hero.transparent ? 'object-contain' : 'hero-photo'}`}
        />
      ) : (
        <HeroArtTall id="desktop" className="hero-media" />
      )}
      <SoftStar className="decor decor-md float absolute left-[2%] top-[8%]" />
      <Petal className="decor decor-sm float float-late absolute bottom-[10%] right-[1%]" />
    </div>
  );
}
