import React from 'react';
import { cn } from "@/lib/utils";

// 1. Logo VoraX
export const LogoVorax = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 120 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={cn("h-8 w-auto", className)}
  >
    {/* V stylized */}
    <path d="M10 10 L20 30 L30 10" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Orange node on intersection */}
    <circle cx="20" cy="30" r="3" fill="#FF6A2C" />
    
    {/* Text VORAX */}
    <text x="40" y="28" fill="#FAFAFA" fontFamily="var(--font-heading)" fontSize="20" fontWeight="bold" letterSpacing="0.05em">VORA<tspan fill="#FF3B1F">X</tspan></text>
    
    <defs>
      <linearGradient id="logo-grad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3B1F"/>
        <stop offset="1" stopColor="#FF6A2C"/>
      </linearGradient>
    </defs>
  </svg>
);

// 2. Isometric Grid Background (Repetitive)
export const GridPattern = ({ className }: { className?: string }) => (
  <svg className={cn("absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none", className)} width="100%" height="100%">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 40V0H40" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
  </svg>
);

// 3. Hero Vector - Network of AI Agents (Animated with framer-motion in the component, but here's the base SVG)
export const HeroNetworkSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="#3F3F46" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
      <path d="M400 200 L150 100" />
      <path d="M400 200 L650 100" />
      <path d="M400 200 L150 300" />
      <path d="M400 200 L650 300" />
      <path d="M150 100 L150 300" />
      <path d="M650 100 L650 300" />
    </g>
    
    {/* Glowing paths for highlighting data flow */}
    <path d="M400 200 L650 100" stroke="url(#hero-glow)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <path d="M150 300 L400 200" stroke="#FF6A2C" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    
    {/* Nodes */}
    {/* Center Node */}
    <circle cx="400" cy="200" r="12" fill="#0A0A0B" stroke="#FF3B1F" strokeWidth="4" />
    <circle cx="400" cy="200" r="4" fill="#FF6A2C" />
    
    {/* Outer Nodes */}
    <circle cx="150" cy="100" r="8" fill="#18181B" stroke="#3F3F46" strokeWidth="2" />
    <circle cx="650" cy="100" r="10" fill="#0A0A0B" stroke="#FF6A2C" strokeWidth="3" />
    
    <circle cx="150" cy="300" r="10" fill="#0A0A0B" stroke="#FF3B1F" strokeWidth="3" />
    <circle cx="650" cy="300" r="8" fill="#18181B" stroke="#3F3F46" strokeWidth="2" />
    
    <defs>
      <linearGradient id="hero-glow" x1="400" y1="200" x2="650" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3B1F"/>
        <stop offset="1" stopColor="transparent"/>
      </linearGradient>
    </defs>
  </svg>
);

// 4. Pillar 1: Autonomous Agents Isometric
export const PillarAgentsSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Isometric base */}
    <path d="M100 150 L30 115 L100 80 L170 115 Z" fill="#111113" stroke="#27272A" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M100 130 L50 105 L100 80 L150 105 Z" fill="#18181B" stroke="#3F3F46" strokeWidth="1" strokeLinejoin="round"/>
    
    {/* Core */}
    <path d="M100 105 L80 95 V60 L100 70 V105 Z" fill="#FF3B1F"/>
    <path d="M100 105 L120 95 V60 L100 70 V105 Z" fill="#C41E0A"/>
    <path d="M100 70 L80 60 L100 50 L120 60 Z" fill="#FF6A2C"/>
    
    {/* Floating Chat bubbles */}
    <rect x="30" y="30" width="30" height="20" rx="4" fill="#18181B" stroke="#71717A"/>
    <path d="M40 50 L35 55 V50 Z" fill="#71717A"/>
    
    <rect x="140" y="20" width="30" height="20" rx="4" fill="#FF3B1F"/>
    <path d="M150 40 L145 45 V40 Z" fill="#FF3B1F"/>
    
    <circle cx="155" cy="30" r="1.5" fill="#FFF"/>
    <circle cx="165" cy="30" r="1.5" fill="#FFF"/>
  </svg>
);

// 5. Pillar 2: Automation Isometric
export const PillarAutomationSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Isometric Pipeline */}
    <path d="M40 140 L160 80 V100 L40 160 Z" fill="#111113" stroke="#27272A" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M40 140 L160 80 L180 90 L60 150 Z" fill="#18181B" stroke="#27272A" strokeWidth="2" strokeLinejoin="round"/>
    
    {/* Data Packets */}
    <path d="M80 120 L100 110 L110 115 L90 125 Z" fill="#FF6A2C"/>
    <path d="M120 100 L140 90 L150 95 L130 105 Z" fill="#FF3B1F"/>
    
    {/* Gears/Nodes */}
    <circle cx="160" cy="80" r="20" fill="#0A0A0B" stroke="#3F3F46" strokeWidth="2"/>
    <circle cx="160" cy="80" r="10" fill="transparent" stroke="#FF6A2C" strokeWidth="2" strokeDasharray="4 2"/>
    
    <circle cx="40" cy="140" r="20" fill="#0A0A0B" stroke="#3F3F46" strokeWidth="2"/>
    <circle cx="40" cy="140" r="5" fill="#FF3B1F"/>
  </svg>
);

// 6. Pillar 3: Data Driven Isometric
export const PillarDataSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Data Layers */}
    <path d="M100 160 L30 125 L100 90 L170 125 Z" fill="#0A0A0B" stroke="#27272A" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M100 140 L30 105 L100 70 L170 105 Z" fill="#111113" stroke="#3F3F46" strokeWidth="2" strokeLinejoin="round" opacity="0.7"/>
    <path d="M100 120 L30 85 L100 50 L170 85 Z" fill="#18181B" stroke="#FF6A2C" strokeWidth="1" strokeLinejoin="round" opacity="0.4"/>
    
    {/* Bars */}
    <path d="M70 105 V60 H90 V115 Z" fill="#FF3B1F"/>
    <path d="M90 60 L100 55 V110 L90 115 Z" fill="#C41E0A"/>
    <path d="M70 60 L80 55 L100 55 L90 60 Z" fill="#FF6A2C"/>

    <path d="M110 125 V40 H130 V135 Z" fill="#FF6A2C"/>
    <path d="M130 40 L140 35 V130 L130 135 Z" fill="#FF3B1F"/>
    <path d="M110 40 L120 35 L140 35 L130 40 Z" fill="#FFF"/>
  </svg>
);
