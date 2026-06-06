import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="page-wrapper services-page-interactive">
      <div className="services-page">
        <div className="sticky-hero-wrapper">
          <div className="services-grid-hero">
            <div className="container">
              <h1 className="services-headline">
                BLENDING <span className="highlight-blue">STRATEGY</span> ,<br />
                <span className="highlight-blue">DESIGN</span> AND <span className="highlight-blue">INNOVATION</span>
              </h1>
              <p className="services-subheadline">Leveraging technology and innovation to transform your business.</p>
            </div>
          </div>
        </div>

        <div className="overlay-content-wrapper">
          <div className="container services-interactive-content">
            <div className="interactive-masonry">
              {servicesData.map((category, idx) => (
                <Link 
                  to={`/services/${category.slug}`}
                  className="interactive-service-card" 
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card-icon-container">
                    {category.icon}
                  </div>
                  <h3 className={`interactive-category-title ${hoveredIdx === idx ? 'hovered-title' : ''}`}>
                    {category.title}
                  </h3>
                  
                  <div className={`card-hover-content ${hoveredIdx === idx ? 'show-content' : ''}`}>
                    <div className="content-separator"></div>
                    <ul className="interactive-category-items">
                      {category.items.map((item, iIdx) => (
                        <li key={iIdx}>{item.title}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="services-cta text-center">
            <div className="container">
              <button className="btn btn-primary mt-4">Consult Now <span className="arrow">→</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
