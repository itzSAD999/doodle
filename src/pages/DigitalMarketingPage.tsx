import React from 'react';
import './DigitalMarketingPage.css';

const DigitalMarketingPage: React.FC = () => {
  const capabilities = [
    {
      title: 'SEO',
      subtitle: 'Enhance optimization organically',
      items: [
        ['Website Audit', 'On-page Optimization'],
        ['Competitor Analysis', 'Off-page Optimization'],
        ['Keyword Analysis', 'Reporting']
      ],
      // L-shape 3D block
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M50 80 L20 65 L20 45 L40 55 L40 35 L60 45 L60 65 L80 55 L80 35 L50 20 L30 30" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M20 65 L50 80 L80 65 L80 45 L50 60 L20 45 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M50 80 L50 60 M20 65 L40 55 L40 35 L20 45 M80 65 L60 55 L60 35 L80 45" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          {/* Detailed lines to match L-shape */}
          <path d="M20 65 L30 70 L60 55 L50 50 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M50 80 L60 75 L60 55 L50 60 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M60 55 L90 40 L90 20 L60 35 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M60 35 L70 30 L70 50 L60 55 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M30 70 L40 75 L40 55 L30 50 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M40 75 L70 60 L70 40 L40 55 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M70 60 L80 65 L80 45 L70 40 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M40 55 L50 50 L80 35 L70 40 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M30 50 L60 35" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: 'SEM',
      subtitle: 'Amplify your brand',
      items: [
        ['Google Adwords', 'Yahoo Ads'],
        ['Youtube Ads', 'Facebook Ads'],
        ['Flipkart Ads']
      ],
      // S-shape maze block
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M50 90 L20 75 L20 25 L50 10 L80 25 L80 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M30 70 L30 30 L70 50 L70 70 M40 65 L40 35 L60 45 L60 65 M50 60 L50 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M20 25 L50 40 L80 25 M50 40 L50 90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'SMM',
      subtitle: 'Build relationships',
      items: [
        ['Paid Media', 'Engagement'],
        ['Owned Media', 'Analytics'],
        ['Earned Media', 'Reporting']
      ],
      // Cube block
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M50 85 L15 65 L15 25 L50 5 L85 25 L85 65 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M15 25 L50 45 L85 25 M50 45 L50 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M30 15 L65 35 L65 75 M30 15 L30 55 L65 75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'ORM',
      subtitle: 'Protect your digital identity',
      items: [
        ['Build online presence'],
        ['Promote and generate positive reviews'],
        ['Gives strong search engine rankings']
      ],
      // Hexagon block
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M50 85 L20 75 L20 40 L50 50 L80 40 L80 75 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M20 40 L50 30 L80 40 M50 30 L50 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M50 50 L50 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M20 75 L50 65 L80 75 M50 65 L50 50" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Campaign Outreach',
      subtitle: 'Comprehensive digital strategy',
      items: [
        ['Email Strategy'],
        ['Newsletter Marketing'],
        ['Retargeting Mechanism']
      ],
      // Floating platforms
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M50 85 L20 70 L50 55 L80 70 Z M20 70 L20 75 L50 90 L80 75 L80 70 M50 55 L50 60 L80 75" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M50 65 L20 50 L50 35 L80 50 Z M20 50 L20 55 L50 70 L80 55 L80 50 M50 35 L50 40 L80 55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M50 45 L20 30 L50 15 L80 30 Z M20 30 L20 35 L50 50 L80 35 L80 30 M50 15 L50 20 L80 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Content Strategy',
      subtitle: 'Fuel your brand and drive results',
      items: [
        ['Tone of voice', 'Content pillars'],
        ['Evaluation of framework', 'Content calendar'],
        ['Keyword Analysis']
      ],
      // Brick wall
      svg: (
        <svg viewBox="0 0 100 100" className="iso-graphic">
          <path d="M80 20 L20 50 L20 80 L80 50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M80 50 L90 55 L90 25 L80 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M20 80 L30 85 L90 55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M20 60 L80 30 M20 70 L80 40 M40 60 L40 70 M60 50 L60 60 M50 45 L50 35 M70 35 L70 25" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="page-wrapper digital-marketing-page">
      
      {/* Hero Section */}
      <div className="dm-hero">
        <div className="container text-center">
          <p className="dm-hero-subtitle">DIGITAL TRANSFORMATION</p>
          <h1 className="dm-hero-title">DIGITAL MARKETING</h1>
          <p className="dm-hero-desc">
            A Conglomerate Digital Landscape To Bring ROI
          </p>
          <p className="dm-hero-text">
            Our digital marketing services provide compelling strategies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty.
          </p>
        </div>
      </div>

      {/* Capabilities Stack */}
      <div className="dm-capabilities">
        <div className="container">
          {capabilities.map((cap, idx) => (
            <div className={`dm-cap-row ${idx % 2 !== 0 ? 'reverse' : ''}`} key={idx}>
              <div className="dm-cap-content">
                <h2 className="dm-cap-title">{cap.title}</h2>
                <h3 className="dm-cap-subtitle">{cap.subtitle}</h3>
                
                <div className="dm-check-list-grid">
                  {cap.items.map((row, rIdx) => (
                    <div className="dm-check-row" key={rIdx}>
                      {row.map((item, iIdx) => (
                        <div className="dm-check-item" key={iIdx}>
                          <span className="dm-check-icon">✔</span> {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="dm-cap-visual">
                {cap.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="dm-recent-work">
        <div className="container">
          <h2 className="dm-recent-title text-center">Recent Work</h2>
          
          <div className="dm-case-study">
            <div className="dm-case-image">
              <img src="/outcome_future_1780155280284.png" alt="Case Study" />
            </div>
            <div className="dm-case-content">
              <p className="dm-case-category">DIGITAL TRANSFORMATION</p>
              <h3 className="dm-case-headline">
                INCREASED CUSTOMER ENGAGEMENT FOR FASHION HOUSES
              </h3>
              <a href="#" className="dm-case-link">Case Study <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DigitalMarketingPage;
