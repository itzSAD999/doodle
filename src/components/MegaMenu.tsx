import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('SERVICES');

  const tabs = ['SERVICES', 'INDUSTRIES', 'ABOUT US', 'SUCCESS STORIES', 'CAREERS', 'BLOGS'];

  if (!isOpen) return null;

  return (
    <div className={`mega-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="mega-menu-bg-text">
        DIGITAL<br/>STRATEGY<br/>CONSULTING
      </div>
      
      <button className="mega-menu-close" onClick={onClose}>
        ✕
      </button>

      <div className="mega-menu-content">
        <div className="mega-menu-sidebar">
          {tabs.map(tab => (
            <div 
              key={tab}
              className={`mega-menu-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab && <div className="active-line"></div>}
              {tab}
            </div>
          ))}
        </div>

        <div className="mega-menu-details">
          {activeTab === 'SERVICES' && (
            <div className="services-grid">
              
              {/* Column 1 */}
              <div className="service-column">
                <div className="service-group">
                  <h4>Digital Transformation</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Technology & Ecosystem Audit</Link></li>
                    <li><Link to="/services" onClick={onClose}>Digital Strategy</Link></li>
                    <li><Link to="/services" onClick={onClose}>Digital Marketing</Link></li>
                  </ul>
                </div>
                
                <div className="service-group">
                  <h4>Web Technology Development</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Content Management Systems</Link></li>
                    <li><Link to="/services" onClick={onClose}>e-Commerce Platforms</Link></li>
                    <li><Link to="/services" onClick={onClose}>Custom Web Applications</Link></li>
                  </ul>
                </div>

                <div className="service-group">
                  <h4>Performance Engineering</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Quality assurance as a service</Link></li>
                    <li><Link to="/services" onClick={onClose}>Cloud Architecture Engineering & Optimization</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="service-column">
                <div className="service-group">
                  <h4>Data & Analytics</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Branding</Link></li>
                    <li><Link to="/services" onClick={onClose}>UX Strategy</Link></li>
                    <li><Link to="/services" onClick={onClose}>Mobile & Web Design</Link></li>
                  </ul>
                </div>

                <div className="service-group">
                  <h4>Innovation</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Augmented & Virtual Reality</Link></li>
                    <li><Link to="/services" onClick={onClose}>Machine Learning & AI</Link></li>
                    <li><Link to="/services" onClick={onClose}>Internet of Things</Link></li>
                    <li><Link to="/services" onClick={onClose}>Blockchain</Link></li>
                    <li><Link to="/services" onClick={onClose}>Cyber Security</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="service-column">
                <div className="service-group">
                  <h4>Mobile Engineering</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Android Development</Link></li>
                    <li><Link to="/services" onClick={onClose}>IOS Development</Link></li>
                    <li><Link to="/services" onClick={onClose}>React Native Development</Link></li>
                    <li><Link to="/services" onClick={onClose}>Wearable Development</Link></li>
                    <li><Link to="/services" onClick={onClose}>Hybrid Development</Link></li>
                  </ul>
                </div>

                <div className="service-group">
                  <h4>Enterprise Application Development</h4>
                  <ul>
                    <li><Link to="/services" onClick={onClose}>Enterprise Resource Planning</Link></li>
                    <li><Link to="/services" onClick={onClose}>Point of Sale</Link></li>
                    <li><Link to="/services" onClick={onClose}>Customer Relationship Management</Link></li>
                    <li><Link to="/services" onClick={onClose}>Data Warehousing & Workflow Automation</Link></li>
                    <li><Link to="/services" onClick={onClose}>Business Intelligence</Link></li>
                  </ul>
                </div>
              </div>

            </div>
          )}
          
          {activeTab !== 'SERVICES' && (
            <div className="placeholder-content">
              <h3>{activeTab} Content</h3>
              <p>Select Services to see the detailed menu as per the reference.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
