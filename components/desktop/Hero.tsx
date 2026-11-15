import { site } from '@/lib/site-data';
import { GardenArt } from '../shared/Motif';
export function DesktopHero() { return <div className="hero-desktop"><div><p className="eyebrow">Қарақыстақ ауылы · {site.tagline}</p><p className="hero-name">{site.name}</p><h1>{site.headline}</h1><p className="hero-description">{site.intro}</p><HeroActions/><HeroFacts/></div><HeroVisual/></div> }
export function HeroVisual() { return site.media.hero ? <img className="hero-image" src={site.media.hero} alt="Осер 2013 балабақшасы" fetchPriority="high"/> : <GardenArt/> }
export function HeroActions() { return <div className="hero-actions"><a className="button" href="#groups">Топтармен танысу <span aria-hidden="true">↗</span></a><a className="text-link" href="#contact">Мекенжайымыз <span aria-hidden="true">↗</span></a></div> }
export function HeroFacts() { return <div className="hero-facts"><span><b>4</b> топ</span><span>Қазақ тілінде</span><span>Күніне <b>3</b> мезгіл тамақ</span></div> }
