// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import LoginModal from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/Navbar";
import CreateMealPlan from "./pages/CreateMealPlan";
import ViewMealPlan from "./pages/ViewMealPlan";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <LoginModal />
      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseRecipes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createmealplan" element={<CreateMealPlan />} />
            <Route path="/viewmealplan" element={<ViewMealPlan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
