//const BrowseRecipes: React.FC = () => <h1>Browse Recipes Page</h1>;
import React, { useState, useEffect } from 'react';

interface Recipe {
  id: number;
  title: string;
  image: string;
  // ... other recipe properties
}

function BrowseRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const apiKey = 'YOUR_API_KEY'; 

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://api.example.com/recipes', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      const data = await response.json();
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, [apiKey]);

  return (
    <div>
      <h2>Browse Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            {/* ... other recipe details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseRecipes;