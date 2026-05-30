import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Engineer Hyper-Growth.<br/>Accelerate What's Next.</h1>
        <p className="hero-subtitle">
          AI-powered enterprise transformation for fast-moving innovators across manufacturing, supply chain, logistics, retail, and more.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-white">
            <span>Schedule a Call</span>
            <span className="arrow">→</span>
          </button>
          <button className="btn btn-primary">
            <span>Explore Solutions</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="hero-carousel-container" style={{ position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ width: '100%', padding: '0 80px' }}>
          <div className="hero-carousel">
            <div className="carousel-item active">
              <div className="carousel-indicator"></div>
              <h3 style={{ color: '#fff' }}>Enterprise Efficiency</h3>
            </div>
            <div className="carousel-item">
              <div className="carousel-indicator"></div>
              <h3 style={{ color: '#fff' }}>Startup Acceleration</h3>
            </div>
            <div className="carousel-item">
              <div className="carousel-indicator"></div>
              <h3 style={{ color: '#fff' }}>Growth Optimisation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
