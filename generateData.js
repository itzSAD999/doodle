const fs = require('fs');
const path = require('path');

const output = `import React from 'react';

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

// Reusable SVG components for capabilities
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
    <path d="M20 25 L50 40 L80 25 M50 40 L50 90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const svg3 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 85 L15 65 L15 25 L50 5 L85 25 L85 65 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M15 25 L50 45 L85 25 M50 45 L50 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M30 15 L65 35 L65 75 M30 15 L30 55 L65 75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"/>
  </svg>
);

const svg4 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 85 L20 75 L20 40 L50 50 L80 40 L80 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 40 L50 30 L80 40 M50 30 L50 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M50 50 L50 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 75 L50 65 L80 75 M50 65 L50 50" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

const svg5 = (
  <svg viewBox="0 0 100 100" className="iso-graphic">
    <path d="M50 85 L20 70 L50 55 L80 70 Z M20 70 L20 75 L50 90 L80 75 L80 70 M50 55 L50 60 L80 75" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M50 65 L20 50 L50 35 L80 50 Z M20 50 L20 55 L50 70 L80 55 L80 50 M50 35 L50 40 L80 55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M50 45 L20 30 L50 15 L80 30 Z M20 30 L20 35 L50 50 L80 35 L80 30 M50 15 L50 20 L80 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const servicesData: ServiceCategory[] = [
  {
    id: 'dt',
    title: 'DIGITAL TRANSFORMATION',
    slug: 'digital-transformation',
    headline: 'ADAPT TO A CHANGING MARKET',
    overview: 'Transforms the way business interacts with changing digital landscapes by creating trust quotient and engagement. Digital transformation brings a new dimension in the business world with innovation, creativity and strategies that bring prodigious results.',
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
        description: 'We map the as-is state of your digital systems to identify gaps, redundancies, and opportunities for modernization. Our audit lays the groundwork for a scalable, future-proof ecosystem.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'TECHNOLOGY & ECOSYSTEM AUDIT',
        heroDesc: 'Uncover the full potential of your current tech stack. We identify bottlenecks and craft a tailored modernization roadmap.',
        capabilities: [
          {
            title: 'System Analysis',
            subtitle: 'Deep dive into your architecture',
            items: [['Architecture Review', 'Performance Benchmarking'], ['Security Assessment', 'Scalability Analysis']],
            svg: svg1
          },
          {
            title: 'Process Mapping',
            subtitle: 'Streamline your workflows',
            items: [['Value Stream Mapping', 'Bottleneck Identification'], ['Automation Opportunities']],
            svg: svg2
          },
          {
            title: 'Modernization Strategy',
            subtitle: 'Future-proof your business',
            items: [['Cloud Migration Plan', 'Tech Stack Selection'], ['ROI Projections']],
            svg: svg3
          }
        ]
      },
      {
        title: 'Digital Strategy',
        slug: 'digital-strategy',
        description: 'Crafting a roadmap tailored to your business objectives. We help align technology initiatives with your broader goals to ensure meaningful ROI and sustainable growth.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL STRATEGY',
        heroDesc: 'Aligning your technology investments with overarching business goals to drive continuous growth and market dominance.',
        capabilities: [
          {
            title: 'Business Alignment',
            subtitle: 'Connecting tech to goals',
            items: [['Objective Setting', 'KPI Definition'], ['Stakeholder Alignment']],
            svg: svg4
          },
          {
            title: 'Market Research',
            subtitle: 'Understanding the landscape',
            items: [['Competitor Analysis', 'Trend Forecasting'], ['Customer Journey Mapping']],
            svg: svg5
          },
          {
            title: 'Execution Roadmap',
            subtitle: 'Step-by-step to success',
            items: [['Phased Rollout Plan', 'Resource Allocation'], ['Risk Management']],
            svg: svg1
          }
        ]
      },
      {
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        description: 'Leveraging data-driven insights to build brand presence, engage target audiences, and optimize conversion funnels across multiple digital touchpoints.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL MARKETING',
        heroDesc: 'Our digital marketing services provide compelling strategies that build a strong connection between brands and their potential customers.',
        capabilities: [
          {
            title: 'SEO',
            subtitle: 'Enhance optimization organically',
            items: [['Website Audit', 'On-page Optimization'], ['Competitor Analysis', 'Off-page Optimization'], ['Keyword Analysis', 'Reporting']],
            svg: svg1
          },
          {
            title: 'SEM',
            subtitle: 'Amplify your brand',
            items: [['Google Adwords', 'Yahoo Ads'], ['Youtube Ads', 'Facebook Ads'], ['Flipkart Ads']],
            svg: svg2
          },
          {
            title: 'SMM',
            subtitle: 'Build relationships',
            items: [['Paid Media', 'Engagement'], ['Owned Media', 'Analytics'], ['Earned Media', 'Reporting']],
            svg: svg3
          },
          {
            title: 'ORM',
            subtitle: 'Protect your digital identity',
            items: [['Build online presence'], ['Promote positive reviews'], ['Gives strong rankings']],
            svg: svg4
          },
          {
            title: 'Campaign Outreach',
            subtitle: 'Comprehensive digital strategy',
            items: [['Email Strategy'], ['Newsletter Marketing'], ['Retargeting Mechanism']],
            svg: svg5
          }
        ]
      },
      {
        title: 'Digital Analytics',
        slug: 'digital-analytics',
        description: 'Implementing robust tracking and reporting frameworks that turn raw data into actionable insights, enabling continuous optimization of your digital products and services.',
        heroSubtitle: 'DIGITAL TRANSFORMATION',
        heroTitle: 'DIGITAL ANALYTICS',
        heroDesc: 'Turn your raw data into a strategic asset. We build analytics ecosystems that drive informed decision making.',
        capabilities: [
          {
            title: 'Data Collection',
            subtitle: 'Capture every interaction',
            items: [['Event Tracking', 'Cross-device stitching'], ['Data Warehousing']],
            svg: svg2
          },
          {
            title: 'Business Intelligence',
            subtitle: 'Visualize your success',
            items: [['Custom Dashboards', 'Real-time Reporting'], ['Predictive Analytics']],
            svg: svg3
          },
          {
            title: 'Conversion Optimization',
            subtitle: 'Maximize your ROI',
            items: [['A/B Testing', 'Funnel Analysis'], ['User Behavior Tracking']],
            svg: svg4
          }
        ]
      }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX & DESIGN THINKING',
    slug: 'ui-ux-design',
    headline: 'CRAFT SEAMLESS EXPERIENCES',
    overview: 'We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences.',
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
    items: [
      {
        title: 'Branding',
        slug: 'branding',
        description: 'We create distinctive visual identities that resonate with your target audience. From logo design to comprehensive brand guidelines, we ensure consistency across all touchpoints.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'BRANDING',
        heroDesc: 'Forge an unforgettable identity that stands out in a crowded market and speaks directly to your audience.',
        capabilities: [
          {
            title: 'Visual Identity',
            subtitle: 'The face of your business',
            items: [['Logo Design', 'Color Palettes'], ['Typography', 'Brand Guidelines']],
            svg: svg5
          },
          {
            title: 'Brand Strategy',
            subtitle: 'The voice of your business',
            items: [['Brand Positioning', 'Messaging Matrix'], ['Tone of Voice']],
            svg: svg1
          }
        ]
      },
      {
        title: 'UX Strategy',
        slug: 'ux-strategy',
        description: 'Our UX strategy aligns user needs with business goals. Through extensive research and journey mapping, we create blueprints for intuitive and engaging digital products.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'UX STRATEGY',
        heroDesc: 'Bridge the gap between business objectives and user needs with research-driven experience design.',
        capabilities: [
          {
            title: 'User Research',
            subtitle: 'Understand your audience',
            items: [['User Interviews', 'Persona Creation'], ['Empathy Mapping']],
            svg: svg2
          },
          {
            title: 'Information Architecture',
            subtitle: 'Organize for clarity',
            items: [['Site Mapping', 'Card Sorting'], ['User Flows']],
            svg: svg3
          },
          {
            title: 'Prototyping',
            subtitle: 'Validate before building',
            items: [['Wireframing', 'Interactive Prototypes'], ['Usability Testing']],
            svg: svg4
          }
        ]
      },
      {
        title: 'Mobile & Web Design',
        slug: 'mobile-web-design',
        description: 'Designing pixel-perfect interfaces that look stunning and perform flawlessly across all devices. We focus on accessibility, responsive layouts, and delightful micro-interactions.',
        heroSubtitle: 'UI/UX & DESIGN THINKING',
        heroTitle: 'MOBILE & WEB DESIGN',
        heroDesc: 'Create visually stunning and highly functional interfaces that users love to interact with.',
        capabilities: [
          {
            title: 'UI Design',
            subtitle: 'Aesthetics meet function',
            items: [['High-fidelity Mockups', 'Design Systems'], ['Iconography']],
            svg: svg5
          },
          {
            title: 'Interaction Design',
            subtitle: 'Bring static designs to life',
            items: [['Micro-animations', 'Transition Design'], ['Feedback Loops']],
            svg: svg1
          }
        ]
      }
    ]
  },
  {
    id: 'mobile',
    title: 'MOBILE ENGINEERING',
    slug: 'mobile-engineering',
    headline: 'EMPOWER USERS ANYWHERE',
    overview: 'We build high-performance mobile applications that deliver native-like experiences. Our engineering approach focuses on scalability, security, and exceptional user engagement.',
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
    items: [
      {
        title: 'Android Development',
        slug: 'android-development',
        description: 'Custom Android applications built with Kotlin and Java, optimized for the diverse Android ecosystem and hardware configurations.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'ANDROID DEVELOPMENT',
        heroDesc: 'Reach billions of users with robust, scalable, and secure Android applications tailored to your business needs.',
        capabilities: [
          {
            title: 'Native App Development',
            subtitle: 'Built for performance',
            items: [['Kotlin & Java', 'Android SDK'], ['Material Design Implementation']],
            svg: svg2
          },
          {
            title: 'Device Optimization',
            subtitle: 'Seamless across all screens',
            items: [['Responsive Layouts', 'Hardware Integration'], ['Battery Optimization']],
            svg: svg3
          }
        ]
      },
      {
        title: 'iOS Development',
        slug: 'ios-development',
        description: 'Premium iOS applications built with Swift, adhering to Apple\\'s Human Interface Guidelines for exceptional user experiences.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'IOS DEVELOPMENT',
        heroDesc: 'Deliver premium mobile experiences that strictly adhere to Apple\\'s rigorous performance and design standards.',
        capabilities: [
          {
            title: 'Native App Development',
            subtitle: 'Swift & Objective-C',
            items: [['SwiftUI & UIKit', 'CoreData Integration'], ['Apple Ecosystem Sync']],
            svg: svg4
          },
          {
            title: 'App Store Optimization',
            subtitle: 'Get discovered',
            items: [['App Store Guidelines', 'Submission Process'], ['Post-Launch Support']],
            svg: svg5
          }
        ]
      },
      {
        title: 'React Native Development',
        slug: 'react-native-development',
        description: 'Cross-platform solutions that share a single codebase while maintaining native performance and look-and-feel.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'REACT NATIVE DEVELOPMENT',
        heroDesc: 'Accelerate your time-to-market with a unified codebase that powers both iOS and Android platforms flawlessly.',
        capabilities: [
          {
            title: 'Cross-Platform Framework',
            subtitle: 'Write once, run anywhere',
            items: [['React Native Architecture', 'Shared Business Logic'], ['Native Modules Integration']],
            svg: svg1
          },
          {
            title: 'Performance Tuning',
            subtitle: 'Native-like feel',
            items: [['60fps Animations', 'Memory Management'], ['Over-the-Air Updates']],
            svg: svg2
          }
        ]
      },
      {
        title: 'Wearable Development',
        slug: 'wearable-development',
        description: 'Extending your digital presence to smartwatches and fitness trackers with dedicated companion apps.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'WEARABLE DEVELOPMENT',
        heroDesc: 'Bring your applications to the wrist with specialized experiences for Apple Watch and Wear OS devices.',
        capabilities: [
          {
            title: 'WatchOS & Wear OS',
            subtitle: 'Smartwatch integration',
            items: [['Custom Complications', 'Sensor Integration'], ['Companion App Sync']],
            svg: svg3
          }
        ]
      },
      {
        title: 'Hybrid Development',
        slug: 'hybrid-development',
        description: 'Cost-effective hybrid solutions using modern frameworks to reach users across platforms quickly.',
        heroSubtitle: 'MOBILE ENGINEERING',
        heroTitle: 'HYBRID DEVELOPMENT',
        heroDesc: 'Leverage web technologies to build highly accessible and cost-effective mobile applications.',
        capabilities: [
          {
            title: 'Web-to-Mobile',
            subtitle: 'Cost-effective reach',
            items: [['Ionic & Capacitor', 'Progressive Web Apps'], ['Offline Capabilities']],
            svg: svg4
          }
        ]
      }
    ]
  },
  {
    id: 'web',
    title: 'WEB TECHNOLOGY DEVELOPMENT',
    slug: 'web-technology',
    headline: 'ENGINEER FOR THE WEB',
    overview: 'We engineer robust, secure, and scalable web solutions. From complex enterprise portals to high-converting e-commerce platforms, we use cutting-edge tech stacks.',
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
    items: [
      {
        title: 'Content Management Systems',
        slug: 'content-management-systems',
        description: 'Custom CMS implementations that empower your team to manage content effortlessly, tailored to your specific workflow.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'CONTENT MANAGEMENT SYSTEMS',
        heroDesc: 'Take control of your digital content with headless and traditional CMS solutions that scale with your team.',
        capabilities: [
          {
            title: 'CMS Strategy',
            subtitle: 'The right tool for the job',
            items: [['Headless vs Traditional', 'Platform Selection'], ['Workflow Customization']],
            svg: svg5
          },
          {
            title: 'Platform Implementation',
            subtitle: 'Seamless integration',
            items: [['Strapi & Contentful', 'WordPress & Drupal'], ['Content Migration']],
            svg: svg1
          }
        ]
      },
      {
        title: 'e-Commerce Platforms',
        slug: 'e-commerce-platforms',
        description: 'End-to-end e-commerce solutions that drive sales, integrate with your supply chain, and provide secure checkout experiences.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'E-COMMERCE PLATFORMS',
        heroDesc: 'Build high-converting storefronts with robust inventory management and frictionless checkout experiences.',
        capabilities: [
          {
            title: 'Storefront Development',
            subtitle: 'Engaging shopping experiences',
            items: [['Shopify & Magento', 'Custom Cart Solutions'], ['Payment Gateway Integration']],
            svg: svg2
          },
          {
            title: 'Backend Integration',
            subtitle: 'Streamlined operations',
            items: [['ERP/CRM Sync', 'Inventory Management'], ['Logistics Integration']],
            svg: svg3
          }
        ]
      },
      {
        title: 'Custom Web Applications',
        slug: 'custom-web-applications',
        description: 'Complex, data-intensive web applications built with modern frontend frameworks and scalable backend architectures.',
        heroSubtitle: 'WEB TECHNOLOGY DEVELOPMENT',
        heroTitle: 'CUSTOM WEB APPLICATIONS',
        heroDesc: 'Solve unique business challenges with bespoke web applications engineered for speed and scalability.',
        capabilities: [
          {
            title: 'Frontend Development',
            subtitle: 'Interactive & fast',
            items: [['React & Next.js', 'Vue & Nuxt'], ['State Management']],
            svg: svg4
          },
          {
            title: 'Backend Architecture',
            subtitle: 'Secure & scalable',
            items: [['Node.js & Python', 'Microservices'], ['Database Design']],
            svg: svg5
          }
        ]
      }
    ]
  },
  {
    id: 'innovation',
    title: 'INNOVATION TECHNOLOGY',
    slug: 'innovation-technology',
    headline: 'PIONEER TOMORROW\\'S TECH',
    overview: 'Embrace the future with our innovation labs. We help organizations integrate emerging technologies to solve complex problems and create new business models.',
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
    items: [
      {
        title: 'Augmented & Virtual Reality',
        slug: 'augmented-virtual-reality',
        description: 'Immersive AR/VR experiences for training, retail, and entertainment that blur the line between physical and digital worlds.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'AUGMENTED & VIRTUAL REALITY',
        heroDesc: 'Transport your users into entirely new dimensions with immersive AR and VR enterprise solutions.',
        capabilities: [
          {
            title: 'AR Development',
            subtitle: 'Enhance the real world',
            items: [['ARKit & ARCore', 'WebAR Experiences'], ['Product Visualizers']],
            svg: svg1
          },
          {
            title: 'VR Environments',
            subtitle: 'Fully immersive',
            items: [['Unity & Unreal Engine', 'Virtual Training Labs'], ['3D Modeling']],
            svg: svg2
          }
        ]
      },
      {
        title: 'Machine Learning & AI',
        slug: 'machine-learning-ai',
        description: 'Intelligent systems that learn from data to automate processes, predict trends, and enhance decision-making.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'MACHINE LEARNING & AI',
        heroDesc: 'Leverage the power of Artificial Intelligence to automate tasks, generate insights, and predict the future.',
        capabilities: [
          {
            title: 'Predictive Analytics',
            subtitle: 'Anticipate trends',
            items: [['Demand Forecasting', 'Risk Assessment'], ['Churn Prediction']],
            svg: svg3
          },
          {
            title: 'Natural Language Processing',
            subtitle: 'Understand human context',
            items: [['Chatbots & Virtual Assistants', 'Sentiment Analysis'], ['Document Parsing']],
            svg: svg4
          },
          {
            title: 'Computer Vision',
            subtitle: 'See the unseen',
            items: [['Image Recognition', 'Video Analysis'], ['Quality Control Automation']],
            svg: svg5
          }
        ]
      },
      {
        title: 'Internet of Things',
        slug: 'internet-of-things',
        description: 'Connecting physical devices to the digital ecosystem to gather real-time data and enable smart automation.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'INTERNET OF THINGS',
        heroDesc: 'Bridge the gap between physical hardware and digital networks to create smart, interconnected environments.',
        capabilities: [
          {
            title: 'IoT Architecture',
            subtitle: 'Connect everything',
            items: [['Device Provisioning', 'Edge Computing'], ['Protocol Implementation']],
            svg: svg1
          },
          {
            title: 'Data Telemetry',
            subtitle: 'Real-time insights',
            items: [['Streaming Analytics', 'Predictive Maintenance'], ['IoT Dashboards']],
            svg: svg2
          }
        ]
      },
      {
        title: 'Blockchain',
        slug: 'blockchain',
        description: 'Decentralized solutions for secure transactions, smart contracts, and transparent supply chain tracking.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'BLOCKCHAIN',
        heroDesc: 'Implement distributed ledger technology for unparalleled security, transparency, and traceability.',
        capabilities: [
          {
            title: 'Smart Contracts',
            subtitle: 'Automated trust',
            items: [['Solidity Development', 'Contract Auditing'], ['DeFi Integrations']],
            svg: svg3
          },
          {
            title: 'Enterprise Blockchain',
            subtitle: 'Private & secure',
            items: [['Hyperledger Fabric', 'Supply Chain Tracking'], ['Identity Management']],
            svg: svg4
          }
        ]
      },
      {
        title: 'Cyber Security',
        slug: 'cyber-security',
        description: 'Advanced threat protection and security audits to safeguard your digital assets and user data.',
        heroSubtitle: 'INNOVATION TECHNOLOGY',
        heroTitle: 'CYBER SECURITY',
        heroDesc: 'Protect your enterprise from evolving digital threats with comprehensive security frameworks.',
        capabilities: [
          {
            title: 'Security Audits',
            subtitle: 'Identify vulnerabilities',
            items: [['Penetration Testing', 'Code Review'], ['Compliance Assessment']],
            svg: svg5
          },
          {
            title: 'Threat Mitigation',
            subtitle: 'Active defense',
            items: [['Incident Response', 'Zero-Trust Architecture'], ['Data Encryption']],
            svg: svg1
          }
        ]
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE APP DEVELOPMENT',
    slug: 'enterprise-app',
    headline: 'SCALE YOUR ENTERPRISE',
    overview: 'We develop robust enterprise software that streamlines operations, connects departments, and provides actionable insights at scale.',
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
    items: [
      {
        title: 'Enterprise Resource Planning',
        slug: 'enterprise-resource-planning',
        description: 'Custom ERP systems that integrate core business processes in real-time, improving efficiency and reducing operational costs.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'ENTERPRISE RESOURCE PLANNING',
        heroDesc: 'Unify your business operations with a centralized system that offers real-time visibility across all departments.',
        capabilities: [
          {
            title: 'Core Integration',
            subtitle: 'Unified data models',
            items: [['Finance & Accounting', 'Human Resources'], ['Supply Chain Management']],
            svg: svg2
          },
          {
            title: 'Custom Workflows',
            subtitle: 'Built for your processes',
            items: [['Approval Matrices', 'Automated Notifications'], ['Role-based Access']],
            svg: svg3
          }
        ]
      },
      {
        title: 'Point of Sale',
        slug: 'point-of-sale',
        description: 'Modern POS solutions that unify online and offline sales, inventory management, and customer data.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'POINT OF SALE',
        heroDesc: 'Deliver seamless checkout experiences whether in-store or on-the-go with cloud-connected POS systems.',
        capabilities: [
          {
            title: 'Omnichannel Sales',
            subtitle: 'Sell anywhere',
            items: [['Cloud Synchronization', 'Offline Mode Support'], ['Hardware Integration']],
            svg: svg4
          },
          {
            title: 'Inventory Sync',
            subtitle: 'Real-time stock',
            items: [['Multi-location Tracking', 'Low Stock Alerts'], ['Supplier Ordering']],
            svg: svg5
          }
        ]
      },
      {
        title: 'Customer Relation Management',
        slug: 'customer-relation-management',
        description: 'Tailored CRM platforms that help you manage interactions, track leads, and build lasting customer relationships.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'CUSTOMER RELATION MANAGEMENT',
        heroDesc: 'Empower your sales and support teams with tools that provide a 360-degree view of your customers.',
        capabilities: [
          {
            title: 'Sales Pipeline',
            subtitle: 'Close more deals',
            items: [['Lead Scoring', 'Activity Tracking'], ['Sales Forecasting']],
            svg: svg1
          },
          {
            title: 'Customer Success',
            subtitle: 'Retain and grow',
            items: [['Ticketing Systems', 'Knowledge Base Integration'], ['Satisfaction Surveys']],
            svg: svg2
          }
        ]
      },
      {
        title: 'Data & Workflow Automation',
        slug: 'data-workflow-automation',
        description: 'Automating repetitive tasks and data entry to free up your workforce for higher-value activities.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'DATA & WORKFLOW AUTOMATION',
        heroDesc: 'Eliminate manual bottlenecks with intelligent RPA and workflow automation tools.',
        capabilities: [
          {
            title: 'Process Automation',
            subtitle: 'Let machines do the work',
            items: [['RPA Implementation', 'API Integrations'], ['Scheduled Cron Jobs']],
            svg: svg3
          },
          {
            title: 'Data Pipeline',
            subtitle: 'Seamless flow',
            items: [['ETL Processes', 'Data Cleansing'], ['System Synchronization']],
            svg: svg4
          }
        ]
      },
      {
        title: 'Business Intelligence',
        slug: 'business-intelligence',
        description: 'Dashboards and analytics tools that transform complex enterprise data into clear, visual insights.',
        heroSubtitle: 'ENTERPRISE APP DEVELOPMENT',
        heroTitle: 'BUSINESS INTELLIGENCE',
        heroDesc: 'Make data-driven decisions at the executive level with crystal-clear reporting and analytics.',
        capabilities: [
          {
            title: 'Data Visualization',
            subtitle: 'See the big picture',
            items: [['Executive Dashboards', 'Interactive Charts'], ['Custom Reports']],
            svg: svg5
          },
          {
            title: 'Data Warehousing',
            subtitle: 'Single source of truth',
            items: [['Data Lakes', 'OLAP Cubes'], ['Historical Analysis']],
            svg: svg1
          }
        ]
      }
    ]
  },
  {
    id: 'perf',
    title: 'PERFORMANCE ENGINEERING',
    slug: 'performance-engineering',
    headline: 'OPTIMIZE FOR SPEED',
    overview: 'Ensure your applications are lightning-fast, highly available, and capable of handling massive scale without degradation in user experience.',
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
    items: [
      {
        title: 'Quality Assurance as a Service',
        slug: 'quality-assurance-as-a-service',
        description: 'Comprehensive testing strategies including automated, load, and security testing to ensure your software is robust.',
        heroSubtitle: 'PERFORMANCE ENGINEERING',
        heroTitle: 'QUALITY ASSURANCE',
        heroDesc: 'Guarantee flawless software delivery with comprehensive manual and automated testing strategies.',
        capabilities: [
          {
            title: 'Automated Testing',
            subtitle: 'Speed and reliability',
            items: [['Unit Testing', 'Integration Testing'], ['End-to-End Testing (Cypress/Selenium)']],
            svg: svg2
          },
          {
            title: 'Performance Testing',
            subtitle: 'Handle the load',
            items: [['Stress Testing', 'Load Balancing Validation'], ['Spike Testing']],
            svg: svg3
          }
        ]
      },
      {
        title: 'Cloud Architecture & Optimization',
        slug: 'cloud-architecture-optimization',
        description: 'Designing and optimizing cloud infrastructures to balance performance, scalability, and cost efficiency.',
        heroSubtitle: 'PERFORMANCE ENGINEERING',
        heroTitle: 'CLOUD ARCHITECTURE & OPTIMIZATION',
        heroDesc: 'Build resilient, scalable, and cost-efficient cloud infrastructures that grow with your business.',
        capabilities: [
          {
            title: 'Cloud Migration',
            subtitle: 'Move to the cloud safely',
            items: [['AWS, Azure, GCP', 'Lift & Shift Strategies'], ['Cloud Native Refactoring']],
            svg: svg4
          },
          {
            title: 'FinOps & Cost Optimization',
            subtitle: 'Maximize cloud ROI',
            items: [['Resource Right-sizing', 'Reserved Instances'], ['Auto-scaling Policies']],
            svg: svg5
          }
        ]
      }
    ]
  }
];
\`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'servicesData.tsx'), output);
console.log('Successfully wrote servicesData.tsx');
