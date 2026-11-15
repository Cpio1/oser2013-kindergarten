import { site } from '@/lib/site-data';
import { Petal } from './Motifs';
import { ButtonLink, Section, SectionHeading } from './ui';

/** Раздел появляется только после добавления действующей ссылки в site-data */
export function Documents() {
  if (!site.links.documents) return null;
  return (
    <Section id="documents" className="section-pad">
      <div className="container-x">
        <div className="docs-card reveal">
          <SectionHeading
            id="documents"
            eyebrow="Ақпарат"
            title="Құжаттар"
            lead="Балабақша құжаттарымен танысыңыз"
            decor={<Petal className="decor decor-xs" />}
          />
          <ButtonLink href={site.links.documents} icon="document" external className="mt-5 w-full sm:w-auto">
            Құжаттарды ашу
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
