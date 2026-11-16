import { ContactButtons, ContactInfo } from '../shared/ContactParts';

export function DesktopContact() {
  return (
    <div className="contact-layout">
      <ContactInfo />
      <div className="contact-actions">
        <ContactButtons />
      </div>
    </div>
  );
}
