import { DesktopAbout } from '@/components/desktop/DesktopAbout';
import { DesktopContact } from '@/components/desktop/DesktopContact';
import { DesktopGroups } from '@/components/desktop/DesktopGroups';
import { DesktopHeroExtras, DesktopHeroVisual } from '@/components/desktop/DesktopHero';
import { DesktopMeals } from '@/components/desktop/DesktopMeals';
import { MobileAbout } from '@/components/mobile/MobileAbout';
import { MobileContact } from '@/components/mobile/MobileContact';
import { MobileGroups } from '@/components/mobile/MobileGroups';
import { MobileHeroBody } from '@/components/mobile/MobileHero';
import { MobileMeals } from '@/components/mobile/MobileMeals';
import { Documents } from '@/components/shared/Documents';
import { Footer } from '@/components/shared/Footer';
import Gallery from '@/components/shared/Gallery';
import Header from '@/components/shared/Header';
import { HeroHeading } from '@/components/shared/HeroHeading';
import { Flower, Petal, SoftStar } from '@/components/shared/Motifs';
import { DesktopOnly, MobileOnly } from '@/components/shared/Responsive';
import { Section, SectionHeading } from '@/components/shared/ui';
import { site } from '@/lib/site-data';

function structuredData() {
  const { phone, email } = site.contacts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Preschool',
    name: site.name,
    description: site.intro,
    inLanguage: 'kk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: `${site.address.region}, ${site.address.district}`,
      addressCountry: 'KZ',
    },
    ...(site.domain ? { url: site.domain } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(email ? { email } : {}),
  };
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Негізгі мазмұнға өту
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {/* Басты бет */}
        <Section id="home" className="hero" labelledBy={false}>
          <div className="container-x hero-grid">
            <div className="hero-copy">
              <HeroHeading />
              <DesktopOnly>
                <DesktopHeroExtras />
              </DesktopOnly>
            </div>
            <DesktopOnly>
              <DesktopHeroVisual />
            </DesktopOnly>
            <MobileOnly>
              <MobileHeroBody />
            </MobileOnly>
          </div>
        </Section>

        {/* Біз туралы */}
        <Section id="about" className="section-pad">
          <div className="container-x">
            <SectionHeading
              id="about"
              eyebrow="Біз туралы"
              title={site.about.title}
              decor={<Flower className="decor decor-xs" color="#F3A780" />}
            />
            <DesktopOnly>
              <DesktopAbout />
            </DesktopOnly>
            <MobileOnly>
              <MobileAbout />
            </MobileOnly>
          </div>
        </Section>

        {/* Топтар */}
        <Section id="groups" className="section-pad groups-section">
          <div className="container-x">
            <SectionHeading
              id="groups"
              eyebrow="Топтар"
              title="Әр жасқа — өз тобы"
              lead="Балабақшада жасына қарай төрт топ бар."
              decor={<SoftStar className="decor decor-xs" />}
            />
            <DesktopOnly>
              <DesktopGroups />
            </DesktopOnly>
            <MobileOnly>
              <MobileGroups />
            </MobileOnly>
          </div>
        </Section>

        {/* Тамақтану */}
        <Section id="meals" className="section-pad meals-band">
          <div className="container-x meals-layout">
            <SectionHeading
              id="meals"
              eyebrow="Тамақтану"
              title="Күніне үш мезгіл тамақтану"
              decor={<Petal className="decor decor-xs" />}
            />
            <DesktopOnly>
              <DesktopMeals />
            </DesktopOnly>
            <MobileOnly>
              <MobileMeals />
            </MobileOnly>
          </div>
        </Section>

        <Gallery />
        <Documents />

        {/* Байланыс */}
        <Section id="contact" className="section-pad contact-section">
          <div className="container-x">
            <div className="contact-card">
              <span className="card-decor" aria-hidden="true">
                <span className="contact-blob" />
              </span>
              <div className="relative">
                <SectionHeading id="contact" eyebrow="Байланыс" title="Мекенжайымыз" tone="light" />
                <DesktopOnly>
                  <DesktopContact />
                </DesktopOnly>
                <MobileOnly>
                  <MobileContact />
                </MobileOnly>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
