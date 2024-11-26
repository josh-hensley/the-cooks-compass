<<<<<<< Updated upstream
// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/browse">Browse Recipes</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign-Up</Link></li>
    </ul>
  </nav>
);
=======
import 'bootstrap/dist/css/bootstrap.min.css';  // for styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // for JavaScript functionality (includes popper)
import Login from "../pages/Login"
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <>
    <Login />
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          The Cook's Compass
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse">
                Browse Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
>>>>>>> Stashed changes

export default Navbar;
