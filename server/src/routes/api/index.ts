import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { favoritesRouter } from './favorite-routes.js';
import { mealPlanRouter } from './meal-plan-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/favorites', favoritesRouter);
router.use('/meal-plans', mealPlanRouter);

export default router;
