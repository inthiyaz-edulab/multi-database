// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Database Management App</h1>
      <div className="home-links">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/register" className="home-link">Register</Link>
      </div>
    </div>
  );
};

export default Home;
