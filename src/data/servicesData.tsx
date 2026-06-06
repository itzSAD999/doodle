import React from 'react';

export interface Capability {
  title: string;
  subtitle: string;
  items: string[][];
  svg: React.ReactNode;
}

export interface SubService {
  title: string;
  slug: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  capabilities: Capability[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  headline: string;
  icon: React.ReactNode;
  heroSvg: React.ReactNode;
  overview?: string;
  items: SubService[];
}

// Reusable SVGs for dynamic capability blocks
const svg1 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 80 L20 65 L20 45 L40 55 L40 35 L60 45 L60 65 L80 55 L80 35 L50 20 L30 30" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M20 65 L50 80 L80 65 L80 45 L50 60 L20 45 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    <path d="M50 80 L50 60 M20 65 L40 55 L40 35 L20 45 M80 65 L60 55 L60 35 L80 45" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const svg2 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 90 L20 75 L20 25 L50 10 L80 25 L80 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M30 70 L30 30 L70 50 L70 70 M40 65 L40 35 L60 45 L60 65 M50 60 L50 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const svg3 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 85 L15 65 L15 25 L50 5 L85 25 L85 65 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M15 25 L50 45 L85 25 M50 45 L50 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const defaultCapabilities: Capability[] = [
  {
    title: 'Consulting & Strategy',
    subtitle: 'Expert guidance for your journey',
    items: [['Needs Assessment', 'Strategic Planning'], ['Architecture Design', 'ROI Analysis']],
    svg: svg1
  },
  {
    title: 'Implementation & Delivery',
    subtitle: 'End-to-end execution',
    items: [['Agile Development', 'Quality Assurance'], ['Deployment Pipeline', 'Change Management']],
    svg: svg2
  },
  {
    title: 'Support & Evolution',
    subtitle: 'Long-term partnership',
    items: [['24/7 Monitoring', 'Performance Tuning'], ['Feature Enhancements', 'Security Updates']],
    svg: svg3
  }
];

