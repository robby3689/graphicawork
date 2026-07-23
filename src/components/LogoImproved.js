import React from 'react';

const LogoImproved = ({ className = "", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f9fa" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
        <filter id="glow4">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#shadow)">
        {/* Main circular background */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="url(#logoGradient4)"
          stroke="#ffffff"
          strokeWidth="2"
        />
        
        {/* Inner circle for depth */}
        <circle 
          cx="50" 
          cy="50" 
          r="38" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* G Letter - Clean and modern */}
        <g filter="url(#glow4)">
          <path 
            d="M25 30C25 26 28 23 32 23H68C72 23 75 26 75 30V70C75 74 72 77 68 77H32C28 77 25 74 25 70V30Z" 
            fill="none"
            stroke="url(#textGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* G tail - horizontal line */}
          <path 
            d="M50 55L68 55" 
            stroke="url(#textGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
        
        {/* W Letter - Clean and modern */}
        <g filter="url(#glow4)">
          <path 
            d="M25 35L35 60L45 45L55 60L65 35L65 70L55 70L55 65L45 70L35 65L35 70L25 70V35Z" 
            fill="url(#textGradient)"
            opacity="0.95"
          />
        </g>
        
        {/* Subtle accent dots */}
        <circle cx="30" cy="30" r="1.5" fill="#ffffff" opacity="0.6"/>
        <circle cx="70" cy="30" r="1.5" fill="#ffffff" opacity="0.6"/>
        <circle cx="30" cy="70" r="1.5" fill="#ffffff" opacity="0.6"/>
        <circle cx="70" cy="70" r="1.5" fill="#ffffff" opacity="0.6"/>
        
        {/* Center accent line */}
        <line x1="25" y1="50" x2="75" y2="50" stroke="#ffffff" strokeWidth="0.5" opacity="0.4"/>
      </g>
    </svg>
  );
};

export default LogoImproved;


