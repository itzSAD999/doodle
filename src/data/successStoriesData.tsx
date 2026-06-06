export interface SuccessStory {
  id: string;
  title: string;
  industry: string;
  bgColor: string;
  logo: string;
  bgImage: string;
  detail: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
  };
}

export const successStoriesData: SuccessStory[] = [
  {
    id: 'star-health',
    title: 'Redefining UX strategy',
    industry: 'healthcare',
    bgColor: '#0f7af9',
    logo: '/images/success-story/starhealth-logo.png',
    bgImage: '/images/success-story/starhealth.png',
    detail: {
      overview: 'Star Health is a leading provider of health insurance.',
      challenge: 'They needed a complete UX overhaul to simplify their complex insurance purchasing flow.',
      solution: 'We rebuilt their digital experience from the ground up focusing on user-centric design principles.',
      impact: 'Resulted in a 40% increase in online policy renewals and a significant drop in support calls.'
    }
  },
  {
    id: 'bijlipay',
    title: 'Reinventing the core',
    industry: 'Finance',
    bgColor: '#712c7c',
    logo: '/images/success-story/bijilipay-logo.png',
    bgImage: '/images/success-story/bijilipay.png',
    detail: {
      overview: 'Bijlipay offers end-to-end payment solutions.',
      challenge: 'Their legacy architecture was struggling to scale with increasing transaction volumes.',
      solution: 'We modernized their core processing engine with a microservices architecture.',
      impact: 'Achieved 99.99% uptime and 3x faster transaction processing times.'
    }
  },
  {
    id: 'sarva',
    title: 'Digital Product Innovation',
    industry: 'health and wellness',
    bgColor: '#596377',
    logo: '/images/success-story/sarva-logo.png',
    bgImage: '/images/success-story/sarva.png',
    detail: {
      overview: 'Sarva is a premium yoga and wellness brand.',
      challenge: 'They wanted to transition from physical studios to a global digital platform.',
      solution: 'We built a robust video-on-demand and live-streaming application.',
      impact: 'Expanded their reach to over 50 countries with a highly engaged digital community.'
    }
  },
  {
    id: 'mobily',
    title: 'Power of digital transformation',
    industry: 'telecom',
    bgColor: '#00aeef',
    logo: '/images/success-story/mobily-logo.png',
    bgImage: '/images/success-story/mobily.png',
    detail: {
      overview: 'Mobily is a leading telecommunications provider.',
      challenge: 'Customer retention was dropping due to a fragmented digital experience across web and app.',
      solution: 'We unified their digital ecosystem with a seamless omnichannel strategy.',
      impact: 'Increased app engagement by 60% and improved customer satisfaction scores.'
    }
  },
  {
    id: 'validus',
    title: 'Performance transformation',
    industry: 'Fintech',
    bgColor: '#e3191a',
    logo: '/images/success-story/validus-logo.png',
    bgImage: '/images/success-story/validus.png',
    detail: {
      overview: 'Validus is a prominent SME financing platform.',
      challenge: 'The loan approval process was manual and time-consuming.',
      solution: 'We integrated AI-driven risk assessment models and automated workflows.',
      impact: 'Reduced loan processing time from weeks to hours.'
    }
  },
  {
    id: 'eshakti',
    title: 'Digital Innovation in Fashion',
    industry: 'E-Commerce',
    bgColor: '#000000',
    logo: '/images/success-story/eshakti-logo.png',
    bgImage: '/images/success-story/eshakti.png',
    detail: {
      overview: 'eShakti is a highly customizable online women\'s apparel retailer.',
      challenge: 'The complex customization UI was causing cart abandonment.',
      solution: 'We designed an intuitive, visual customization interface.',
      impact: 'Increased conversion rates by 25% and boosted average order value.'
    }
  },
  {
    id: 'golf',
    title: 'App Development with a Solid UI/UX Strategy',
    industry: 'Gaming App',
    bgColor: '#6fbc64',
    logo: '/images/success-story/golf-logo.png',
    bgImage: '/images/success-story/golf-swipe-3.png',
    detail: {
      overview: 'A premium community app for golf enthusiasts.',
      challenge: 'Needed a scalable app that could handle live scoring and real-time community engagement.',
      solution: 'Delivered a highly performant native app with real-time socket connections.',
      impact: 'Reached top 10 in sports category within first month of launch.'
    }
  },
  {
    id: 'round-ups',
    title: 'Digital Investment',
    industry: 'Fintech',
    bgColor: '#e3191a',
    logo: '/images/success-story/roundup_work.png',
    bgImage: '/images/success-story/roundup_main.png',
    detail: {
      overview: 'Round-ups allows users to invest spare change from everyday purchases.',
      challenge: 'Integrating securely with multiple banking APIs seamlessly.',
      solution: 'Built a robust integration layer and an intuitive financial dashboard.',
      impact: 'Secured thousands of active daily users within weeks.'
    }
  },
  {
    id: 'flyy',
    title: 'Mobile Engineering',
    industry: 'Transport',
    bgColor: '#6fbc64',
    logo: '/images/success-story/fly-logo.png',
    bgImage: '/images/success-story/Flyy.png',
    detail: {
      overview: 'Flyy is a modern transport and logistics platform.',
      challenge: 'Needed precise real-time tracking and route optimization.',
      solution: 'Engineered a highly optimized mapping and routing system.',
      impact: 'Reduced average delivery times and optimized fleet fuel usage.'
    }
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    industry: 'Automobile',
    bgColor: '#F36E72',
    logo: '/images/success-story/software-testing.png',
    bgImage: '/images/success-story/software-testing-hoover.png',
    detail: {
      overview: 'A major automobile manufacturer.',
      challenge: 'Legacy systems were hindering the adoption of connected car technologies.',
      solution: 'Provided deep technical consulting and a roadmap for modernization.',
      impact: 'Successfully launched their first line of fully connected vehicles.'
    }
  },
  {
    id: 'mobility-application',
    title: 'Mobility Application',
    industry: 'Automobile',
    bgColor: '#0F46A1',
    logo: '/images/success-story/auto-mobility.png',
    bgImage: '/images/success-story/auto-mobility-hoover.png',
    detail: {
      overview: 'A smart mobility solution for urban commuters.',
      challenge: 'Creating a seamless user experience across different modes of transport.',
      solution: 'Developed a unified mobility app integrating various transit APIs.',
      impact: 'Adopted by city authorities as the official transit companion app.'
    }
  }
];
