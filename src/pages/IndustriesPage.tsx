import React from 'react';
import './IndustriesPage.css';

const IndustriesPage: React.FC = () => {
  const industriesList = [
    { name: 'Finance', img: '/industry_manufacturing_1780155400615.png' }, // Reusing images for vibe
    { name: 'Hospitality', img: '/industry_healthcare_1780154454292.png' },
    { name: 'Retail', img: '/industry_retail_1780154522985.png' },
    { name: 'Transport', img: '/industry_logistics_1780155434420.png' },
    { name: 'Fashion', img: '/industry_manufacturing_1780155400615.png' }, // Reused
    { name: 'Education', img: '/outcome_future_1780155280284.png' }, // Reused
    { name: 'Telecom', img: '/diff_neural_1780155469233.png' }, // Reused
    { name: 'Healthcare', img: '/industry_healthcare_1780154454292.png' }
  ];

  return (
    <div className="page-wrapper industries-page-vertical">
      
      {/* Dark Starry Contact Banner */}
      <div className="dark-contact-banner">
        <div className="stars-layer"></div>
        <div className="container text-center relative-z">
          <h2>Have a question? We're happy to help</h2>
          <button className="btn btn-primary mt-4">Contact Us <span className="arrow">→</span></button>
        </div>
      </div>

      <div className="industries-slices-section">
        {/* Giant Watermark */}
        <div className="giant-watermark">INDUSTRIES</div>
        
        <div className="slices-container">
          {industriesList.map((ind, idx) => (
            <div className="industry-slice" key={idx}>
              <div className="slice-bg" style={{ backgroundImage: `url(${ind.img})` }}></div>
              <div className="slice-overlay"></div>
              <h3 className="slice-title">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default IndustriesPage;
