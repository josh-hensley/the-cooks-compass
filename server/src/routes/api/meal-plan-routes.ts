import express from 'express';
import {
  getAllMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
} from '../../controllers/meal-plan-controller.js';

const router = express.Router();

// GET /MealPlans - Get all MealPlans
router.get('/', getAllMealPlans);

// GET /MealPlans/:id - Get a MealPlan by id
router.get('/:id', getMealPlanById);

// POST /MealPlans - Create a new MealPlan
router.post('/', createMealPlan);

// PUT /MealPlans/:id - Update a MealPlan by id
router.put('/:id', updateMealPlan);

// DELETE /MealPlans/:id - Delete a MealPlan by id
router.delete('/:id', deleteMealPlan);

export { router as mealPlanRouter };
