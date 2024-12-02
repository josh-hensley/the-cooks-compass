import React, { useState, useEffect } from 'react';
import auth from '../utils/auth.js'
import { Link } from 'react-router-dom';
import { searchRecipes, fetchRecipeDetails } from '../api/api'; // Import from your API file
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const [loginCheck, setLoginCheck]=useState(false);
    const checkLogin = ()=>{
        if(auth.loggedIn()) {
            setLoginCheck(true);
        }
    }
    useEffect(()=>{
        checkLogin();
    })
    const username = "User";
    const [favorites, setFavorites] = useState<
        { id: number; title: string; image: string; calories: number; protein: number; carbs: number; fat: number }[]
    >([]);
    const [mealPlans] = useState([
        { id: 1, title: "Weekly Keto Plan", image: "/sample.jpg" },
        { id: 2, title: "High Protein Plan", image: "/sample.jpg" },
    ]);
    const [searchText, setSearchText] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [recipes, setRecipes] = useState<
        { id: number; title: string; image: string; sourceUrl: string }[]
    >([]);

    // Fetch recipes for the dropdown
    const fetchRecipesForDropdown = async (query: string) => {
        if (!query.trim()) return; // Avoid unnecessary calls
        const results = await searchRecipes(query);
        setRecipes(results); // Populate dropdown
    };

    // Handle recipe selection for details
    const addToFavorites = async (recipe: { id: number; title: string; image: string }) => {
        const details = await fetchRecipeDetails(recipe.id);

        if (details) {
            const nutrients = details.nutrition?.nutrients || [];
            const calories = nutrients.find((n: any) => n.name === "Calories")?.amount || "Not available";
            const protein = nutrients.find((n: any) => n.name === "Protein")?.amount || "Not available";
            const carbs = nutrients.find((n: any) => n.name === "Carbohydrates")?.amount || "Not available";
            const fat = nutrients.find((n: any) => n.name === "Fat")?.amount || "Not available";

            // Add recipe to favorites
            setFavorites((prevFavorites) => [
                ...prevFavorites,
                {
                    id: recipe.id,
                    title: recipe.title,
                    image: recipe.image,
                    calories,
                    protein,
                    carbs,
                    fat,
                },
            ]);
        } else {
            alert("Failed to fetch recipe details. Please try again later.");
            console.error("Failed to fetch recipe details for recipe:", recipe);
        }
    };

    return (
        <>
        {
            !loginCheck ? (
            <div className="warning">
                <h1>Login to view Deashboard</h1>
            </div>
        ):(
            <div className="dashboard">
            <h1>Welcome, {username}!</h1>

            {/* Favorites Carousel */}
            <div className="favorites">
    <h2>Favorites</h2>
    <div className="carousel">
        {favorites.map((favorite) => (
            <div key={favorite.id} className="item">
                <img src={favorite.image} alt={favorite.title} />
                <p
                    className="clickable-title"
                    onClick={async () => {
                        const details = await fetchRecipeDetails(favorite.id);
                        if (details?.sourceUrl) {
                            window.open(details.sourceUrl, "_blank"); // Open the recipe URL in a new tab
                        } else {
                            alert("Unable to retrieve the recipe URL.");
                        }
                    }}
                >
                    {favorite.title}
                </p>
                <p>Calories: {favorite.calories} kcal</p>
                <p>Protein: {favorite.protein} g</p>
                <p>Carbs: {favorite.carbs} g</p>
                <p>Fat: {favorite.fat} g</p>
            </div>
        ))}
    </div>
</div>


{/* Dropdown Menu */}
<div className="recipe-dropdown">
    <h3>Browse Recipes</h3>
    <input
        type="text"
        placeholder="Search recipes..."
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value) fetchRecipesForDropdown(e.target.value);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        className="search-bar"
    />
    {showDropdown && (
        <ul className="dropdown-list">
            {recipes.map((recipe) => (
                <li key={recipe.id} className="dropdown-item">
                    <span
                        className="recipe-title"
                        onClick={async () => {
                            const details = await fetchRecipeDetails(recipe.id);
                            if (details?.sourceUrl) {
                                window.open(details.sourceUrl, "_blank"); // Open the URL in a new tab
                            } else {
                                alert("Unable to retrieve the recipe URL.");
                            }
                        }}
                    >
                        {recipe.title}
                    </span>
                    <button
                        className="add-button"
                        onClick={() => addToFavorites(recipe)}
                    >
                        +
                    </button>
                </li>
            ))}
        </ul>
    )}
</div>


            {/* Meal Plans Carousel */}
            <div className="meal-plans">
                <h2>Your Meal Plans</h2>
                <div className="carousel">
                    {mealPlans.map((plan) => (
                        <div key={plan.id} className="item">
                            <img src={plan.image} alt={plan.title} />
                            <p>{plan.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Link to="/createmealplan" className="btn btn-primary">Make a meal plan!</Link>
        </div>
        )}</>
        
    );
};

export default Dashboard;
