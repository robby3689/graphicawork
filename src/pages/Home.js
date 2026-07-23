// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen motion-safe" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section - Dark Black Theme */}
      <section className="py-24 px-4 text-center relative overflow-hidden fade-in-up" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-300/10 via-transparent to-sky-300/10 float-slow"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Elevating Brands Through <span style={{ color: 'var(--accent)', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creative Design</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We craft bold brand identities, custom logos, and modern websites that make your business stand out — and stay remembered.
          </p>
          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <Link to="/projects" className="btn">
              Start a Project
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Black Cards */}
      <section className="py-24 px-6 fade-in-up" style={{ backgroundColor: 'var(--bg-secondary)', animationDelay: '80ms' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: 'var(--text-primary)' }}>Our Services</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Logo Design',
                desc: "Custom logos tailored to your brand's story and personality.",
                icon: 'Logo'
              },
              {
                title: 'Website Design',
                desc: 'Modern, responsive websites that showcase your brand professionally.',
                icon: 'Web'
              },
              {
                title: 'Brand Identity',
                desc: 'Color palettes, typography, and systems to make your brand cohesive.',
                icon: 'Brand'
              },
              {
                title: 'Packaging & Print',
                desc: 'Flyers, business cards, and print-ready designs that align with your brand.',
                icon: 'Print'
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group fade-in-up"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                  animationDelay: `${idx * 90 + 120}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(79, 156, 249, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="text-xl font-semibold tracking-wide uppercase mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Dark Black Theme */}
      <section className="py-24 px-4 text-center relative fade-in-up" style={{ backgroundColor: 'var(--bg-primary)', animationDelay: '140ms' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-300/10 via-transparent to-teal-300/10 float-slow"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Featured Projects</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            See how we've helped businesses stand out visually with our creative design solutions.
          </p>
          <Link to="/projects" className="btn">
            Browse Projects
          </Link>
        </div>
      </section>

      {/* About Section - Dark Black Theme */}
      <section className="py-24 px-4 text-center border-t fade-in-up" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)', animationDelay: '180ms' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>About Graphica Work</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Graphica Work is a creative studio based in Canada. We believe that design should do more than look good — it should connect, inspire, and deliver results. Our work is thoughtful, strategic, and built to elevate your brand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
