import React from 'react';

const Logo = ({ className = "", size = 40 }) => {
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
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00b894" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="innerGlow">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      
      <g filter="url(#glow)">
        {/* Premium geometric background */}
        <rect 
          x="5" 
          y="5" 
          width="90" 
          height="90" 
          rx="20" 
          fill="url(#logoGradient)"
          stroke="#00d4aa"
          strokeWidth="2"
        />
        
        {/* Inner design element */}
        <rect 
          x="15" 
          y="15" 
          width="70" 
          height="70" 
          rx="12" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.3"
        />
        
        {/* G letter - premium style */}
        <path 
          d="M25 30C25 27 27 25 30 25H70C73 25 75 27 75 30V70C75 73 73 75 70 75H30C27 75 25 73 25 70V30Z" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* G tail - elegant */}
        <path 
          d="M50 55L70 55" 
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* W letter - sophisticated */}
        <path 
          d="M20 35L30 55L40 40L50 55L60 40L70 55L70 65L60 65L60 60L50 65L40 60L40 65L30 65L30 60L20 65V35Z" 
          fill="#ffffff"
          opacity="0.9"
        />
        
        {/* Premium accent elements */}
        <circle cx="20" cy="20" r="2" fill="url(#accentGradient)" opacity="0.8"/>
        <circle cx="80" cy="20" r="2" fill="url(#accentGradient)" opacity="0.8"/>
        <circle cx="20" cy="80" r="2" fill="url(#accentGradient)" opacity="0.8"/>
        <circle cx="80" cy="80" r="2" fill="url(#accentGradient)" opacity="0.8"/>
        
        {/* Center accent line */}
        <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeWidth="1" opacity="0.4"/>
        
        {/* Corner accents */}
        <path d="M15 15L25 15L25 25" stroke="#00d4aa" strokeWidth="1" opacity="0.6"/>
        <path d="M75 15L85 15L85 25" stroke="#00d4aa" strokeWidth="1" opacity="0.6"/>
        <path d="M15 75L25 75L25 85" stroke="#00d4aa" strokeWidth="1" opacity="0.6"/>
        <path d="M75 75L85 75L85 85" stroke="#00d4aa" strokeWidth="1" opacity="0.6"/>
      </g>
    </svg>
  );
};

export default Logo;
