import { navigation, site } from '@/lib/site-data';
import { Brand } from './Brand';
import { Icon } from './Icons';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x grid gap-6 py-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:gap-10">
        <div className="grid gap-3">
          <Brand id="footer" />
          <p className="text-muted">{site.slogan}</p>
        </div>
        <div className="grid gap-1 text-[0.9375rem]">
          <p className="font-bold text-ink">{site.address.locality}</p>
          <p className="text-muted">{site.address.street}</p>
          {site.legalName && <p className="mt-2 text-[0.875rem] text-muted">{site.legalName}</p>}
        </div>
        <nav aria-label="Төменгі мәзір" className="flex flex-col gap-3 md:items-end">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
            {navigation.map((item) => (
              <li key={item.id}>
                <a className="footer-link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#home" className="footer-link inline-flex items-center gap-1.5 font-bold text-leaf-deep">
            <Icon name="arrow-up" className="size-4" />
            Жоғарыға
          </a>
        </nav>
      </div>
    </footer>
  );
}
