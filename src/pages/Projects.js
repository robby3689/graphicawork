import React from 'react';
import './Projects.css'; // Optional for styling

function Projects() {
  const dummyProjects = [
    {
      title: 'Modern Logo for Tech Startup',
      description: 'A clean, geometric logo designed for a SaaS company.',
    },
    {
      title: 'Brand Identity for Cafe',
      description: 'Logo, menu design, and color palette for a cozy cafe.',
    },
    {
      title: 'Portfolio Website for Photographer',
      description: 'Full responsive website with gallery and contact form.',
    },
    {
      title: 'E-Commerce Store UI',
      description: 'Designed custom product pages and checkout experience.',
    },
    {
      title: 'Fitness App Branding',
      description: 'Logo and app UI design for a health and wellness brand.',
    },
    {
      title: 'Event Poster Design',
      description: 'Bold, vibrant poster for a music festival.',
    }
  ];

  return (
    <main className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {dummyProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
