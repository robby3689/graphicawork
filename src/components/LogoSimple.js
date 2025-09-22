import React from 'react';

const LogoSimple = ({ className = "", size = 40 }) => {
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
        <pattern id="texture" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="#1a1a1a"/>
          <circle cx="2" cy="2" r="0.5" fill="#2a2a2a" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Dark circular background with texture */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="url(#texture)"
        stroke="#333333"
        strokeWidth="1"
      />
      
      {/* Geometric shape - similar to the image */}
      <path 
        d="M50 50 L85 50 A35 35 0 0 1 50 85 Z" 
        fill="#fbbf24"
        opacity="0.9"
      />
      
      {/* Subtle inner circle for depth */}
      <circle 
        cx="50" 
        cy="50" 
        r="35" 
        fill="none"
        stroke="#444444"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
};

export default LogoSimple;
