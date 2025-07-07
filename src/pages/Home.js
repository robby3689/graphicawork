import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    title: 'Logo Design',
    description: "Custom logos tailored to your brand's story and personality.",
  },
  {
    title: 'Website Design',
    description: 'Modern, responsive websites that showcase your brand professionally.',
  },
  {
    title: 'Brand Identity',
    description: 'Color palettes, typography, and systems to make your brand cohesive.',
  },
  {
    title: 'Packaging & Print',
    description: 'Flyers, business cards, and print-ready designs that align with your brand.',
  },
];

function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Elevating Brands Through Creative Design</h1>
        <p>
          We craft bold identities, custom logos, and modern websites that make your business stand out — and stay remembered.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Start a Project</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="thumbnail-grid">
          {services.map((service, index) => (
            <div className="thumbnail-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="preview-section">
        <h2>Featured Projects</h2>
        <p>See how we've helped businesses stand out visually.</p>
        <Link to="/projects" className="btn tertiary">Browse Projects</Link>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <h2>About Graphica Work</h2>
        <p>
          Graphica Work is a creative studio based in Canada. We believe that design should do more than look good — it should connect, inspire, and deliver results. Our work is thoughtful, strategic, and built to elevate your brand.
        </p>
        <Link to="/about" className="btn secondary">Learn More</Link>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>Ready to Build a Brand You're Proud Of?</h2>
        <Link to="/contact" className="cta-button">Start a Project</Link>
      </section>
    </main>
  );
}

export default Home;
