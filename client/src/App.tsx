// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/Navbar";

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
