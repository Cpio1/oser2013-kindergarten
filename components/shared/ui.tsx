import type { ReactNode } from 'react';
import { Icon, type IconName } from './Icons';

type Variant = 'primary' | 'secondary' | 'sun' | 'ghost-light';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  icon,
  trailing,
  external = false,
  className = '',
  hint,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  trailing?: IconName;
  external?: boolean;
  className?: string;
  hint?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <Icon name={icon} className="size-5 shrink-0" />}
      <span className="flex min-w-0 flex-col text-left leading-tight">
        <span>{children}</span>
        {hint && <span className="btn-hint">{hint}</span>}
      </span>
      {(trailing || external) && <Icon name={trailing ?? 'arrow-up-right'} className="ml-auto size-5 shrink-0" />}
      {external && <span className="sr-only"> (жаңа бетте ашылады)</span>}
    </a>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  decor,
  align = 'left',
  tone = 'dark',
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  decor?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}) {
  return (
    <div className={`section-heading ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${tone === 'light' ? 'text-sun' : 'text-leaf'} ${align === 'center' ? 'justify-center' : ''}`}>
        {decor}
        <span>{eyebrow}</span>
      </p>
      <h2 id={`${id}-title`} className={`section-title ${tone === 'light' ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {lead && <p className={`section-lead ${tone === 'light' ? 'text-white/85' : 'text-muted'}`}>{lead}</p>}
    </div>
  );
}

/** Оболочка раздела: уникальный id, фокус после перехода из меню, отступ под шапку */
export function Section({
  id,
  className = '',
  children,
  labelledBy = true,
}: {
  id: string;
  className?: string;
  children: ReactNode;
  labelledBy?: boolean;
}) {
  return (
    <section id={id} tabIndex={-1} aria-labelledby={labelledBy ? `${id}-title` : undefined} className={`section ${className}`}>
      {children}
    </section>
  );
}
