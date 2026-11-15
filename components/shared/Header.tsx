'use client';

import { useEffect, useRef } from 'react';
import { Brand } from './Brand';
import { CompactNavOnly, WideNavOnly } from './Responsive';
import { useActiveSection } from './nav';
import { DesktopNav } from '../desktop/DesktopNav';
import { MobileMenu } from '../mobile/MobileMenu';

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const active = useActiveSection();

  // Реальная высота шапки → --header-h (используется scroll-padding-top и меню)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const apply = () => root.style.setProperty('--header-h', `${Math.round(el.getBoundingClientRect().height)}px`);
    const footer = document.querySelector<HTMLElement>('.site-footer');
    const applyFooter = () => footer && root.style.setProperty('--footer-h', `${Math.round(footer.getBoundingClientRect().height)}px`);
    apply();
    applyFooter();
    const observer = new ResizeObserver(() => {
      apply();
      applyFooter();
    });
    observer.observe(el);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className="site-header">
      <div className="container-x flex h-full items-center justify-between gap-4">
        <Brand id="header" />
        <WideNavOnly>
          <DesktopNav active={active} />
        </WideNavOnly>
        <CompactNavOnly>
          <MobileMenu active={active} />
        </CompactNavOnly>
      </div>
    </header>
  );
}
