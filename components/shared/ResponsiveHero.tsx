'use client';
import { useSyncExternalStore } from 'react';
import { DesktopHero } from '../desktop/Hero';
import { MobileHero } from '../mobile/Hero';
const subscribe=(callback:()=>void)=>{const query=window.matchMedia('(max-width: 639px)');query.addEventListener('change',callback);return ()=>query.removeEventListener('change',callback);};
export default function ResponsiveHero(){const mobile=useSyncExternalStore(subscribe,()=>window.matchMedia('(max-width: 639px)').matches,()=>false);return mobile?<MobileHero/>:<DesktopHero/>;}
