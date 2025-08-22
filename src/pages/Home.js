import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    title: 'Brand Identity Design',
    description: 'Complete brand systems including logos, color palettes, typography, and visual guidelines that tell your unique story.',
    icon: '🎨',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Style Guides']
  },
  {
    title: 'Digital Design',
    description: 'Modern websites, mobile apps, and digital experiences that engage users and drive conversions.',
    icon: '💻',
    features: ['Web Design', 'UI/UX Design', 'Mobile Apps', 'E-commerce']
  },
  {
    title: 'Print & Packaging',
    description: 'Professional print materials and packaging solutions that make your brand stand out on shelves.',
    icon: '📦',
    features: ['Business Cards', 'Packaging Design', 'Marketing Materials', 'Signage']
  },
  {
    title: 'Creative Strategy',
    description: 'Strategic design thinking and creative direction to align your visual identity with business goals.',
    icon: '🚀',
    features: ['Brand Strategy', 'Creative Direction', 'Market Research', 'Design Systems']
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' }
];

function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🎨 Creative Design Studio</span>
            </div>
            <h1 className="hero-title">
              We Create
              <span className="gradient-text"> Exceptional</span>
              <br />
              Brand Experiences
            </h1>
            <p className="hero-description">
              Transform your business with strategic design that captivates, converts, and creates lasting impressions. 
              We craft visual identities that tell your story and drive real results.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary btn-large">
                View Our Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Start Your Project
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">
              We specialize in creating comprehensive design solutions that elevate your brand 
              and connect with your audience on every level.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-tertiary">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures every project delivers exceptional results 
              and exceeds your expectations.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step fade-in-left">
              <div className="step-number">01</div>
              <h3>Discovery & Strategy</h3>
              <p>We dive deep into your business, audience, and goals to create a strategic foundation for your design.</p>
            </div>
            <div className="process-step fade-in-left" style={{animationDelay: '0.2s'}}>
              <div className="step-number">02</div>
              <h3>Concept & Design</h3>
              <p>Our creative team develops unique concepts and designs that align with your brand strategy.</p>
            </div>
            <div className="process-step fade-in-left" style={{animationDelay: '0.4s'}}>
              <div className="step-number">03</div>
              <h3>Refinement</h3>
              <p>We collaborate with you to refine and perfect every detail until it's exactly right.</p>
            </div>
            <div className="process-step fade-in-left" style={{animationDelay: '0.6s'}}>
              <div className="step-number">04</div>
              <h3>Delivery & Launch</h3>
              <p>Final files are delivered with comprehensive guidelines for consistent brand implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured-work-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore our latest work and see how we've helped businesses transform their visual identity.
            </p>
          </div>
          <div className="featured-grid">
            <div className="featured-item fade-in">
              <div className="featured-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="featured-content">
                <h3>EcoTech Brand Identity</h3>
                <p>Complete brand redesign for a sustainable technology company</p>
                <span className="project-category">Brand Identity</span>
              </div>
            </div>
            <div className="featured-item fade-in" style={{animationDelay: '0.2s'}}>
              <div className="featured-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="featured-content">
                <h3>Luxe Restaurant Website</h3>
                <p>Elegant website design for a premium dining experience</p>
                <span className="project-category">Web Design</span>
              </div>
            </div>
            <div className="featured-item fade-in" style={{animationDelay: '0.4s'}}>
              <div className="featured-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="featured-content">
                <h3>Fitness App UI/UX</h3>
                <p>Mobile app design for a comprehensive fitness platform</p>
                <span className="project-category">UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className="featured-cta">
            <Link to="/projects" className="btn btn-secondary btn-large">
              View All Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in">
              <div className="testimonial-content">
                <p>"Graphica Work transformed our brand completely. Their strategic approach and creative vision helped us stand out in a crowded market."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>CEO, TechStart Inc.</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-in" style={{animationDelay: '0.2s'}}>
              <div className="testimonial-content">
                <p>"The team at Graphica Work is incredibly talented and professional. They delivered exactly what we envisioned and more."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Founder, GreenEats</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-in" style={{animationDelay: '0.4s'}}>
              <div className="testimonial-content">
                <p>"Working with Graphica Work was a game-changer for our business. Their design expertise and attention to detail are unmatched."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>Marketing Director, LuxeCo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your Brand?
            </h2>
            <p className="cta-description">
              Let's create something extraordinary together. Your vision, our expertise, 
              and a partnership that delivers results.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
