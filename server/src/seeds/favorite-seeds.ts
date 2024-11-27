import { Favorite } from '../models/favorite.js';

export const seedFavorites = async () => {
  await Favorite.bulkCreate([
    { name: 'Detox Orange Carrot Juice', id: 641443 },
    { name: 'Thai Shrimp', id: 663151 },
    { name: 'Market Stuffed Squash Blossoms', id: 651103 },
    { name: 'Drunken Turkey Chili', id: 641679 },
    { name: 'Cheesy Ham and Shrimp Macaroni Au Gratin', id: 637658 }
  ], { individualHooks: true });
};