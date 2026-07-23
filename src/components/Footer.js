import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="footer-logo">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>Graphica Work</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Design that speaks. Brands that connect.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to} style={{ marginBottom: '0.5rem' }}>
                  <Link 
                    to={link.to} 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      textDecoration: 'none', 
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Logo Design', 'Web Design', 'Brand Identity', 'Print Design'].map((service) => (
                <li key={service} style={{ marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 style={{ color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>Contact</h4>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>hello@graphicawork.online</p>
              <p>Brampton, Canada</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom" style={{ 
          borderTop: '1px solid var(--border)', 
          marginTop: '2rem', 
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', margin: 0 }}>
            © {new Date().getFullYear()} Graphica Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
