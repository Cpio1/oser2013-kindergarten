import { site } from '@/lib/site-data';
import { MealIcon } from '../shared/Motifs';

export function MobileMeals() {
  return (
    <ol className="grid grid-cols-3 gap-2">
      {site.meals.map((meal, i) => (
        <li key={meal.id} className="m-meal reveal">
          <span className={`m-meal-blob tone-${meal.tone}`}>
            <MealIcon kind={meal.icon} className="size-10" />
          </span>
          <span className="sr-only">{i + 1}. </span>
          <h3 className="m-meal-name">{meal.name}</h3>
        </li>
      ))}
    </ol>
  );
}
