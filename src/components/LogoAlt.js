import React from 'react';

const LogoAlt = ({ className = "", size = 40 }) => {
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
        <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00cc6a" />
        </linearGradient>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#glow2)">
        {/* Main square with rounded corners */}
        <rect 
          x="15" 
          y="15" 
          width="70" 
          height="70" 
          rx="8" 
          fill="url(#logoGradient2)"
          stroke="#00ff88"
          strokeWidth="2"
        />
        
        {/* G letter - minimalist */}
        <path 
          d="M30 30C30 28 32 26 35 26H65C68 26 70 28 70 30V70C70 72 68 74 65 74H35C32 74 30 72 30 70V30Z" 
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* G tail */}
        <path 
          d="M50 55L65 55" 
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* W letter - minimalist */}
        <path 
          d="M25 35L35 55L45 40L55 55L65 35L65 65L55 65L55 60L45 65L35 60L35 65L25 65V35Z" 
          fill="#000000"
          opacity="0.9"
        />
        
        {/* Corner accents */}
        <circle cx="20" cy="20" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="80" cy="20" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="20" cy="80" r="2" fill="#00ff88" opacity="0.8"/>
        <circle cx="80" cy="80" r="2" fill="#00ff88" opacity="0.8"/>
      </g>
    </svg>
  );
};

export default LogoAlt;

