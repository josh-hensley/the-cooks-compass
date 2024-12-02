import 'bootstrap/dist/css/bootstrap.min.css'; // for styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for JavaScript functionality (includes popper)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth.js'
import './Navbar.css';

const Navbar: React.FC = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  }
  useEffect(()=>{
    checkLogin();
  }, [loginCheck])

  const handleLogout = ()=>{
    auth.logout();
    localStorage.removeItem("user");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">The Cook's Compass</Link>
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
            {
              !loginCheck ? (
                <><li className="nav-item">
                  <Link className='nav-link' to='/' data-bs-toggle="modal" data-bs-target="#loginModal">Login</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign-Up</Link>
                </li></>
              ):(
                <><li className="nav-item">
                  <Link className="nav-link" to="/browse">Browse Recipes</Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link className='nav-link' to="" onClick={handleLogout} >Logout</Link>
                </li></>
              )
            } 
          </ul>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
