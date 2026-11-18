import { documentHref, site } from '@/lib/site-data';
import { FolderArt } from './Motifs';
import { Scenery } from './Scenery';
import { ButtonLink, Section } from './ui';

export function Documents() {
  const folder = documentHref(site.links.documents);
  const files = site.documents.flatMap((file) => {
    const href = documentHref(file.href);
    return href ? [{ ...file, href }] : [];
  });
  return (
    <Section id="documents" className="section-pad documents-section">
      <Scenery kind="documents" />
      <div className="container-x">
        <div className="docs-card reveal">
          <div className="docs-summary">
            <div className="docs-heading">
              <FolderArt className="docs-art" />
              <div className="min-w-0">
                <p className="eyebrow text-leaf">Ата-аналарға</p>
                <h2 id="documents-title" className="section-title">Құжаттар</h2>
                <p className="mt-2 text-muted">
                  {folder || files.length ? 'Бөбекжай-бақша құжаттарымен танысыңыз' : 'Құжаттар жақында қосылады'}
                </p>
              </div>
            </div>
            {folder && (
              <ButtonLink href={folder} icon="folder" external className="docs-open w-full sm:w-auto">
                Құжаттарды ашу
              </ButtonLink>
            )}
          </div>
          {files.length > 0 && (
            <ul className="docs-files" aria-label="Құжаттар тізімі">
              {files.map((file) => (
                <li key={file.href} className="docs-file">
                  <span className="font-bold">{file.name}</span>
                  <ButtonLink href={file.href} variant="secondary" icon="document" external>
                    <span>Ашу<span className="sr-only">: {file.name}</span></span>
                  </ButtonLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
