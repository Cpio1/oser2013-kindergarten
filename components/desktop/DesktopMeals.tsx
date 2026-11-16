import { site } from '@/lib/site-data';
import { MealIcon } from '../shared/Motifs';

/** Три тарелки на лепестковых подложках, средняя чуть ниже — мягкий ритм */
export function DesktopMeals() {
  return (
    <ol className="meals-row">
      {site.meals.map((meal, i) => (
        <li key={meal.id} className={`meal meal-${meal.tone} reveal`}>
          <span className="meal-plate">
            <span className="meal-petals" aria-hidden="true" />
            <MealIcon kind={meal.icon} className="meal-art" />
          </span>
          <span className="meal-order" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="meal-name">{meal.name}</h3>
        </li>
      ))}
    </ol>
  );
}
