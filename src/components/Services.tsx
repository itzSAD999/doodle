import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="mosaic-section">
      {/* 1. Solutions Mosaic */}
      <div className="mosaic-grid solutions-mosaic">
        
        {/* Left Side: 2/3 Width Large Vertical */}
        <div className="mosaic-card mosaic-large-left">
          <div className="mosaic-bg" style={{ backgroundImage: "url('/outcome_efficiency_1780155249346.png')" }}></div>
          <div className="mosaic-overlay dark"></div>
          <div className="mosaic-content">
            <p className="mosaic-label">SOLUTION TRACK</p>
            <h3 className="mosaic-title">Unlock Efficiency</h3>
            <p className="mosaic-desc">For enterprises optimising legacy systems with AI. We eliminate inefficiencies and engineer for scale.</p>
          </div>
        </div>

        {/* Right Side: Stacked 1/3 Width Cards */}
        <div className="mosaic-stacked-right">
          <div className="mosaic-card">
            <div className="mosaic-bg" style={{ backgroundImage: "url('/outcome_future_1780155280284.png')" }}></div>
            <div className="mosaic-overlay dark"></div>
            <div className="mosaic-content">
              <p className="mosaic-label">SOLUTION TRACK</p>
              <h3 className="mosaic-title">Unlock The Future</h3>
              <p className="mosaic-desc">For visionary leaders discovering bold ideas.</p>
            </div>
          </div>
          
          <div className="mosaic-card">
            <div className="mosaic-bg" style={{ backgroundImage: "url('/outcome_growth_1780155366575.png')" }}></div>
            <div className="mosaic-overlay dark"></div>
            <div className="mosaic-content">
              <p className="mosaic-label">SOLUTION TRACK</p>
              <h3 className="mosaic-title">Unlock Hyper-Growth</h3>
              <p className="mosaic-desc">For startups building investor-ready products.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
