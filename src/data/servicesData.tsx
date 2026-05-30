import React from 'react';

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  headline: string;
  icon: React.ReactNode;
  heroSvg: React.ReactNode;
  items: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'dt',
    title: 'DIGITAL TRANSFORMATION',
    slug: 'digital-transformation',
    headline: 'ADAPT TO A CHANGING MARKET',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <path d="M150 200 L250 100 L300 150 L200 250 Z" stroke="url(#gradient-dt)" strokeWidth="6" strokeLinejoin="round"/>
        <path d="M100 150 L200 50 L250 100 L150 200 Z" stroke="url(#gradient-dt)" strokeWidth="6" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient-dt" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9A826" />
            <stop offset="1" stopColor="#E91E63" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Technology & Ecosystem Audit', 'Digital Strategy', 'Digital Marketing', 'Digital Analytics']
  },
  {
    id: 'uiux',
    title: 'UI/UX & DESIGN THINKING',
    slug: 'ui-ux-design',
    headline: 'CRAFT SEAMLESS EXPERIENCES',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <circle cx="200" cy="150" r="80" stroke="url(#gradient-ui)" strokeWidth="6" />
        <circle cx="200" cy="150" r="100" stroke="url(#gradient-ui)" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="200" cy="150" r="60" stroke="url(#gradient-ui)" strokeWidth="2" opacity="0.5" />
        <defs>
          <linearGradient id="gradient-ui" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C9FF" />
            <stop offset="1" stopColor="#92FE9D" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Branding', 'UX Strategy', 'Mobile & Web Design']
  },
  {
    id: 'mobile',
    title: 'MOBILE ENGINEERING',
    slug: 'mobile-engineering',
    headline: 'EMPOWER USERS ANYWHERE',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <rect x="150" y="50" width="100" height="200" rx="16" stroke="url(#gradient-mobile)" strokeWidth="6" />
        <rect x="160" y="60" width="80" height="180" rx="8" stroke="url(#gradient-mobile)" strokeWidth="2" opacity="0.6"/>
        <line x1="185" y1="230" x2="215" y2="230" stroke="url(#gradient-mobile)" strokeWidth="4" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient-mobile" x1="150" y1="50" x2="250" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF416C" />
            <stop offset="1" stopColor="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Android Development', 'iOS Development', 'React Native Development', 'Wearable Development', 'Hybrid Development']
  },
  {
    id: 'web',
    title: 'WEB TECHNOLOGY DEVELOPMENT',
    slug: 'web-technology',
    headline: 'ENGINEER FOR THE WEB',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <polygon points="200,50 320,100 320,200 200,250 80,200 80,100" stroke="url(#gradient-web)" strokeWidth="6" />
        <polyline points="80,100 200,150 320,100" stroke="url(#gradient-web)" strokeWidth="4" />
        <line x1="200" y1="150" x2="200" y2="250" stroke="url(#gradient-web)" strokeWidth="4" />
        <defs>
          <linearGradient id="gradient-web" x1="80" y1="50" x2="320" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8A2387" />
            <stop offset="0.5" stopColor="#E94057" />
            <stop offset="1" stopColor="#F27121" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Content Management Systems', 'e-Commerce Platforms', 'Custom Web Applications']
  },
  {
    id: 'innovation',
    title: 'INNOVATION TECHNOLOGY',
    slug: 'innovation-technology',
    headline: 'PIONEER TOMORROW\'S TECH',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <circle cx="200" cy="150" r="100" stroke="url(#gradient-inn)" strokeWidth="2" strokeDasharray="10,10" />
        <path d="M150 150 Q200 50 250 150 T350 150" stroke="url(#gradient-inn)" strokeWidth="6" strokeLinecap="round" />
        <path d="M50 150 Q100 250 150 150" stroke="url(#gradient-inn)" strokeWidth="6" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient-inn" x1="50" y1="50" x2="350" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4facfe" />
            <stop offset="1" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Augmented & Virtual Reality', 'Machine Learning & AI', 'Internet of Things', 'Blockchain', 'Cyber Security']
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE APP DEVELOPMENT',
    slug: 'enterprise-app',
    headline: 'SCALE YOUR ENTERPRISE',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <rect x="100" y="100" width="100" height="100" stroke="url(#gradient-ent)" strokeWidth="6" />
        <rect x="200" y="50" width="100" height="150" stroke="url(#gradient-ent)" strokeWidth="6" />
        <rect x="150" y="200" width="150" height="50" stroke="url(#gradient-ent)" strokeWidth="6" />
        <defs>
          <linearGradient id="gradient-ent" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f83600" />
            <stop offset="1" stopColor="#f9d423" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Enterprise Resource Planning', 'Point of Sale', 'Customer Relation Management', 'Data & Workflow Automation', 'Business Intelligence']
  },
  {
    id: 'perf',
    title: 'PERFORMANCE ENGINEERING',
    slug: 'performance-engineering',
    headline: 'OPTIMIZE FOR SPEED',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <path d="M100 200 L160 140 L220 180 L300 100" stroke="url(#gradient-perf)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="300" cy="100" r="8" fill="url(#gradient-perf)" />
        <defs>
          <linearGradient id="gradient-perf" x1="100" y1="200" x2="300" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#11998e" />
            <stop offset="1" stopColor="#38ef7d" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: ['Quality assurance as a service', 'Cloud Architecture Engineering & Optimization']
  }
];
