import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to import your CSS file

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Sign up to save your favorite recipes!</h2>
        <Link to="/signup" className="cta-button">Sign Up</Link>
      </section>
    </div>
  );
};

export default HomePage;
