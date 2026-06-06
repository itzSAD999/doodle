import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import './Industries.css';

const Industries: React.FC = () => {
  return (
    <section className="hm-industries-section">
      <div className="hm-industries-track">
        {industriesData.map((ind) => (
          <Link 
            to={`/industries/${ind.id}`} 
            className="hm-industry-card" 
            key={ind.id}
          >
            <div 
              className="hm-industry-bg" 
              style={{ backgroundImage: `url(${ind.heroImg})` }}
            ></div>
            <div className="hm-industry-overlay"></div>
            
            <div className="hm-industry-content">
              <div className="hm-industry-top">
                <img src={ind.icon} alt={ind.name} className="hm-industry-icon" />
              </div>
              
              <div className="hm-industry-bottom">
                <h3 className="hm-industry-title">{ind.name}</h3>
                
                <div className="hm-industry-hidden">
                  <p className="hm-industry-desc">
                    {ind.detail.description.substring(0, 100)}...
                  </p>
                  <span className="hm-industry-btn">
                    Explore <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Industries;
