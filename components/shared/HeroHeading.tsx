import { site } from '@/lib/site-data';
import { Flower } from './Motifs';

/** Общий текстовый блок первого экрана — единственный h1 на странице */
export function HeroHeading() {
  return (
    <div className="hero-heading rise">
      <p className="hero-kicker">
        <span className="hero-name">
          <Flower className="decor decor-sm" color="#F3A780" />
          {site.name}
        </span>
        <span className="hero-chip">{site.tagline}</span>
      </p>
      <h1 className="hero-title">{site.headline}</h1>
      <p className="hero-intro">{site.intro}</p>
    </div>
  );
}

export function HeroFactText({ fact }: { fact: (typeof site.heroFacts)[number] }) {
  return (
    <span>
      {fact.before}
      <b className="font-black text-leaf-deep">{fact.em}</b>
      {fact.after}
    </span>
  );
}
