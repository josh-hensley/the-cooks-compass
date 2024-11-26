import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './ViewMealPlan.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ViewMealPlan: React.FC = () => {
    const mealPlan = {
        name: "Keto Focus Week",
        ingredients: ["Chicken Breast", "Avocado", "Spinach"],
        macros: {
            protein: 120,
            carbs: 30,
            fats: 90
        },
        recipes: [
            { name: "Grilled Chicken Breast", image: "/sample.jpg", category: "Lunch" },
            { name: "Avocado Salad", image: "/sample.jpg", category: "Dinner" }
        ]
    };

    const data = {
        labels: ['Protein', 'Carbs', 'Fats'],
        datasets: [{
            data: [mealPlan.macros.protein, mealPlan.macros.carbs, mealPlan.macros.fats],
            backgroundColor: ['#E38627', '#C13C37', '#6A2135'],
            hoverBackgroundColor: ['#E38627', '#C13C37', '#6A2135']
        }]
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>{mealPlan.name}</h1>
            </div>
            <div className="row">
                <div className="box">
                    <h2>Shopping List</h2>
                    <ul>
                        {mealPlan.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="box">
                    <h2>Total Macros</h2>
                    <div style={{ height: '200px' }}>
                        <Pie data={data} options={options} />
                    </div>
                    <div>
                        <p>Protein: {mealPlan.macros.protein}g</p>
                        <p>Carbs: {mealPlan.macros.carbs}g</p>
                        <p>Fats: {mealPlan.macros.fats}g</p>
                    </div>
                </div>
            </div>
            <div className="recipe-grid">
                {mealPlan.recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} style={{ width: "100%", height: "auto" }} />
                        <p>{recipe.name}</p>
                        <span className="recipe-category">{recipe.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewMealPlan;
