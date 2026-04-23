import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Graphica Work</h3>
          <p>
            A creative design studio focused on delivering clean, functional, and impactful 
            visual solutions that help businesses build strong brand presence.
          </p>
          <div className="footer-social">
            <a
              className="social-icon"
              href="https://www.instagram.com/wgraphica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><Link to="/">Logo Design</Link></li>
            <li><Link to="/">Brand Identity</Link></li>
            <li><Link to="/">Website Design</Link></li>
            <li><Link to="/">UI/UX Design</Link></li>
            <li><Link to="/">Print Design</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2024 Graphica Work. All rights reserved. | 
          <a href="/privacy"> Privacy Policy</a> | 
          <a href="/terms"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
