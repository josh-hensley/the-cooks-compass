import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { RecipeFactory } from './recipe.js'

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
const Recipe = RecipeFactory(sequelize);
//  const MealPlan = MealPlanFactory(sequelize);

User.hasMany(Recipe, { foreignKey: 'recipe_id' });
// User.hasMany(MealPlan, { foreignKey: '' });

export { sequelize, User };
