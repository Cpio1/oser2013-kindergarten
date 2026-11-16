import { site } from '@/lib/site-data';
import { AboutFacts, AboutMedia, AboutText } from '../shared/AboutParts';
import { ButtonLink } from '../shared/ui';

/** Фото слева, текст справа — зеркально первому экрану */
export function DesktopAbout() {
  return (
    <div className={`about-layout ${site.media.about ? '' : 'about-layout-text'}`}>
      {site.media.about && <AboutMedia className="reveal" />}
      <div className="about-copy">
        <AboutText />
        <AboutFacts />
        <ButtonLink href={site.links.reel} variant="secondary" icon="video" external className="mt-5">
          Instagram-да көру
        </ButtonLink>
      </div>
    </div>
  );
}
