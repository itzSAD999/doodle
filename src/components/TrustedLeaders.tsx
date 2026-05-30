import React from 'react';
import './TrustedLeaders.css';

const TrustedLeaders: React.FC = () => {
  const logos = [
    'Aljazeera', 'AsianPaints', 'Asics', 'ATS', 'Bank of America', 
    'Caratlane', 'Super Kings', 'Cipla', 'Ashok Leyland', 'ASB', 
    'Aspiring Minds', 'Bain & Company', 'Boston Private', 'Chakiat', 
    'Chola MS', 'Colgate', 'Yatra', 'Thangamayil'
  ];

  return (
    <section className="trusted-section">
      <div className="container text-center">
        <h3 className="trusted-title">Trusted by Industry Leaders Worldwide</h3>
        <p className="trusted-subtitle">We partner with ambitious enterprises and visionary teams to deliver measurable, AI-first impact.</p>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="logo-text-item">{logo}</div>
            ))}
            {/* Duplicate for seamless infinite scrolling */}
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="logo-text-item">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLeaders;
