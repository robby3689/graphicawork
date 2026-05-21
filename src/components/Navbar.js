import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo-container" onClick={closeMobileMenu}>
        <img src="/brand-mark.svg" alt="Graphica Work" className="logo-svg" />
        <span className="logo-text">Graphica Work</span>
      </Link>
      
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 'Close' : 'Menu'}
      </button>
      
      <ul className={isMobileMenuOpen ? 'open' : ''}>
        <li>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/canada-reset" 
            className={isActive('/canada-reset') ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Canada Reset
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
