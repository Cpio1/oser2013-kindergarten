'use client';

import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/lib/site-data';
import { Icon } from '../shared/Icons';
import { focusSection } from '../shared/nav';

/**
 * Мобильное меню на Popover API: открывается и закрывается даже без JavaScript,
 * Escape и нажатие вне панели закрывают меню, фокус возвращается на кнопку.
 */
export function MobileMenu({ active }: { active: string | null }) {
  const panel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    const onToggle = (event: Event) => {
      const isOpen = (event as ToggleEvent).newState === 'open';
      setOpen(isOpen);
      if (isOpen) el.querySelector<HTMLAnchorElement>('a')?.focus();
    };
    el.addEventListener('toggle', onToggle);
    return () => el.removeEventListener('toggle', onToggle);
  }, []);

  const choose = (id: string) => {
    panel.current?.hidePopover();
    focusSection(id);
  };

  return (
    <>
      <button type="button" popoverTarget="mobile-menu" className="menu-button">
        <Icon name={open ? 'close' : 'menu'} className="size-5" />
        <span>{open ? 'Жабу' : 'Мәзір'}</span>
      </button>
      <div ref={panel} id="mobile-menu" popover="auto" className="mobile-menu">
        <nav aria-label="Негізгі мәзір">
          <ul className="container-x grid gap-1 py-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => choose(item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className="mobile-menu-link"
                >
                  <span>{item.label}</span>
                  <Icon name="arrow-right" className="size-5 shrink-0 opacity-60" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
