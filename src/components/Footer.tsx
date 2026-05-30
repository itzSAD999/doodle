import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-contact-banner" style={{ marginBottom: '60px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '8px' }}>Reach out to us on</p>
          <a href="mailto:sales@doodleblue.com" style={{ color: '#fff', fontSize: '32px', fontWeight: 800, textDecoration: 'none' }}>sales@doodleblue.com</a>
        </div>

        <div className="footer-sitemap">
          <div className="footer-column">
            <h4>Industries</h4>
            <ul>
              <li><a href="/industries">Education</a></li>
              <li><a href="/industries">Fashion</a></li>
              <li><a href="/industries">Financial services</a></li>
              <li><a href="/industries">Healthcare</a></li>
              <li><a href="/industries">Hospitality and Leisure</a></li>
              <li><a href="/industries">Retail</a></li>
              <li><a href="/industries">Telecommunication</a></li>
              <li><a href="/industries">Transport and Logistics</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">Digital Transformation</a></li>
              <li><a href="/services">UI/UX & Design Thinking</a></li>
              <li><a href="/services">Mobile Engineering</a></li>
              <li><a href="/services">Web Technology Development</a></li>
              <li><a href="/services">Innovation</a></li>
              <li><a href="/services">Enterprise Application Development</a></li>
              <li><a href="/services">Performance Engineering</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="/about">Leadership</a></li>
              <li><a href="/about">Press</a></li>
              <li><a href="/about">Contact Us</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/csr">CSR Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Careers</h4>
            <ul>
              <li><a href="/careers">View Openings</a></li>
              <li><a href="/careers">Internship</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-info" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="footer-brand-desc">
            <h2 className="footer-logo">doodleblue</h2>
            <p>We are a digital strategy consulting boutique that leads digital transformations for global brands, leading consultancies, famous startups, fortune 500s and governments.</p>
          </div>
          
          <div className="footer-socials" style={{ display: 'flex', gap: '16px', color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '14px' }}>
            <a href="#">insta</a>
            <a href="#">linkedin</a>
            <a href="#">twitter</a>
            <a href="#">facebook</a>
          </div>

          <div className="footer-copyright">
            <p>© 2026 doodleblue Innovations Pvt. Ltd. | All rights reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
