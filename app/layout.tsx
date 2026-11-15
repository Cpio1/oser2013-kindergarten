import type { Metadata, Viewport } from 'next';
import './fonts.css';
import './globals.css';
import { site } from '@/lib/site-data';

const title = `${site.name} — Қарақыстақ ауылындағы балабақша`;
const description =
  'Қарақыстақ ауылындағы «Осер 2013» қазақ тілді балабақшасы: төрт жас тобы, күніне үш мезгіл тамақтану. Мекенжайы: Жамбыл ауданы, Бердіғұлов көшесі, 19А.';
// Relative social images need the confirmed production domain.
const ogImage = site.domain ? site.media.hero?.src : undefined;

export const metadata: Metadata = {
  title,
  description,
  applicationName: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title,
    description,
    locale: 'kk_KZ',
    type: 'website',
    siteName: site.name,
    ...(ogImage ? { images: [{ url: ogImage, alt: site.media.hero?.alt }] } : {}),
  },
  ...(site.domain ? { metadataBase: new URL(site.domain), alternates: { canonical: '/' } } : {}),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFF9EE',
  colorScheme: 'only light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk" className="bg-cream">
      <head>
        <link rel="preload" href="/fonts/nunito-cyrillic-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/nunito-cyrillic-900-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/nunito-cyrillic-ext-900-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream text-ink">{children}</body>
    </html>
  );
}
