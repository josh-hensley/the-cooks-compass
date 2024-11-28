import React, { useState, useEffect } from 'react';
import auth from '../utils/auth.js'
import { Link } from 'react-router-dom'; // If you are using React Router for navigation
import './Dashboard.css'; // Import the CSS file for styling

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
    // Placeholder data
    const username = "User"; // This will be dynamic based on user login
    const favorites = [
        { id: 1, title: "Chicken Curry", image: "/sample.jpg" },
        { id: 2, title: "Vegetable Pasta", image: "/sample.jpg" },
        { id: 3, title: "Beef Stew", image: "/sample.jpg" }
    ];
    const mealPlans = [
        { id: 1, title: "Weekly Keto Plan", image: "/sample.jpg" },
        { id: 2, title: "High Protein Plan", image: "/sample.jpg" }
    ];

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
        </div>
        )}</>
        
    );
};

export default Dashboard;
