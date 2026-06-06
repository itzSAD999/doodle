import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = "Career at doodleblue | openings at chennai | doodleblue | India";
  }, []);

  return (
    <div className="careers-page">
      {/* Apply Now Floating Button */}
      <div className="careers-floating-cta">
        <Link to="/careers/openings">
          <button className="careers-apply-btn">Apply Now <span className="careers-diamond">─◇</span></button>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="sticky-hero-wrapper">
        <section className="careers-hero">
          <div className="careers-grid-overlay"></div>
          <div className="careers-hero-inner">
            <h1 className="careers-title">
              Careers At <span className="careers-title-accent">doodleblue</span>
            </h1>
            <h3 className="careers-subtitle">
              We are engineers, designers, marketers and gamers<br />
              who are shaping the future digitally
            </h3>
            <div className="careers-hero-cta">
              <Link to="/careers/openings" className="careers-btn-primary">
                Open Positions <span className="careers-diamond">─◇</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        {/* Testimonials */}
        <section className="careers-testimonials">
          <div className="careers-container">
            <div className="careers-testimonials-header">
              <h2>This is what our talent has to say.</h2>
              <p>Our roots are digital; our passion is contagious<br />and our people are simply the best</p>
            </div>
          </div>

          <div className="careers-testimonial-strip">
            <div className="careers-testimonial-card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"}}>
              <div className="careers-testimonial-gradient"></div>
              <div className="careers-testimonial-info">
                <h4>Subhotosh</h4>
                <p>Business Analyst</p>
              </div>
            </div>
            <div className="careers-testimonial-card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"}}>
              <div className="careers-testimonial-gradient"></div>
              <div className="careers-testimonial-info">
                <h4>Sireesha</h4>
                <p>RGT Associate</p>
              </div>
            </div>
            <div className="careers-testimonial-card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"}}>
              <div className="careers-testimonial-gradient"></div>
              <div className="careers-testimonial-info">
                <h4>Adhithya</h4>
                <p>RGT Associate</p>
              </div>
            </div>
            <div className="careers-testimonial-card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"}}>
              <div className="careers-testimonial-gradient"></div>
              <div className="careers-testimonial-info">
                <h4>Monisha</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* The doodleblue culture */}
        <section className="careers-culture">
          <div className="careers-container">
            <h2 className="careers-culture-title">The <span className="careers-title-accent">doodleblue</span> culture</h2>

            <div className="careers-culture-grid">
              <div className="careers-culture-block">
                <div className="careers-culture-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a62bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h5>Problem Solvers</h5>
                  <p>We are problem solvers first and strongly believe all problems have optimized solutions. We give cross-functional problem solving a whole new meaning.</p>
                </div>
              </div>
              <div className="careers-culture-block">
                <div className="careers-culture-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a62bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h5>Transparency</h5>
                  <p>We believe clear and open communication plays a vital role in helping us deliver our best. We pride ourselves for transparency at all levels and aspects of work.</p>
                </div>
              </div>
              <div className="careers-culture-block">
                <div className="careers-culture-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a62bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h5>Empathy</h5>
                  <p>We strongly believe empathy is a key factor in collaboration. Since we're responsible for building our clients' dreams, we enjoy walking a mile in their shoes.</p>
                </div>
              </div>
              <div className="careers-culture-block">
                <div className="careers-culture-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a62bb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h5>We Don't Give Up</h5>
                  <p>We are proactive. Instead of saying "It's not possible", we list a series of possibilities and alternatives and get the job done.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upskill Section */}
        <section className="careers-upskill">
          <div className="careers-container careers-center-text">
            <p className="careers-upskill-desc">
              Senior Software Engineers, Technology Architects & Product Managers that equip you to become a leader in the industry
            </p>
            <Link to="/careers/upskill" className="careers-btn-white">
              Know More <span className="careers-diamond">─◇</span>
            </Link>
          </div>
        </section>

        {/* Interns Section */}
        <section className="careers-interns">
          <div className="careers-container careers-center-text">
            <h2 className="careers-interns-title">Interns At <span className="careers-title-accent">doodleblue</span></h2>
            <p className="careers-interns-desc">
              Interns are given an opportunity to work on live projects, solve real time problems and learn from its superlative treasure of experience and expertise to add to yours. Stay ahead of the race by giving your career a kickstart with doodleblue.
            </p>
            <Link to="/careers/interns" className="careers-btn-primary">
              Learn More <span className="careers-diamond">─◇</span>
            </Link>
          </div>
        </section>

        {/* Openings Section */}
        <section className="careers-openings" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
          <div className="careers-container">
            <div className="text-center mb-5">
              <h2 className="mb-3">Join our Team</h2>
              <p className="text-muted">Browse our open positions and pick the challenge that excites you the most</p>
            </div>
            
            <div className="job-listings">
              {[
                { title: 'Full stack Developer (Reactjs+Nodejs)', exp: '2+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' },
                { title: 'Reactjs Developer', exp: '3+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' },
                { title: 'React Native Developer', exp: '3+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' },
                { title: 'Flutter Developer', exp: '5+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' },
                { title: '.NET Tech Arch', exp: '8+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' },
                { title: 'Project Managers', exp: '3+ years', location: 'Chennai, India', type: 'Full time', level: 'experienced' }
              ].map((job, idx) => (
                <div key={idx} className="job-card d-flex justify-content-between align-items-center mb-3 p-4 bg-white shadow-sm rounded">
                  <div className="job-info">
                    <h4 className="mb-2">{job.title} <span className="text-primary fs-6 fw-normal ms-2">{job.exp}</span></h4>
                    <div className="text-muted small">
                      <span className="me-3">📍 {job.location}</span>
                      <span className="me-3">⏱️ {job.type}</span>
                      <span>🎓 {job.level}</span>
                    </div>
                  </div>
                  <div className="job-action">
                    <Link to="/careers/apply-now" className="btn btn-outline-primary px-4 py-2 rounded-pill">Apply</Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <p className="mb-0">Reach out to us on <strong>sales@doodleblue.com</strong></p>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="careers-social">
          <div className="careers-social-grid">
            <a href="https://www.instagram.com/doodleblue/" target="_blank" rel="noreferrer" className="careers-social-block careers-insta">
              <span className="careers-social-icon">📸</span>
              <div>Follow us on<br /><strong>Instagram</strong></div>
            </a>
            <a href="https://www.facebook.com/doodleblue.Innovations/" target="_blank" rel="noreferrer" className="careers-social-block careers-fb">
              <span className="careers-social-icon">👍</span>
              <div>Like us on<br /><strong>Facebook</strong></div>
            </a>
            <a href="https://twitter.com/doodleblue7" target="_blank" rel="noreferrer" className="careers-social-block careers-twitter">
              <span className="careers-social-icon">🐦</span>
              <div>Follow us on<br /><strong>Twitter</strong></div>
            </a>
            <a href="https://www.linkedin.com/company/doodleblue/" target="_blank" rel="noreferrer" className="careers-social-block careers-linkedin">
              <span className="careers-social-icon">💼</span>
              <div>Connect us on<br /><strong>LinkedIn</strong></div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
