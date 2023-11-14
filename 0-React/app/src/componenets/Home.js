// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my skills, projects, and experience.</p>
        <Link to="/about" className="btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
