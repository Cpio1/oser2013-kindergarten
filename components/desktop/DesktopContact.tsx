import { ContactButtons, ContactInfo } from '../shared/ContactParts';
import { Cloud, Flower, SunBadge } from '../shared/Motifs';

export function DesktopContact() {
  return (
    <div className="relative grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-end lg:gap-14">
      <ContactInfo />
      <div>
        <div className="mb-4 flex items-end justify-end gap-3" aria-hidden="true">
          <Cloud className="decor decor-md float" color="#FFF9EE" />
          <SunBadge className="decor decor-lg" />
          <Flower className="decor decor-sm float float-late" color="#F3A780" />
        </div>
        <ContactButtons />
      </div>
    </div>
  );
}
