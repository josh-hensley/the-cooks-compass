import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { FavoriteFactory } from './favorite.js';
import { MealPlanFactory } from './meal-plan.js';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const User = UserFactory(sequelize);
const Favorite = FavoriteFactory(sequelize);
const MealPlan = MealPlanFactory(sequelize);

User.hasMany(Favorite, { foreignKey: 'favorite_id' });
User.hasMany(MealPlan, { foreignKey: 'meal_plan_id' });
MealPlan.hasMany(Favorite, { foreignKey: 'favorite_id' });

export { sequelize, User };
