import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Ready to start your next project? Let's create something amazing together.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>I'm always excited to hear about new projects and opportunities. Whether you have a specific design need or just want to chat about possibilities, I'd love to hear from you.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>hello@graphicawork.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow My Work</h3>
            <div className="social-icons">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Dribbble</a>
              <a href="#" className="social-link">Behance</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
