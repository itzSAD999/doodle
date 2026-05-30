import React from 'react';
import './SuccessStoriesPage.css';

const SuccessStoriesPage: React.FC = () => {
  const caseStudies = [
    {
      category: 'Digital Transformation In Healthcare',
      title: 'How We Increased The Number Of Leads By 148%',
      img: '/industry_healthcare_1780154454292.png'
    },
    {
      category: 'Enterprise App Development',
      title: 'How We Increased The Session Duration By 25% For An Educational Institute',
      img: '/outcome_efficiency_1780155249346.png'
    },
    {
      category: 'How Digital Transformation In Fashion',
      title: 'Increased Customers By 52% For A Luxury Fashion House',
      img: '/diff_talent_1780155488619.png'
    },
    {
      category: 'UI/UX Design Services',
      title: 'How We Increased Sales By 30% For A Travel And Tourism Firm',
      img: '/outcome_growth_1780155366575.png'
    },
    {
      category: 'Custom App Development',
      title: 'Increased Sales For A Transport Service Company',
      img: '/industry_logistics_1780155434420.png'
    }
  ];

  return (
    <div className="page-wrapper success-stories-page">
      <div className="stories-header text-center">
        <h2>Recent Work</h2>
        <div className="giant-work-watermark">WORK</div>
      </div>

      <div className="carousel-container">
        <div className="stories-carousel">
          {caseStudies.map((study, idx) => (
            <div className="story-card" key={idx}>
              <div className="story-bg" style={{ backgroundImage: `url(${study.img})` }}></div>
              <div className="story-overlay"></div>
              <div className="story-content">
                <p className="story-category">{study.category}</p>
                <h3 className="story-title">{study.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-controls">
          <button className="btn-pagination">Prev <span className="diamond-arrow-left"></span></button>
          <div className="control-bar"></div>
          <button className="btn-pagination"><span className="diamond-arrow-right"></span> Next</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
