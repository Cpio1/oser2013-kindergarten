import { site } from '@/lib/site-data';
import { AboutFacts, AboutMedia, AboutText } from '../shared/AboutParts';
import { ButtonLink } from '../shared/ui';

export function DesktopAbout() {
  return (
    <div className={`grid items-center gap-10 lg:gap-16 ${site.media.about ? 'md:grid-cols-[1fr_1.05fr]' : 'md:grid-cols-[1.1fr_1fr]'}`}>
      <div className="reveal">
        <AboutText />
        <ButtonLink href={site.links.reel} variant="secondary" icon="video" external className="mt-6">
          Instagram-да көру
        </ButtonLink>
      </div>
      <div className="grid gap-4">
        <AboutMedia />
        <AboutFacts />
      </div>
    </div>
  );
}
