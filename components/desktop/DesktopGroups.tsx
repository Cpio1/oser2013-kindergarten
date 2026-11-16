import { site } from '@/lib/site-data';
import { Motif } from '../shared/Motifs';

/**
 * Каждая группа — свой силуэт (арка, лепестки, лист, облачко) и свой мотив.
 * Форма рисуется отдельным слоем .group-shape, текст лежит в ровной области.
 */
export function DesktopGroups() {
  return (
    <ul className="groups-grid">
      {site.groups.map((group) => (
        <li key={group.id} className={`group-card group-${group.motif} reveal`}>
          <span className="group-shape" aria-hidden="true" />
          <span className="group-medal">
            <Motif kind={group.motif} className="group-motif" />
          </span>
          <h3 className="group-name">«{group.name}»</h3>
          <p className="group-label">{group.label}</p>
          <p className="age-pill">{group.age}</p>
        </li>
      ))}
    </ul>
  );
}
