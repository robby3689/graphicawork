import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import LogoAlt from './LogoAlt';
import LogoModern from './LogoModern';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState('original');
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

  const getLogoComponent = () => {
    switch (currentLogo) {
      case 'minimal':
        return <LogoAlt size={40} className="logo-svg" />;
      case 'modern':
        return <LogoModern size={40} className="logo-svg" />;
      default:
        return <Logo size={40} className="logo-svg" />;
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo-container" onClick={closeMobileMenu}>
        {getLogoComponent()}
        <span className="logo-text">Graphica Work</span>
      </Link>
      
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
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
