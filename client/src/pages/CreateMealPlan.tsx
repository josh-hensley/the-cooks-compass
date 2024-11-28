import React, { useState, useEffect } from 'react';
import { fetchMockRecipes } from '../api/recipeApi';

const CreateMealPlan: React.FC = () => {
  const [mealPlanName, setMealPlanName] = useState(""); // Tracks meal plan name
  const [showMealAdder, setShowMealAdder] = useState(false); // Toggles "Add a Meal"
  const [showRecipeOptions, setShowRecipeOptions] = useState(false); // Toggles "Browse Recipes"
  const [searchQuery, setSearchQuery] = useState(""); // Tracks search input
  const [recipes, setRecipes] = useState<any[]>([]); // Stores fetched recipes
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]); // Stores filtered recipes
  const [selectedMeals, setSelectedMeals] = useState<any[]>([]); // Tracks selected meals
  const [showSaveOptions, setShowSaveOptions] = useState(false); // Toggles "Save/Add Another" buttons
  const [showMealActions, setShowMealActions] = useState(true); // Toggles meal action sections
  const [mealType, setMealType] = useState(""); // Tracks the selected meal type

  useEffect(() => {
    const loadRecipes = async () => {
      const recipes = await fetchMockRecipes() as any[]; // Fetch mock recipes
      setRecipes(recipes); // Set full recipe list
      setFilteredRecipes(recipes); // Initialize filtered list
    };

    loadRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, recipes]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMealPlanName(event.target.value); // Update meal plan name
  };

  const handleAddMealClick = () => {
    setShowMealAdder(true); // Show meal options
  };

  const handleBrowseRecipes = () => {
    setShowRecipeOptions(true); // Show browse recipes section
  };

  const calculateTotals = () => {
    // Calculate total calories and macros for selected meals
    return selectedMeals.reduce(
      (totals, meal) => ({
        calories: totals.calories + meal.calories,
        protein: totals.protein + meal.macros.protein,
        carbs: totals.carbs + meal.macros.carbs,
        fats: totals.fats + meal.macros.fats,
      }),
      { calories: 0, protein: 0, carbs: 0, fats: 0 }
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Meal Plan</h1>

      {/* Name Meal Plan Section */}
      <div className="mb-4">
        <label htmlFor="mealPlanName" className="form-label">
          Name Meal Plan:
        </label>
        <input
          type="text"
          id="mealPlanName"
          className="form-control"
          value={mealPlanName}
          onChange={handleNameChange}
          placeholder="Enter meal plan name"
        />
      </div>

      {!showMealAdder && (
        <div className="text-center">
          <button className="btn btn-primary btn-lg" onClick={handleAddMealClick}>
            Add Meal <i className="bi bi-plus"></i>
          </button>
        </div>
      )}

      {selectedMeals.length > 0 && (
        <div className="mt-4">
          <h5 className="text-secondary">Selected Meals</h5>
          <ul className="list-group">
            {selectedMeals.map((meal, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                <div>
                  <h6>
                    {meal.name}{" "}
                    <span className="badge bg-secondary ms-2">{meal.mealType}</span>
                  </h6>
                  <p>Calories: {meal.calories}</p>
                  <small>
                    Macros: {meal.macros.protein}g Protein, {meal.macros.carbs}g Carbs, {meal.macros.fats}g Fats
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showMealAdder && showMealActions && (
        <div className="mt-4">
          <h5 className="text-secondary">Add a Meal</h5>
          <select
            className="form-select mb-3"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)} // Track meal type
          >
            <option value="" disabled>
              Select Meal Type
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <div className="d-flex gap-3">
            <button className="btn btn-success" onClick={() => alert("Favorites Selected")}>
              Choose from Favorites
            </button>
            <button className="btn btn-info" onClick={handleBrowseRecipes}>
              Browse Recipes
            </button>
          </div>
        </div>
      )}

      {showRecipeOptions && showMealActions && (
        <div className="mt-4">
          <h5 className="text-secondary">Browse Recipes</h5>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ul className="list-group">
            {filteredRecipes.map((recipe) => (
              <li
                className="list-group-item"
                key={recipe.id}
                onClick={() => {
                  setSelectedMeals((prev) => [
                    ...prev,
                    { ...recipe, mealType }, // Add mealType to selected recipe
                  ]);
                  setShowSaveOptions(true);
                  setShowMealActions(false);
                  setShowRecipeOptions(false);
                }}
                style={{ cursor: 'pointer' }}
              >
                <h6>{recipe.name}</h6>
                <p>Calories: {recipe.calories}</p>
                <small>
                  Macros: {recipe.macros.protein}g Protein, {recipe.macros.carbs}g Carbs, {recipe.macros.fats}g Fats
                </small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showSaveOptions && (
        <div className="d-flex justify-content-around mt-4">
          <button className="btn btn-primary" onClick={() => alert("Meal Plan Saved!")}>
            Save Meal Plan
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setShowMealActions(true);
              setShowRecipeOptions(false);
              setShowSaveOptions(false);
              setSearchQuery("");
            }}
          >
            Add Another Recipe
          </button>
        </div>
      )}

      {selectedMeals.length > 0 && (
        <div className="mt-4">
          <h5>Total Nutrition</h5>
          <p>Calories: {calculateTotals().calories}</p>
          <p>Protein: {calculateTotals().protein}g</p>
          <p>Carbs: {calculateTotals().carbs}g</p>
          <p>Fats: {calculateTotals().fats}g</p>
        </div>
      )}
    </div>
  );
};

export default CreateMealPlan;
