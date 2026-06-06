import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetailsPage.css';
import '../pages/SuccessStoriesPage.css'; // Reuse Recent Work styling
import QuickSwitchMenu from '../components/QuickSwitchMenu';

const ServiceDetailsPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Find the selected service or default to the first one
  const currentService = servicesData.find(s => s.slug === serviceId) || servicesData[0];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectService = (slug: string) => {
    setIsDropdownOpen(false);
    navigate(`/services/${slug}`);
  };

  // Generic recent work based on the selected service
  const recentWork = [
    {
      category: currentService.title,
      title: `How We Implemented ${currentService.title} to Increase Leads By 148%`,
      img: '/outcome_efficiency_1780155249346.png'
    },
    {
      category: 'Enterprise Strategy',
      title: `Scaling Operations with Advanced ${currentService.title} Solutions`,
      img: '/diff_talent_1780155488619.png'
    },
    {
      category: 'Innovation & Growth',
      title: `Driving 30% Revenue Growth through ${currentService.items[0]?.title || 'Digital Strategy'}`,
      img: '/outcome_growth_1780155366575.png'
    }
  ];

  return (
    <div className="page-wrapper service-details-page">
      <QuickSwitchMenu />
      <div className="sticky-hero-wrapper">
        {/* Hero Section */}
        <div className="sd-hero">
          <div className="container sd-hero-container">
          <div className="sd-hero-left">
            <div className="sd-dropdown-container">
              <button 
                className="sd-dropdown-toggle" 
                onClick={() => setIsDropdownOpen(true)}
              >
                {currentService.title} <span className="sd-chevron">⌄</span>
              </button>
            </div>
            
            <h1 className="sd-headline">{currentService.headline}</h1>
          </div>
          
          <div className="sd-hero-right">
            {currentService.heroSvg}
          </div>
        </div>
      </div>
      </div>

      <div className="overlay-content-wrapper">
        {/* Sub Services Overview & Grid */}
        <div className="sd-sub-services">
          <div className="container">
          {currentService.overview && (
            <p className="sd-overview-text">{currentService.overview}</p>
          )}
          <div className="sd-cards-grid">
            {currentService.items.map((item, idx) => (
              <div 
                className="sd-sub-card" 
                key={idx}
                onClick={() => navigate(`/services/${currentService.slug}/${item.slug}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="sd-card-icon">
                  {currentService.icon}
                </div>
                <div className="sd-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Work Section (Consistent across all services) */}
      <div className="sd-recent-work">
        <div className="stories-header text-center" style={{ paddingTop: '80px', marginBottom: '-40px' }}>
          <h2>Recent Work</h2>
          <div className="giant-work-watermark">WORK</div>
        </div>

        <div className="carousel-container" style={{ paddingBottom: '100px' }}>
          <div className="stories-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', padding: '0 40px' }}>
            {recentWork.map((study, idx) => (
              <div className="story-card" key={idx} style={{ minWidth: 'auto', height: '400px' }}>
                <div className="story-bg" style={{ backgroundImage: `url(${study.img})` }}></div>
                <div className="story-overlay"></div>
                <div className="story-content">
                  <p className="story-category">{study.category}</p>
                  <h3 className="story-title">{study.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Fullscreen Services Switcher Overlay */}
      <div className={`sd-fullscreen-overlay ${isDropdownOpen ? 'open' : ''}`}>
        <div className="sd-overlay-bg-watermark">SERVICES</div>
        
        {/* Close Button Area */}
        <button className="sd-overlay-close" onClick={() => setIsDropdownOpen(false)}>
          ✕
        </button>

        <div className="sd-overlay-content">
          <div className="sd-overlay-menu">
            {Object.values(servicesData).map((cat, idx) => (
              <div key={idx} className="sd-menu-group">
                <div 
                  className={`sd-menu-item ${cat.slug === serviceId ? 'active' : ''}`}
                  onClick={() => handleSelectService(cat.slug)}
                >
                  <span className="sd-menu-diamond">◆</span>
                  <span className="sd-menu-line"></span>
                  <span className="sd-menu-text">{cat.title}</span>
                </div>
                {cat.slug === serviceId && (
                  <ul className="sd-submenu">
                    {cat.items.map((sub, iIdx) => (
                      <li 
                        key={iIdx} 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/services/${cat.slug}/${sub.slug}`);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
