import { contactActions } from '@/lib/links';
import { site } from '@/lib/site-data';
import { Icon } from './Icons';
import { ButtonLink } from './ui';

export function ContactInfo() {
  const { hours } = site.contacts;
  return (
    <div className="contact-info">
      <p className="text-[1.125rem] font-black text-white">«{site.name}»</p>
      <p className="mt-0.5 text-white/80">{site.tagline}</p>
      <div className="mt-4 flex gap-3">
        <span className="contact-info-icon">
          <Icon name="map" />
        </span>
        <div>
          <p className="text-[0.875rem] font-bold text-sun">Мекенжайы</p>
          <address className="not-italic text-white">{site.address.full}</address>
        </div>
      </div>
      {hours && (
        <div className="mt-4 flex gap-3">
          <span className="contact-info-icon">
            <Icon name="clock" />
          </span>
          <div>
            <p className="text-[0.875rem] font-bold text-sun">Жұмыс уақыты</p>
            <p className="text-white">{hours}</p>
          </div>
        </div>
      )}
      {site.legalName && <p className="mt-4 text-[0.875rem] text-white/80">{site.legalName}</p>}
    </div>
  );
}

export function ContactButtons() {
  return (
    <ul className="grid gap-3">
      {contactActions().map((action) => (
        <li key={action.key}>
          <ButtonLink
            href={action.href}
            icon={action.icon}
            external={action.external}
            variant={action.primary ? 'sun' : 'ghost-light'}
            hint={action.hint}
            className="w-full"
          >
            {action.label}
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
}
