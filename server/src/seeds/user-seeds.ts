import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', email:'test@email.com', password: 'password', meal_plan_ids: [], favorite_ids: [] },
    { username: 'SunnyScribe', email:'moretest@email.com', password: 'password', meal_plan_ids: [], favorite_ids: [] },
    { username: 'RadiantComet', email:'testy@email.com', password: 'password', meal_plan_ids: [], favorite_ids: [] },
  ], { individualHooks: true });
};