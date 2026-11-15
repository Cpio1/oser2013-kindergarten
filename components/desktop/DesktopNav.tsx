'use client';

import { navigation } from '@/lib/site-data';
import { focusSection } from '../shared/nav';

export function DesktopNav({ active }: { active: string | null }) {
  return (
    <nav aria-label="Негізгі мәзір">
      <ul className="flex items-center gap-1 xl:gap-2">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => focusSection(item.id)}
              aria-current={active === item.id ? 'true' : undefined}
              className="nav-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
