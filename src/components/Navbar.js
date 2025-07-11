import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Graphica Work Logo" className="logo-img" />
        <span className="logo-text">Graphica Work</span>
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li> 
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
