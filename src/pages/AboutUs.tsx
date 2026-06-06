import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AboutUs.css';
import { leadershipData, pressData } from '../data/aboutData';

const AboutUs: React.FC = () => {
  const location = useLocation();
  const leadershipRef = useRef<HTMLElement>(null);
  const pressRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const move = params.get('move');
    if (move === 'Leadership' && leadershipRef.current) {
      leadershipRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (move === 'Press' && pressRef.current) {
      pressRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="about-page">
      {/* Hero Banner (Sticky for book cover effect) */}
      <div className="sticky-hero-wrapper">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              <span className="fw-light">Hello World. </span>
              <br />
              <span className="fw-bold">This is us.</span>
            </h1>
            <h3 className="about-hero-subtitle">
              We are happy and passionate people committed to solving big problems
            </h3>
            
            <Link to="/approach" className="approach-btn-animated mt-5">
              <span className="btn-text">Discover Our Approach</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Content that scrolls OVER the hero */}
      <div className="overlay-content-wrapper">
        {/* Intro Section */}
        <section className="about-intro">
          <div className="about-intro-inner">
            <h2 className="intro-title">Digital strategy consulting<br />that gets results</h2>
            <p className="intro-text">
              We are a digital strategy consulting boutique that loves to learn, collaborate and create all things digital. We are equipped to cater to a mix of global brands, leading consultancies, famous startups, fortune 500s and governments. With digital transformation being the need of the hour, we help clients make significant and lasting improvements in the digital space.
            </p>
          </div>
        </section>

        {/* Amazing Dots Section */}
        <section className="amazing-dots-section">
          <h2 className="section-heading text-center">Amazing things happen to your business when we connect these dots of utility and value.</h2>
          <div className="dots-grid">
            <div className="dot-card">
              <img src="/images/about-page/Vector Smart Object 1.svg" alt="Design" />
              <h3>Design.</h3>
              <h5>Be Creative.</h5>
              <h5>Create the Best.</h5>
            </div>
            <div className="dot-card">
              <img src="/images/about-page/Vector Smart Object2.svg" alt="Innovate" />
              <h3 style={{ color: '#9e4cf1' }}>Innovate.</h3>
              <h5>Be Innovative.</h5>
              <h5>Innovate the Next.</h5>
            </div>
            <div className="dot-card">
              <img src="/images/about-page/Vector Smart Object3.svg" alt="Transform" />
              <h3 style={{ color: '#e56379' }}>Transform.</h3>
              <h5>Be Functional.</h5>
              <h5>Refine the Rest.</h5>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="leadership-section" ref={leadershipRef}>
          <div className="leadership-header">
            <h2 className="section-title">Leadership</h2>
          </div>
          <div className="leadership-grid">
            {leadershipData.map((leader, index) => (
              <div key={index} className="leader-card" style={{ backgroundImage: `url(${leader.image})` }}>
                <div className="leader-content">
                  <div className="leader-title">
                    <h3>{leader.name}</h3>
                    <h5>{leader.title}</h5>
                  </div>
                  <div className="leader-separator"></div>
                  <p>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Behind Logo Section */}
        <section className="logo-story-section">
          <div className="logo-story-intro text-center">
            <h2 className="section-heading">The story behind our logo</h2>
            <h5>Our refreshed corporate logo represents a new era of doodleblue. We are growing, and the business is transforming rapidly, delivering pioneering solutions and services on a global scale.</h5>
            <img src="/images/about-page/doodleblue-footer-logo.png" alt="doodleblue" className="main-logo-img" />
          </div>
          
          <div className="logo-details-split">
            <div className="logo-parts-grid">
              <img src="/images/about-page/doodle.png" alt="Doodle" />
              <img src="/images/about-page/blue.png" alt="Blue" />
              <img src="/images/about-page/code.png" alt="Code" />
              <img src="/images/about-page/infinite.png" alt="Infinite" />
            </div>
            <div className="logo-explanation">
              <h5>The infinity icon is a key element of the new logo. What message does it convey?</h5>
              <div className="logo-points">
                <p><strong>Golden ratio -</strong> We nurture the relationship of perfection and potential in our logo and our work.</p>
                <p><strong>doodleblue -</strong> Have you noticed the company initials?</p>
                <p><strong>Infinite possibilities -</strong> The infinity symbolizes endless possibilities from the technology-based intelligent business solutions we provide across a range of sectors.</p>
                <p><strong>Code -</strong> We empower your future by programming digital assets, coding products, streamlining processes and automating businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Know Our Strategy Section */}
        <section className="about-strategy-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-7 order-md-1 order-2">
                <h2 className="section-heading">Our digital transformation<br />consulting approach.</h2>
                <h4 className="strategy-subcontent">We don't just build, we perform. We build an innovative digital strategy and deploy an agile process that facilitates transparent and effective communication to optimize digital transformation. See how we work</h4>
                <Link to="/approach" className="approach-link-btn">Discover Our Approach →</Link>
              </div>
              <div className="col-md-6 col-lg-5 order-md-2 order-1 text-center">
                {/* Image placeholder to match the site's design */}
                <div className="strategy-image-placeholder"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="press-section" ref={pressRef}>
          <h2 className="section-heading text-center">What the press has to say about us</h2>
          <div className="press-grid">
            {pressData.map((article, index) => (
              <a key={index} href={article.link} target="_blank" rel="noopener noreferrer" className="press-card">
                <div className="press-logo-wrapper">
                  <img src={article.logo} alt={article.publisher} />
                </div>
                <div className="press-content">
                  <h4>{article.headline}</h4>
                  <p>{article.excerpt}</p>
                  <span className="view-story">View Story</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
