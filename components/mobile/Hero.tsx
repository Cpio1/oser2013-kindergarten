import { site } from '@/lib/site-data';
import { HeroActions, HeroFacts, HeroVisual } from '../desktop/Hero';
export function MobileHero() { return <div className="hero-mobile"><p className="eyebrow">{site.tagline}</p><p className="hero-name">{site.name}</p><h1>{site.headline}</h1><p className="hero-description">{site.intro}</p><HeroVisual/><HeroActions/><HeroFacts/></div> }
