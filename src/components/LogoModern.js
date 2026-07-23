import React from 'react';

const LogoModern = ({ className = "", size = 40 }) => {
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
        <linearGradient id="logoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00cc6a" />
        </linearGradient>
        <filter id="glow3">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#glow3)">
        {/* Hexagon background */}
        <path 
          d="M50 10L85 30L85 70L50 90L15 70L15 30Z" 
          fill="url(#logoGradient3)"
          stroke="#00ff88"
          strokeWidth="2"
        />
        
        {/* G shape - abstract */}
        <path 
          d="M30 35C30 32 32 30 35 30H65C68 30 70 32 70 35V65C70 68 68 70 65 70H35C32 70 30 68 30 65V35Z" 
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* G tail */}
        <path 
          d="M50 55L65 55" 
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* W shape - abstract */}
        <path 
          d="M25 40L35 55L45 45L55 55L65 40L65 60L55 60L55 58L45 60L35 58L35 60L25 60V40Z" 
          fill="#000000"
          opacity="0.9"
        />
        
        {/* Geometric accents */}
        <circle cx="25" cy="25" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="75" cy="25" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="25" cy="75" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="75" cy="75" r="2" fill="#00ff88" opacity="0.8"/>
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="3" fill="#000000" opacity="0.6"/>
      </g>
    </svg>
  );
};

export default LogoModern;

