import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Graphica Work</h2>
        <p>Design that speaks. Brands that connect.</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Email: hello@graphicawork.xyz</p>
        <p>Based in: Brampton, Canada</p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Graphica Work. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
