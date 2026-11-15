import { site } from '@/lib/site-data';
import { AboutFacts, AboutMedia, AboutText } from '../shared/AboutParts';
import { ButtonLink } from '../shared/ui';

export function MobileAbout() {
  return (
    <div className="grid gap-5">
      <AboutText />
      <AboutMedia />
      <AboutFacts compact />
      <ButtonLink href={site.links.reel} variant="secondary" icon="video" external className="w-full">
        Instagram-да көру
      </ButtonLink>
    </div>
  );
}
