import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: add styles here

function Home() {
  return (
    <section className="hero">
      <h1>About Graphica Work</h1>
      <p>
        

Graphica Work is a creative design studio focused on delivering clean, functional, and impactful visual solutions. We specialize in logo design, brand identity, and modern websites that help businesses build a strong presence and connect with their audience.

Every project we take on is rooted in strategy, crafted with purpose, and designed to make your brand stand out — online and offline.
      </p>

      <div className="cta-buttons">
        <Link to="/projects" className="btn primary">View My Projects</Link>
        <Link to="/contact" className="btn secondary">Start a Project</Link>
      </div>
    </section>
  );
}

export default Home;
