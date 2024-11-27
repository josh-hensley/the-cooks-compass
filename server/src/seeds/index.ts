import { seedUsers } from './user-seeds.js';
import { sequelize } from '../models/index.js';
import { seedFavorites } from './favorite-seeds.js';
import { seedMealPlans } from './meal-plan-seeds.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedFavorites();
    console.log('\n----- FAVORITES SEEDED -----\n');

    await seedMealPlans();
    console.log('\n----- MEAL PLAN SEEDED -----\n')
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
