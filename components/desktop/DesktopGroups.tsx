import { site } from '@/lib/site-data';
import { Motif } from '../shared/Motifs';

export function DesktopGroups() {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
      {site.groups.map((group, i) => (
        <li key={group.id} className={`group-card tone-${group.tone} reveal`}>
          <span className="card-decor" aria-hidden="true">
            <span className="card-blob" />
          </span>
          <div className="relative flex items-start justify-between gap-3">
            <span className="group-num">{String(i + 1).padStart(2, '0')}</span>
            <Motif kind={group.motif} className="group-motif sway-hover" />
          </div>
          <h3 className="group-name">«{group.name}»</h3>
          <p className="group-label">{group.label}</p>
          <p className="age-pill">{group.age}</p>
        </li>
      ))}
    </ul>
  );
}
