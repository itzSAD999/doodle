import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import './IndustryDetails.css';

const IndustryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const industry = industriesData.find(i => i.id === id);

  if (!industry) {
    return (
      <div className="industry-details-error">
        <h2>Industry not found</h2>
        <Link to="/industries" className="back-link">Return to Industries</Link>
      </div>
    );
  }

  return (
    <div className="industry-details-page">
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <section
          className="ind-detail-hero"
          style={{ backgroundImage: `url(${industry.heroImg})` }}
        >
          <div className="ind-hero-overlay"></div>
          <div className="ind-hero-content">
            <img src={industry.icon} alt={industry.name} className="ind-hero-icon" />
            <h1 className="ind-hero-title">{industry.name}</h1>
            <h3 className="ind-hero-subtitle">{industry.detail.headline}</h3>
          </div>
        </section>
      </div>

      {/* Content Overlay */}
      <div className="overlay-content-wrapper">
        <section className="ind-content-section">
          <div className="ind-container">
            <div className="ind-description-block">
              <h2 className="ind-section-label">◆ Overview</h2>
              <p>{industry.detail.description}</p>
            </div>

            <div className="ind-capabilities-block">
              <h2 className="ind-section-label">◆ Our Capabilities</h2>
              <div className="ind-capabilities-grid">
                {industry.detail.capabilities.map((cap, idx) => (
                  <div className="ind-cap-card" key={idx}>
                    <span className="ind-cap-number">{String(idx + 1).padStart(2, '0')}</span>
                    <p className="ind-cap-text">{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ind-back-nav">
              <Link to="/industries" className="ind-back-btn">
                ← Back to all Industries
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndustryDetails;
