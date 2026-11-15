import { ContactButtons, ContactInfo } from '../shared/ContactParts';

/** Одна колонка: адрес, затем крупные кнопки на всю ширину */
export function MobileContact() {
  return (
    <div className="grid gap-5">
      <ContactInfo />
      <ContactButtons />
    </div>
  );
}
