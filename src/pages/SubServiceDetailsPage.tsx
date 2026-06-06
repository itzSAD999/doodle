import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './SubServiceDetailsPage.css';
import QuickSwitchMenu from '../components/QuickSwitchMenu';

const SubServiceDetailsPage: React.FC = () => {
  const { serviceId, subServiceId } = useParams<{ serviceId: string; subServiceId: string }>();

  // Find the category and subservice
  const category = servicesData.find(s => s.slug === serviceId);
  const subService = category?.items.find(sub => sub.slug === subServiceId);

  if (!category || !subService) {
    return (
      <div className="ssub-error">
        <h2>Service not found</h2>
        <Link to="/services" className="ssub-error-link">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="ssub-page">
      <QuickSwitchMenu />
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <div className="ssub-hero">
          <div className="ssub-hero-inner">
            <p className="ssub-hero-subtitle">{subService.heroSubtitle}</p>
            <h1 className="ssub-hero-title">{subService.heroTitle}</h1>
            <p className="ssub-hero-desc">{subService.heroDesc}</p>
            <p className="ssub-hero-text">{subService.description}</p>
          </div>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content-wrapper">
        {/* Capabilities Stack */}
        <div className="ssub-capabilities">
          <div className="ssub-container">
            {subService.capabilities.map((cap, idx) => (
              <div className={`ssub-cap-row ${idx % 2 !== 0 ? 'reverse' : ''}`} key={idx}>
                <div className="ssub-cap-content">
                  <h2 className="ssub-cap-title">{cap.title}</h2>
                  <h3 className="ssub-cap-subtitle">{cap.subtitle}</h3>

                  <div className="ssub-check-grid">
                    {cap.items.map((row, rIdx) => (
                      <div className="ssub-check-row" key={rIdx}>
                        {row.map((item, iIdx) => (
                          <div className="ssub-check-item" key={iIdx}>
                            <span className="ssub-check-icon">✔</span> {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ssub-cap-visual">
                  {cap.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Work Section */}
        <div className="ssub-recent-work">
          <div className="ssub-container">
            <h2 className="ssub-recent-title">Recent Work</h2>

            <div className="ssub-case-study">
              <div className="ssub-case-image">
                <img src="/outcome_future_1780155280284.png" alt="Case Study" />
              </div>
              <div className="ssub-case-content">
                <p className="ssub-case-category">{category.title}</p>
                <h3 className="ssub-case-headline">
                  HOW WE ACCELERATED {subService.title.toUpperCase()} FOR GLOBAL BRANDS
                </h3>
                <a href="#" className="ssub-case-link">Case Study <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceDetailsPage;
