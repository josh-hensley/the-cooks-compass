// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import SignUp from "./pages/Signup";
import Navbar from "./components/Navbar";
<<<<<<< Updated upstream
=======
import CreateMealPlan from "./pages/CreateMealPlan";
import ViewMealPlan from "./pages/ViewMealPlan";
import { Button } from 'react-bootstrap';
import LoginModal from './pages/Login';
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseRecipes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
