import { site } from '@/lib/site-data';
import { MealIcon } from '../shared/Motifs';

export function DesktopMeals() {
  return (
    <ol className="grid grid-cols-3 gap-4 lg:gap-6">
      {site.meals.map((meal, i) => (
        <li key={meal.id} className="meal-card reveal">
          <span className={`meal-blob tone-${meal.tone}`}>
            <MealIcon kind={meal.icon} className="size-14 lg:size-16" />
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
