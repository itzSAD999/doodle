import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
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
              <li><Link to="/industries">Education</Link></li>
              <li><Link to="/industries">Fashion</Link></li>
              <li><Link to="/industries">Financial services</Link></li>
              <li><Link to="/industries">Healthcare</Link></li>
              <li><Link to="/industries">Hospitality and Leisure</Link></li>
              <li><Link to="/industries">Retail</Link></li>
              <li><Link to="/industries">Telecommunication</Link></li>
              <li><Link to="/industries">Transport and Logistics</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/digital-transformation">Digital Transformation</Link></li>
              <li><Link to="/services/ui-ux-design">UI/UX & Design Thinking</Link></li>
              <li><Link to="/services/mobile-engineering">Mobile Engineering</Link></li>
              <li><Link to="/services/web-technology">Web Technology Development</Link></li>
              <li><Link to="/services/innovation-technology">Innovation</Link></li>
              <li><Link to="/services/enterprise-app">Enterprise Application Development</Link></li>
              <li><Link to="/services/performance-engineering">Performance Engineering</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Leadership</Link></li>
              <li><Link to="/about">Press</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/csr-policy">CSR Policy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Careers</h4>
            <ul>
              <li><Link to="/careers/openings">View Openings</Link></li>
              <li><Link to="/careers/interns">Internship</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-info" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="footer-brand-desc">
            <h2 className="footer-logo">doodleblue</h2>
            <p>We are a digital strategy consulting boutique that leads digital transformations for global brands, leading consultancies, famous startups, fortune 500s and governments.</p>
          </div>
          
          <div className="footer-socials" style={{ display: 'flex', gap: '16px', color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '14px' }}>
            <a href="https://www.instagram.com/doodleblue/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/company/doodleblue/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://twitter.com/doodleblue7" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            <a href="https://www.facebook.com/doodleblue.Innovations/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
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
