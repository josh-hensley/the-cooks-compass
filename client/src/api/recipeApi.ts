import { mockRecipes } from './mockData';

export const fetchMockRecipes = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRecipes), 500); // Simulate API delay
  });
};
