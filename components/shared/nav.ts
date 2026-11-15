'use client';

import { useEffect, useState } from 'react';
import { navigation } from '@/lib/site-data';

/** Перевод фокуса в раздел после перехода по якорю (без повторной прокрутки) */
export function focusSection(id: string) {
  window.setTimeout(() => {
    const el = document.getElementById(id);
    el?.focus({ preventScroll: true });
  }, 0);
}

/** Активный раздел для подсветки пункта меню */
export function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 64;
      const line = header + Math.min(window.innerHeight * 0.3, 220);
      let current: string | null = null;
      for (const item of navigation) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      // Последний раздел активен, когда страница прокручена до конца
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navigation[navigation.length - 1]?.id ?? current;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return active;
}
