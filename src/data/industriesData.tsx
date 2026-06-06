export interface Industry {
  id: string;
  name: string;
  icon: string;
  heroImg: string;
  detail: {
    headline: string;
    description: string;
    capabilities: string[];
  };
}

export const industriesData: Industry[] = [
  {
    id: 'education',
    name: 'Education',
    icon: '/images/industries/education-icon.png',
    heroImg: '/images/industries/education-hero.jpg',
    detail: {
      headline: 'Transforming Education Through Digital Innovation',
      description: 'We build scalable e-learning platforms, virtual classrooms, and educational management systems that empower institutions to deliver world-class learning experiences.',
      capabilities: ['E-Learning Platforms', 'LMS Integration', 'Virtual Classrooms', 'Student Information Systems']
    }
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '/images/industries/fashion-icon.png',
    heroImg: '/images/industries/fashion-hero.jpg',
    detail: {
      headline: 'Digital Couture: Elevating Fashion Retail',
      description: 'We help fashion brands create immersive e-commerce experiences, personalized styling engines, and robust supply chain solutions.',
      capabilities: ['E-Commerce Platforms', 'AR Try-On', 'Inventory Management', 'Personalization Engines']
    }
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: '/images/industries/finance-icon.png',
    heroImg: '/images/industries/finance-hero.jpg',
    detail: {
      headline: 'Secure and Scalable Fintech Solutions',
      description: 'From mobile banking apps to complex trading platforms, we deliver secure, compliant, and user-centric financial technology solutions.',
      capabilities: ['Mobile Banking', 'Payment Gateways', 'Wealth Management Tech', 'Blockchain Solutions']
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '/images/industries/healthcare-icon.png',
    heroImg: '/images/industries/healthcare-hero.jpg',
    detail: {
      headline: 'Digital Health and Telemedicine',
      description: 'We develop HIPAA-compliant applications, telemedicine platforms, and patient engagement tools that improve healthcare outcomes.',
      capabilities: ['Telemedicine Apps', 'EHR Integration', 'Patient Portals', 'Health Tracking Wearables']
    }
  },
  {
    id: 'hospitality',
    name: 'Hospitality and Leisure',
    icon: '/images/industries/hospitality-icon.png',
    heroImg: '/images/industries/hospitality-hero.jpg',
    detail: {
      headline: 'Enhancing the Guest Experience',
      description: 'We create seamless booking systems, mobile concierge apps, and operational dashboards for the hospitality sector.',
      capabilities: ['Booking Systems', 'Mobile Concierge', 'Loyalty Programs', 'Property Management']
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '/images/industries/retail-icon.png',
    heroImg: '/images/industries/retail-hero.jpg',
    detail: {
      headline: 'Omnichannel Retail Transformations',
      description: 'We bridge the gap between physical and digital retail with robust point-of-sale systems, e-commerce, and advanced analytics.',
      capabilities: ['Omnichannel E-commerce', 'POS Systems', 'Customer Analytics', 'Supply Chain Solutions']
    }
  },
  {
    id: 'telecom',
    name: 'Telecommunication',
    icon: '/images/industries/telecom-icon.png',
    heroImg: '/images/industries/telecom-hero.jpg',
    detail: {
      headline: 'Next-Gen Telecom Solutions',
      description: 'We support telecom companies with customer self-service portals, billing systems, and network management tools.',
      capabilities: ['Self-Service Apps', 'Billing & CRM Integration', 'Network Dashboards', 'IoT Solutions']
    }
  },
  {
    id: 'transport',
    name: 'Transport and Logistics',
    icon: '/images/industries/transport-icon.png',
    heroImg: '/images/industries/transport-hero.jpg',
    detail: {
      headline: 'Optimizing Global Logistics',
      description: 'We build fleet management software, real-time tracking apps, and warehouse optimization tools for modern logistics.',
      capabilities: ['Fleet Management', 'Real-Time Tracking', 'Warehouse Automation', 'Route Optimization']
    }
  }
];
