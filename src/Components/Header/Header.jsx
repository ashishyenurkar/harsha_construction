import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Harsha Construction</h2>
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
