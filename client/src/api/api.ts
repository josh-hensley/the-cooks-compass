import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY; // Replace with your Spoonacular API key
const BASE_URL = 'https://api.spoonacular.com';

// Search for recipes (general search)
export const searchRecipes = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
            params: {
                query, // The search term (e.g., "chicken")
                number: 10, // Number of results to return
                apiKey: API_KEY,
            },
        });
        console.log(response.data.results); // Array of recipe objects
        return response.data.results;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};

// Fetch detailed recipe information (including macros)
export const fetchRecipeDetails = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/recipes/${id}/information`, {
            params: {
                includeNutrition: true, // Request detailed nutritional information
                apiKey: API_KEY,
            },
        });
        console.log('Detailed Recipe Info:', response.data);
        return response.data; // Includes sourceUrl, nutrition, etc.
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
};

// Example usage
(async () => {
    const recipes = await searchRecipes('chicken');
    if (recipes.length > 0) {
        const detailedInfo = await fetchRecipeDetails(recipes[0].id);
        console.log('First Recipe Detailed Info:', detailedInfo);
    }
})();
