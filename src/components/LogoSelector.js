import React, { useState } from 'react';
import Logo from './Logo';
import LogoAlt from './LogoAlt';
import LogoModern from './LogoModern';
import './LogoSelector.css';

const LogoSelector = ({ onLogoChange }) => {
  const [selectedLogo, setSelectedLogo] = useState('original');

  const logos = [
    { id: 'original', name: 'Original', component: Logo },
    { id: 'minimal', name: 'Minimal', component: LogoAlt },
    { id: 'modern', name: 'Modern', component: LogoModern }
  ];

  const handleLogoSelect = (logoId) => {
    setSelectedLogo(logoId);
    onLogoChange(logoId);
  };

  return (
    <div className="logo-selector">
      <h3>Choose Your Logo Style</h3>
      <div className="logo-options">
        {logos.map((logo) => {
          const LogoComponent = logo.component;
          return (
            <div
              key={logo.id}
              className={`logo-option ${selectedLogo === logo.id ? 'selected' : ''}`}
              onClick={() => handleLogoSelect(logo.id)}
            >
              <LogoComponent size={60} />
              <span>{logo.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoSelector;
