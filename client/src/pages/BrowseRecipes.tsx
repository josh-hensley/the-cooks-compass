import React, { useState, useEffect } from 'react';
import auth from '../utils/auth.js';
import axios from 'axios';

const BrowseRecipes: React.FC = () => {
    const [loginCheck, setLoginCheck] =  useState(false);
    const checkLogin = () => {
        if (auth.loggedIn()){
            setLoginCheck(true);
        }
    }
    useEffect(()=>{
        checkLogin();
    }, [loginCheck])
    const [searchText, setSearchText] = useState('');
    const [recipes, setRecipes] = useState([]);
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY; // Replace with your API key

    const fetchRecipes = async (query: string) => {
        try {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                params: { query, number: 10, apiKey: API_KEY },
            });
            setRecipes(response.data.results); // Update recipes in state
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="recipe-dropdown">
            <h2>Browse Recipes</h2>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    if (e.target.value) fetchRecipes(e.target.value); // Fetch recipes as user types
                }}
                className="search-bar"
            />
            <ul className="dropdown-list">
                {recipes.map((recipe: {id: string, sourceUrl: string, title: string}) => (
                    <li key={recipe.id} className="dropdown-item">
                        <span
                            className="recipe-title"
                            onClick={() => window.open(recipe.sourceUrl, '_blank')} // Navigate to recipe URL
                        >
                            {recipe.title}
                        </span>
                        <button className="add-button" onClick={() => console.log('Added to favorites:', recipe)}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseRecipes;
