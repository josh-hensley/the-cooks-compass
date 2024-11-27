import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const username = "User";
    const initialFavorites = [
        { id: 1, title: "Chicken Curry", image: "/sample.jpg" },
        { id: 2, title: "Vegetable Pasta", image: "/sample.jpg" },
        { id: 3, title: "Beef Stew", image: "/sample.jpg" }
    ];

    const initialMealPlans = [
        { id: 1, title: "Weekly Keto Plan", image: "/sample.jpg" },
        { id: 2, title: "High Protein Plan", image: "/sample.jpg" }
    ];

    const mockRecipes = [
        { id: 4, title: "Grilled Salmon", image: "/sample.jpg", url: "https://example.com/salmon" },
        { id: 5, title: "Avocado Toast", image: "/sample.jpg", url: "https://example.com/avocado" },
        { id: 6, title: "Chocolate Cake", image: "/sample.jpg", url: "https://example.com/cake" }
    ];

    const [favorites, setFavorites] = useState(initialFavorites);
    const [mealPlans] = useState(initialMealPlans);
    const [searchText, setSearchText] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const addToFavorites = (recipe: typeof mockRecipes[0]) => {
        setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    };

    const filteredRecipes = mockRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="dashboard">
            <h1>Welcome, {username}!</h1>

            {/* Favorites Carousel */}
            <div className="favorites">
                <h2>Favorites</h2>
                <div className="carousel">
                    {favorites.map(favorite => (
                        <div key={favorite.id} className="item">
                            <img src={favorite.image} alt={favorite.title} />
                            <p>{favorite.title}</p>
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
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowDropdown(true)} // Show dropdown on focus
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Hide dropdown after a short delay
                    className="search-bar"
                />
                {showDropdown && (
                    <ul className="dropdown-list">
                        {filteredRecipes.map(recipe => (
                            <li key={recipe.id} className="dropdown-item">
                                <span
                                    className="recipe-title"
                                    onClick={() => window.open(recipe.url, "_blank")}
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
                    {mealPlans.map(plan => (
                        <div key={plan.id} className="item">
                            <img src={plan.image} alt={plan.title} />
                            <p>{plan.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Link to="/createmealplan" className="btn btn-primary">Make a meal plan!</Link>
            <br /><br /><br /><br />
        </div>
    );
};

export default Dashboard;
