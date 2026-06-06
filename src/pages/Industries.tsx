import React from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';
import { industriesData } from '../data/industriesData';

const Industries: React.FC = () => {
  return (
    <div className="industries-page">
      <div className="sticky-hero-wrapper">
        <section className="industries-hero">
        <div className="industries-hero-content">
          <h1 className="industries-hero-title">
            <span className="fw-light">Disrupting Industries. </span>
            <span className="text-primary fw-bold">One Sector at a Time.</span>
          </h1>
          <h3 className="industries-hero-subtitle">
            We help empower, enable and optimize solutions across all industries.
          </h3>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        <section className="industries-grid-section">
        <div className="industries-grid">
          {industriesData.map((industry) => (
            <Link 
              to={`/industries/${industry.id}`} 
              key={industry.id} 
              className="industry-card"
            >
              <div className="industry-card-bg" style={{ backgroundImage: `url(${industry.heroImg})` }}></div>
              <div className="industry-card-overlay"></div>
              <div className="industry-card-content">
                <img src={industry.icon} alt={industry.name} className="industry-icon" />
                <h3 className="industry-title">{industry.name}</h3>
                <div className="industry-hover-content">
                  <p>{industry.detail.description.substring(0, 80)}...</p>
                  <span className="industry-explore-btn">Explore</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </section>

        {/* Recent Work Section */}
        <section className="industries-recent-work" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5 position-relative">
              <h2 className="mb-0" style={{ fontSize: '3rem', fontWeight: 600 }}>Recent Work</h2>
              <div className="giant-work-watermark position-absolute w-100" style={{ top: '50%', transform: 'translateY(-50%)', fontSize: '8rem', color: '#f8f9fa', zIndex: 0, fontWeight: 800, letterSpacing: '1rem', pointerEvents: 'none' }}>
                WORK
              </div>
            </div>

            <div className="row position-relative" style={{ zIndex: 1 }}>
              {[
                { category: 'Digital Transformation in Healthcare', title: 'How we increased the number of leads by 148%', img: '/outcome_efficiency_1780155249346.png' },
                { category: 'Enterprise App Development', title: 'How we increased the session duration by 25% for an Educational Institute', img: '/outcome_growth_1780155366575.png' },
                { category: 'Digital Transformation in Fashion', title: 'How Digital Transformation in Fashion Increased Customers by 52% for a Luxury Fashion House', img: '/diff_talent_1780155488619.png' },
                { category: 'UI/UX Design Services', title: 'How we Increased Sales by 30% for a Travel and Tourism Firm', img: '/outcome_future_1780155280284.png' },
                { category: 'Custom App Development', title: 'Increased Sales by 65% for a Transport Facility Service Company', img: '/outcome_efficiency_1780155249346.png' },
                { category: 'Web Technology Services', title: 'How our Custom Web Solutions helped increase the Time on Site for a Fashion Powerhouse', img: '/outcome_growth_1780155366575.png' },
                { category: 'Enterprise App Development', title: 'Increased Sales by 30% for a Wireless Telecom Company', img: '/diff_talent_1780155488619.png' },
                { category: 'Chatbot for E-Commerce', title: 'How we Increased Customer for a Luxury Fashion Brand by 30% with an Intuitive Chatbot', img: '/outcome_future_1780155280284.png' }
              ].map((work, idx) => (
                <div key={idx} className="col-md-6 col-lg-3 mb-4">
                  <div className="industry-work-card position-relative overflow-hidden rounded shadow-sm" style={{ height: '350px' }}>
                    <div className="work-bg position-absolute w-100 h-100" style={{ backgroundImage: `url(${work.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="work-overlay position-absolute w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                    <div className="work-content position-absolute bottom-0 p-4 text-white">
                      <p className="work-category small mb-2 text-uppercase text-info" style={{ letterSpacing: '1px' }}>{work.category}</p>
                      <h4 className="work-title fs-5 fw-semibold mb-0">{work.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industries;
