import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Logo for Tech Startup',
      description: 'A clean, geometric logo designed for a SaaS company specializing in AI-powered analytics.',
      category: 'Logo Design',
      year: '2024',
      client: 'TechFlow Analytics',
      duration: '2 weeks',
      tools: 'Adobe Illustrator, Figma',
      longDescription: 'Created a minimalist logo that represents data flow and connectivity, using a modern geometric approach that scales well across all platforms.'
    },
    {
      id: 2,
      title: 'Brand Identity for Cafe',
      description: 'Complete brand identity including logo, menu design, and color palette for a cozy neighborhood cafe.',
      category: 'Brand Identity',
      year: '2024',
      client: 'Brew & Bean Cafe',
      duration: '4 weeks',
      tools: 'Adobe Creative Suite, Figma',
      longDescription: 'Developed a warm, inviting brand identity that reflects the cafe\'s commitment to quality coffee and community atmosphere.'
    },
    {
      id: 3,
      title: 'Portfolio Website for Photographer',
      description: 'Full responsive website with gallery, booking system, and contact form for a professional photographer.',
      category: 'Web Design',
      year: '2023',
      client: 'Sarah Chen Photography',
      duration: '6 weeks',
      tools: 'React, CSS3, JavaScript',
      longDescription: 'Built a stunning portfolio website that showcases the photographer\'s work with an intuitive gallery and easy booking system.'
    },
    {
      id: 4,
      title: 'E-Commerce Store UI',
      description: 'Designed custom product pages and checkout experience for an online fashion retailer.',
      category: 'UI/UX Design',
      year: '2023',
      client: 'StyleHub',
      duration: '8 weeks',
      tools: 'Figma, Adobe XD, Sketch',
      longDescription: 'Created a seamless shopping experience with intuitive navigation, clear product presentation, and streamlined checkout process.'
    },
    {
      id: 5,
      title: 'Fitness App Branding',
      description: 'Logo and app UI design for a health and wellness brand focused on personal training.',
      category: 'Brand Identity',
      year: '2023',
      client: 'FitLife Pro',
      duration: '5 weeks',
      tools: 'Adobe Illustrator, Figma',
      longDescription: 'Designed a dynamic brand identity that motivates users to achieve their fitness goals with bold, energetic visuals.'
    },
    {
      id: 6,
      title: 'Event Poster Design',
      description: 'Bold, vibrant poster design for a major music festival with multiple stages and artists.',
      category: 'Print Design',
      year: '2023',
      client: 'SoundWave Festival',
      duration: '3 weeks',
      tools: 'Adobe Photoshop, Illustrator',
      longDescription: 'Created an eye-catching poster that captures the energy and excitement of the festival while clearly communicating event details.'
    }
  ];

  const categories = ['all', 'Logo Design', 'Brand Identity', 'Web Design', 'UI/UX Design', 'Print Design'];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="projects-page">
      <h1>My Projects</h1>
      
      <div className="projects-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => setSelectedFilter(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.longDescription}</p>
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Client</span>
                <span className="detail-value">{selectedProject.client}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Category</span>
                <span className="detail-value">{selectedProject.category}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">{selectedProject.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Tools Used</span>
                <span className="detail-value">{selectedProject.tools}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
