import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { successStoriesData } from '../data/successStoriesData';
import './SuccessStoryDetails.css';

const SuccessStoryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = successStoriesData.find(s => s.id === id);

  if (!story) {
    return (
      <div className="ssd-error">
        <h2>Success Story not found</h2>
        <Link to="/success-stories" className="ssd-error-link">Return to Success Stories</Link>
      </div>
    );
  }

  return (
    <div className="ssd-page">
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <section className="ssd-hero" style={{ backgroundColor: story.bgColor }}>
          <div className="ssd-hero-bg" style={{ backgroundImage: `url(${story.bgImage})` }}></div>
          <div className="ssd-hero-content">
            <img src={story.logo} alt={story.title} className="ssd-hero-logo" />
            <h1 className="ssd-hero-title">{story.title}</h1>
            <div className="ssd-industry-badge">{story.industry}</div>
          </div>
        </section>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content-wrapper">
        <section className="ssd-overview-section">
          <div className="ssd-container">
            <div className="ssd-grid">
              <div className="ssd-block">
                <h3 className="ssd-block-label">◆ Overview</h3>
                <p>{story.detail.overview}</p>
              </div>
              <div className="ssd-block">
                <h3 className="ssd-block-label">◆ Challenge</h3>
                <p>{story.detail.challenge}</p>
              </div>
              <div className="ssd-block">
                <h3 className="ssd-block-label">◆ Solution</h3>
                <p>{story.detail.solution}</p>
              </div>
              <div className="ssd-block ssd-impact-block">
                <h3 className="ssd-block-label">◆ Impact</h3>
                <p className="ssd-impact-text">{story.detail.impact}</p>
              </div>
            </div>

            <div className="ssd-back-nav">
              <Link
                to="/success-stories"
                className="ssd-back-btn"
                style={{ borderColor: story.bgColor, color: story.bgColor }}
              >
                ← Back to Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStoryDetails;
