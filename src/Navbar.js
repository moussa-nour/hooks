import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie App</h1>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Top Movies</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;