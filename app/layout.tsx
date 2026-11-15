import type { Metadata, Viewport } from 'next';
import './fonts.css';
import './globals.css';
import { site } from '@/lib/site-data';
export const metadata: Metadata = { title: 'Осер 2013 — Қарақыстақ ауылындағы балабақша', description: 'Қарақыстақ ауылындағы «Осер 2013» қазақ тілді балабақшасы. Төрт жас тобы және күніне үш мезгіл тамақтану. Мекенжайы мен топтар туралы ақпарат.', openGraph: { title: 'Осер 2013 — Қазақ тілді балабақша', description: site.intro, locale: 'kk_KZ', type: 'website', ...(site.media.hero ? { images: [site.media.hero] } : {}) }, ...(site.domain?{metadataBase:new URL(site.domain),alternates:{canonical:site.domain}}:{}) };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#FFF9EE', colorScheme: 'light' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="kk"><body>{children}</body></html>}
