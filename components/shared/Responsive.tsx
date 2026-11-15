'use client';

import { useSyncExternalStore, type ReactNode } from 'react';

/**
 * Показывает ровно одну версию интерфейса.
 *
 * 1. В статическом HTML обе версии присутствуют, неактивная скрыта CSS-классом
 *    (display: none → не фокусируется, ленивые изображения не загружаются).
 *    Так нет «прыжка» вёрстки и сайт работает без JavaScript.
 * 2. После гидратации неактивная версия удаляется из DOM: один h1,
 *    нет повторяющихся элементов и лишних медиа.
 *
 * Ширины совпадают с CSS в globals.css (.only-*).
 */
const QUERIES = {
  mobile: '(max-width: 39.999em)',
  compactNav: '(max-width: 59.999em)',
} as const;

type QueryName = keyof typeof QUERIES;

function subscribe(query: string) {
  return (onChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  };
}

const subscribers = {
  mobile: subscribe(QUERIES.mobile),
  compactNav: subscribe(QUERIES.compactNav),
};

export function useMediaQuery(name: QueryName): boolean | null {
  return useSyncExternalStore(
    subscribers[name],
    () => window.matchMedia(QUERIES[name]).matches,
    () => null,
  );
}

function Gate({ query, when, className, children }: { query: QueryName; when: boolean; className: string; children: ReactNode }) {
  const matches = useMediaQuery(query);
  if (matches !== null && matches !== when) return null;
  return <div className={className}>{children}</div>;
}

export const MobileOnly = ({ children }: { children: ReactNode }) => (
  <Gate query="mobile" when className="only-mobile">
    {children}
  </Gate>
);

export const DesktopOnly = ({ children }: { children: ReactNode }) => (
  <Gate query="mobile" when={false} className="only-desktop">
    {children}
  </Gate>
);

export const CompactNavOnly = ({ children }: { children: ReactNode }) => (
  <Gate query="compactNav" when className="only-compact-nav">
    {children}
  </Gate>
);

export const WideNavOnly = ({ children }: { children: ReactNode }) => (
  <Gate query="compactNav" when={false} className="only-wide-nav">
    {children}
  </Gate>
);
