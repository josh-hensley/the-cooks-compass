import { Request, Response } from 'express';
import { MealPlan } from '../models/meal-plan.js';

// GET /MealPlans
export const getAllMealPlans = async (_req: Request, res: Response) => {
  try {
    const mealPlans = await MealPlan.findAll();
    res.json(mealPlans);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /MealPlans/:id
export const getMealPlanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mealPlan = await MealPlan.findByPk(id);
    if (mealPlan) {
      res.json(mealPlan);
    } else {
      res.status(404).json({ message: 'Meal Plan not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /MealPlans
export const createMealPlan = async (req: Request, res: Response) => {
  const { name, id, favorite_ids } = req.body;
  try {
    const newMealPlan = await MealPlan.create({ name, id, favorite_ids });
    res.status(201).json(newMealPlan);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /MealPlans/:id
export const updateMealPlan = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, favorite_ids } = req.body;
    try {
      const mealPlan = await MealPlan.findByPk(id);
      if (mealPlan) {
        mealPlan.name = name;
        mealPlan.favorite_ids = favorite_ids;
        await mealPlan.save();
        res.json(mealPlan);
      } else {
        res.status(404).json({ message: 'MealPlan not found' });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

// DELETE /MealPlans/:id
export const deleteMealPlan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mealPlan = await MealPlan.findByPk(id);
    if (mealPlan) {
      await mealPlan.destroy();
      res.json({ message: 'MealPlan deleted' });
    } else {
      res.status(404).json({ message: 'MealPlan not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
