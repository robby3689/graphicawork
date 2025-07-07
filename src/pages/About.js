import React from 'react';
import './About.css';
import teamImage from '../components/team.avif';
import processImage from '../components/process.avif';
import valuesImage from '../components/values.avif';

function About() {
  return (
    <main className="about-page">
      <section className="intro fade-in">
        <h1>About Graphica Work</h1>
        <p>
          Graphica Work is a creative design studio focused on delivering clean, functional,
          and impactful visual solutions. We specialize in logo design, brand identity,
          and modern websites that help businesses build a strong presence and connect
          with their audience.
        </p>
      </section>

      {/* 1: Image Left */}
      <section className="image-section fade-in">
        <img src={teamImage} alt="Our Team" />
        <div>
          <h2>Who We Are</h2>
          <p>
            We're a passionate design studio that believes in meaningful visuals. Our mission is
            to craft distinctive brands that leave a lasting impression. Every design decision is
            driven by purpose, not just aesthetics.
          </p>
        </div>
      </section>

      {/* 2: Image Right */}
      <section className="image-section reverse fade-in">
        <img src={processImage} alt="Design Process" />
        <div>
          <h2>Our Process</h2>
          <p>
            From strategy and research to execution, we follow a collaborative approach
            that ensures each brand we work on feels unique and powerful. Whether it’s a
            simple logo or a full-scale digital identity, we craft with care.
          </p>
        </div>
      </section>

      {/* 3: Image Left again */}
      <section className="image-section fade-in">
        <img src={valuesImage} alt="Core Values" />
        <div>
          <h2>Our Values</h2>
          <p>
            Clarity, creativity, and consistency. We believe that design is not just about
            visuals, but about solving real problems. We listen, research, prototype, and
            polish until everything aligns perfectly with your brand.
          </p>
        </div>
      </section>

      <section className="cta-section fade-in">
        <h2>Ready to Build Something Memorable?</h2>
        <a href="/contact" className="cta-button">Start a Project</a>
      </section>
    </main>
  );
}

export default About;