export const servicesData: ServiceCategory[] = [
  {
    id: 'dt',
    title: 'DIGITAL TRANSFORMATION',
    slug: 'digital-transformation',
    headline: 'ADAPT TO A CHANGING MARKET',
    overview: 'Transforms the way business interacts with changing digital landscapes by creating trust quotient and engagement.',
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
    items: [
      {
        title: 'Technology & Ecosystem Audit',
        slug: 'technology-ecosystem-audit',
        description: 'We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences. Audit technology strategy promotes greater consistency and repeatability, which are part of the fabric in delivering a digital audit. Systematic examination and verification of network security for potent control and testing.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'TECHNOLOGY & ECOSYSTEM AUDIT',
        heroDesc: 'We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Digital Strategy',
        slug: 'digital-strategy',
        description: 'Achieve visibility and sustain with comprehensive and innovative methods to reach your business goals. Validate digital strategy by choosing the right metrics, tools and expertise to develop new initiatives to enhance competitive position.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL STRATEGY',
        heroDesc: 'Our digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Our digital marketing services provides compelling strategies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL MARKETING',
        heroDesc: 'Compelling strategies that build a strong connection between brands and potential customers.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Digital Analytics',
        slug: 'digital-analytics',
        description: 'Implementing robust tracking and reporting frameworks.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL ANALYTICS',
        heroDesc: 'Turn your raw data into a strategic asset with intelligent analytics.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX & DESIGN THINKING',
    slug: 'ui-ux-design',
    headline: 'CRAFT SEAMLESS EXPERIENCES',
    overview: 'We make design a scientific process combining heuristic evaluation to build predictable digital experiences.',
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
        <defs>
          <linearGradient id="gradient-ui" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C9FF" />
            <stop offset="1" stopColor="#92FE9D" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Branding',
        slug: 'branding',
        description: 'We create distinctive visual identities that resonate with your target audience.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'BRANDING',
        heroDesc: 'Forge an unforgettable identity that stands out in a crowded market.',
        capabilities: defaultCapabilities
      },
      {
        title: 'UX Strategy',
        slug: 'ux-strategy',
        description: 'Our UX strategy aligns user needs with business goals.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'UX STRATEGY',
        heroDesc: 'Bridge the gap between business objectives and user needs.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Mobile & Web Design',
        slug: 'mobile-web-design',
        description: 'Designing pixel-perfect interfaces that perform flawlessly.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'MOBILE & WEB DESIGN',
        heroDesc: 'Create visually stunning and highly functional interfaces.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'mobile',
    title: 'MOBILE ENGINEERING',
    slug: 'mobile-engineering',
    headline: 'EMPOWER USERS ANYWHERE',
    overview: 'We build high-performance mobile applications that deliver native-like experiences.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <rect x="150" y="50" width="100" height="200" rx="16" stroke="url(#gradient-mobile)" strokeWidth="6" />
        <defs>
          <linearGradient id="gradient-mobile" x1="150" y1="50" x2="250" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF416C" />
            <stop offset="1" stopColor="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Android Development',
        slug: 'android-development',
        description: 'Custom Android applications built with Kotlin and Java.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'ANDROID DEVELOPMENT',
        heroDesc: 'Reach billions of users with robust Android applications.',
        capabilities: defaultCapabilities
      },
      {
        title: 'iOS Development',
        slug: 'ios-development',
        description: 'Premium iOS applications built with Swift.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'IOS DEVELOPMENT',
        heroDesc: 'Deliver premium mobile experiences on iOS devices.',
        capabilities: defaultCapabilities
      },
      {
        title: 'React Native Development',
        slug: 'react-native-development',
        description: 'Cross-platform solutions maintaining native performance.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'REACT NATIVE DEVELOPMENT',
        heroDesc: 'Accelerate time-to-market with a unified codebase.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Wearable Development',
        slug: 'wearable-development',
        description: 'Extending digital presence to smartwatches.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'WEARABLE DEVELOPMENT',
        heroDesc: 'Specialized experiences for Apple Watch and Wear OS.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Hybrid Development',
        slug: 'hybrid-development',
        description: 'Cost-effective hybrid solutions.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'HYBRID DEVELOPMENT',
        heroDesc: 'Leverage web technologies to build hybrid apps.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'web',
    title: 'WEB TECHNOLOGY DEVELOPMENT',
    slug: 'web-technology',
    headline: 'ENGINEER FOR THE WEB',
    overview: 'We engineer robust, secure, and scalable web solutions.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <polygon points="200,50 320,100 320,200 200,250 80,200 80,100" stroke="url(#gradient-web)" strokeWidth="6" />
        <defs>
          <linearGradient id="gradient-web" x1="80" y1="50" x2="320" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8A2387" />
            <stop offset="0.5" stopColor="#E94057" />
            <stop offset="1" stopColor="#F27121" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Content Management Systems',
        slug: 'content-management-systems',
        description: 'Custom CMS implementations.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'CONTENT MANAGEMENT SYSTEMS',
        heroDesc: 'Take control of your digital content with powerful CMS solutions.',
        capabilities: defaultCapabilities
      },
      {
        title: 'e-Commerce Platforms',
        slug: 'e-commerce-platforms',
        description: 'End-to-end e-commerce solutions.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'E-COMMERCE PLATFORMS',
        heroDesc: 'Build high-converting storefronts.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Custom Web Applications',
        slug: 'custom-web-applications',
        description: 'Complex, data-intensive web applications.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'CUSTOM WEB APPLICATIONS',
        heroDesc: 'Solve unique business challenges with bespoke web apps.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'innovation',
    title: 'INNOVATION TECHNOLOGY',
    slug: 'innovation-technology',
    headline: "PIONEER TOMORROW'S TECH",
    overview: 'Embrace the future with our innovation labs.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <circle cx="200" cy="150" r="100" stroke="url(#gradient-inn)" strokeWidth="2" strokeDasharray="10,10" />
        <defs>
          <linearGradient id="gradient-inn" x1="50" y1="50" x2="350" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4facfe" />
            <stop offset="1" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Augmented & Virtual Reality',
        slug: 'augmented-virtual-reality',
        description: 'Immersive AR/VR experiences.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'AUGMENTED & VIRTUAL REALITY',
        heroDesc: 'Transport users into entirely new dimensions.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Machine Learning & AI',
        slug: 'machine-learning-ai',
        description: 'Intelligent systems that learn from data.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'MACHINE LEARNING & AI',
        heroDesc: 'Leverage AI to automate tasks and predict trends.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Internet of Things',
        slug: 'internet-of-things',
        description: 'Connecting physical devices to digital ecosystems.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'INTERNET OF THINGS',
        heroDesc: 'Create smart, interconnected environments.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Blockchain',
        slug: 'blockchain',
        description: 'Decentralized solutions for secure transactions.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'BLOCKCHAIN',
        heroDesc: 'Implement distributed ledger technology for security.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Cyber Security',
        slug: 'cyber-security',
        description: 'Advanced threat protection and security audits.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'CYBER SECURITY',
        heroDesc: 'Protect enterprise data from evolving digital threats.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE APP DEVELOPMENT',
    slug: 'enterprise-app',
    headline: 'SCALE YOUR ENTERPRISE',
    overview: 'We develop robust enterprise software that streamlines operations.',
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
        <defs>
          <linearGradient id="gradient-ent" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f83600" />
            <stop offset="1" stopColor="#f9d423" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Enterprise Resource Planning',
        slug: 'enterprise-resource-planning',
        description: 'Custom ERP systems that integrate core processes.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'ENTERPRISE RESOURCE PLANNING',
        heroDesc: 'Unify your business operations.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Point of Sale',
        slug: 'point-of-sale',
        description: 'Modern POS solutions.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'POINT OF SALE',
        heroDesc: 'Deliver seamless checkout experiences.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Customer Relation Management',
        slug: 'customer-relation-management',
        description: 'Tailored CRM platforms.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'CUSTOMER RELATION MANAGEMENT',
        heroDesc: 'Empower teams with a 360-degree customer view.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Data & Workflow Automation',
        slug: 'data-workflow-automation',
        description: 'Automating repetitive tasks.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'DATA & WORKFLOW AUTOMATION',
        heroDesc: 'Eliminate manual bottlenecks with RPA.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Business Intelligence',
        slug: 'business-intelligence',
        description: 'Dashboards and analytics tools.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'BUSINESS INTELLIGENCE',
        heroDesc: 'Make data-driven decisions at scale.',
        capabilities: defaultCapabilities
      }
    ]
  },
  {
    id: 'perf',
    title: 'PERFORMANCE ENGINEERING',
    slug: 'performance-engineering',
    headline: 'OPTIMIZE FOR SPEED',
    overview: 'Ensure your applications are lightning-fast and highly available.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    heroSvg: (
      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
        <path d="M100 200 L160 140 L220 180 L300 100" stroke="url(#gradient-perf)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient-perf" x1="100" y1="200" x2="300" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#11998e" />
            <stop offset="1" stopColor="#38ef7d" />
          </linearGradient>
        </defs>
      </svg>
    ),
    items: [
      {
        title: 'Quality Assurance as a Service',
        slug: 'quality-assurance-as-a-service',
        description: 'Comprehensive testing strategies.',
        heroSubtitle: 'PERFORMANCE ENGINEERING',
        heroTitle: 'QUALITY ASSURANCE',
        heroDesc: 'Guarantee flawless software delivery.',
        capabilities: defaultCapabilities
      },
      {
        title: 'Cloud Architecture & Optimization',
        slug: 'cloud-architecture-optimization',
        description: 'Designing and optimizing cloud infrastructures.',
        heroSubtitle: 'PERFORMANCE ENGINEERING',
        heroTitle: 'CLOUD ARCHITECTURE & OPTIMIZATION',
        heroDesc: 'Build resilient, scalable cloud infrastructures.',
        capabilities: defaultCapabilities
      }
    ]
  }
];
