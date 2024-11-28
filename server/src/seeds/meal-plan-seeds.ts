import { MealPlan } from "../models/meal-plan.js";

export const seedMealPlans = async () => {
  await MealPlan.bulkCreate([
    { name: 'MealPlan 1', favorite_ids: [641443, 663151, 651103, 641679, 637658] },
  ], { individualHooks: true });
};