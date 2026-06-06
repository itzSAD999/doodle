import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';
import { successStoriesData } from '../data/successStoriesData';

const SuccessStories: React.FC = () => {
  return (
    <div className="success-stories-page">
      <div className="sticky-hero-wrapper">
        <section className="success-hero text-center text-white">
          <div className="success-hero-content">
            <h1 className="success-hero-title">
              <span className="fw-light">Our Relationships create a </span>
              <span className="text-primary fw-bold">lasting impact</span>
            </h1>
            <h3 className="success-hero-subtitle">
              We partner with visionaries to deliver transformative digital experiences.
            </h3>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        <section className="stories-grid-section">
          <div className="success-grid">
            {successStoriesData.map((story) => (
              <Link 
                to={`/success-stories/${story.id}`} 
                key={story.id} 
                className="success-card"
                style={{ backgroundColor: story.bgColor }}
              >
                <div className="success-card-content">
                  <img src={story.logo} alt={story.title} className="success-card-logo" />
                  <h3 className="success-card-title">{story.title}</h3>
                  <p className="success-card-industry">{story.industry}</p>
                  <span className="success-card-link">View Case Study <span className="arrow"></span></span>
                </div>
                <div className="success-card-bg" style={{ backgroundImage: `url(${story.bgImage})` }}></div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStories;
