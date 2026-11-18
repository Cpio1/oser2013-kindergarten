import { site } from './site-data';

const digits = (value: string) => value.replace(/\D/g, '');

/** tel: ссылка из номера в международном формате */
export function telHref(phone: string): string | null {
  const d = digits(phone);
  if (d.length < 10) return null;
  return `tel:+${d}`;
}

/** wa.me ссылка с предварительным сообщением на казахском языке */
export function whatsappHref(number: string, message = site.contacts.whatsappMessage): string | null {
  let d = digits(number);
  // Казахстанский номер, записанный как 8 7xx… → 7 7xx…
  if (d.length === 11 && d.startsWith('8')) d = '7' + d.slice(1);
  if (d.length < 11) return null;
  return `https://wa.me/${d}?text=${encodeURIComponent(message)}`;
}

export function mapHref(): string {
  return site.links.mapPlace || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;
}

export type ContactAction = {
  key: string;
  label: string;
  hint?: string;
  href: string;
  icon: 'map' | 'video' | 'phone' | 'chat' | 'mail' | 'camera';
  external: boolean;
  primary?: boolean;
};

/** Кнопки связи: выводятся только заполненные данные */
export function contactActions(): ContactAction[] {
  const { phone, whatsapp, email, instagramProfile } = site.contacts;
  const actions: ContactAction[] = [];
  const tel = telHref(phone);
  const wa = whatsappHref(whatsapp);
  if (tel) actions.push({ key: 'phone', label: phone, hint: 'Қоңырау шалу', href: tel, icon: 'phone', external: false, primary: true });
  if (wa) actions.push({ key: 'whatsapp', label: 'WhatsApp-қа жазу', href: wa, icon: 'chat', external: true, primary: !tel });
  actions.push({ key: 'map', label: 'Картадан іздеу', hint: 'Мекенжай бойынша іздеу', href: mapHref(), icon: 'map', external: true, primary: !tel && !wa });
  actions.push({ key: 'reel', label: 'Instagram-да көру', hint: 'Бөбекжай-бақша туралы бейне', href: site.links.reel, icon: 'video', external: true });
  if (instagramProfile) actions.push({ key: 'instagram', label: 'Instagram парақшасы', href: instagramProfile, icon: 'camera', external: true });
  if (email) actions.push({ key: 'email', label: email, hint: 'Электрондық пошта', href: `mailto:${email}`, icon: 'mail', external: false });
  return actions;
}
