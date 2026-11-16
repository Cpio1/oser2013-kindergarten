import { site } from '@/lib/site-data';
import { MealIcon } from '../shared/Motifs';

export function MobileMeals() {
  return (
    <ol className="meals-row meals-row-compact">
      {site.meals.map((meal, i) => (
        <li key={meal.id} className={`meal meal-${meal.tone} reveal`}>
          <span className="meal-plate">
            <span className="meal-petals" aria-hidden="true" />
            <MealIcon kind={meal.icon} className="meal-art" />
          </span>
          <span className="sr-only">{i + 1}. </span>
          <h3 className="meal-name">{meal.name}</h3>
        </li>
      ))}
    </ol>
  );
}
