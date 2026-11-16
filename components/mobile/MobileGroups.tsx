import { site } from '@/lib/site-data';
import { Motif } from '../shared/Motifs';

/**
 * На телефоне — одна колонка компактных строк: названия и описания
 * читаются целиком даже на 320 px. Медальон мотива у каждой группы своей формы.
 */
export function MobileGroups() {
  return (
    <ul className="grid gap-3">
      {site.groups.map((group) => (
        <li key={group.id} className={`m-group group-${group.motif} reveal`}>
          <span className="m-group-motif">
            <Motif kind={group.motif} className="size-9" />
          </span>
          <div className="min-w-0">
            <h3 className="m-group-name">«{group.name}»</h3>
            <p className="m-group-label">{group.label}</p>
          </div>
          <p className="age-pill m-age">{group.age}</p>
        </li>
      ))}
    </ul>
  );
}
