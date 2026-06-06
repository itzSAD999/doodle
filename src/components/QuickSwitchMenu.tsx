import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './QuickSwitchMenu.css';

const QuickSwitchMenu: React.FC = () => {
  const location = useLocation();

  return (
    <div className="quick-switch-wrapper">
      <div className="container">
        <ul className="quick-switch-list">
          {servicesData.map((service, idx) => {
            const isActive = location.pathname.includes(`/services/${service.slug}`);
            return (
              <li key={idx} className="quick-switch-item">
                <NavLink 
                  to={`/services/${service.slug}`}
                  className={`quick-switch-link ${isActive ? 'active' : ''}`}
                >
                  {service.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuickSwitchMenu;
