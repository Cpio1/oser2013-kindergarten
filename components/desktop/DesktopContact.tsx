import { ContactButtons, ContactInfo } from '../shared/ContactParts';
import { HouseArt } from '../shared/Motifs';

export function DesktopContact() {
  return (
    <div className="contact-layout">
      <ContactInfo />
      <div className="contact-actions">
        <HouseArt className="contact-house" />
        <ContactButtons />
      </div>
    </div>
  );
}
