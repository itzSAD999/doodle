import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Navigation } from 'lucide-react';
import './ContactUs.css';

const locations = [
  {
    city: 'Chennai',
    country: 'India',
    company: 'doodleblue | Centre of Excellence',
    address: '2nd Floor, 6/1, Pycrofts Garden Rd, Chennai, Tamil Nadu - 600006',
    mapLink: 'https://www.google.co.in/maps/place/doodleblue',
  },
  {
    city: 'Mumbai',
    country: 'India',
    company: '',
    address: 'Mumbai India, 7th Floor, Mittal Tower C, Nariman Point, Mumbai - 400021',
    mapLink: 'https://maps.app.goo.gl/nvhU9qY31DNU5Mrp6',
  },
  {
    city: 'Bangalore',
    country: 'India',
    company: '',
    address: 'SYNERGE II WorkSpace, 16th Main Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041',
    mapLink: 'https://goo.gl/maps/SVXQSmnFoCD2',
  },
  {
    city: 'Boulder',
    country: 'USA',
    company: '',
    address: '3024 Washington Street Boulder CO 80304, USA.',
    mapLink: 'https://www.google.co.in/maps/place/3024+Washington+St,+Boulder,+CO+80304',
  },
  {
    city: 'New York',
    country: 'USA',
    company: '',
    address: '104-40 Queens Boulevard Suite, 11B Forest Hills – 11375, New York, USA.',
    mapLink: 'https://www.google.co.in/maps/place/doodleblue',
  },
];

const ContactUs: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | doodleblue";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contactus-page">
      {/* Hero Section */}
      <div className="sticky-hero-wrapper">
        <section className="contactus-hero">
          <div className="contactus-hero-content">
            <h1 className="contactus-hero-title">
              Let's build the <span className="contact-gradient-text">Future.</span>
            </h1>
            <h3 className="contactus-hero-subtitle">
              We are ready for our next challenge. Reach out to our global teams and let's create something extraordinary.
            </h3>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        
        {/* Split Form Section */}
        <section className="contact-split-section">
          <div className="contactus-container">
            <div className="contact-split-grid">
              
              {/* Left Info Side */}
              <div className="contact-info-side">
                <h3>Get in touch</h3>
                <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
                
                <div className="contact-info-list">
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div className="info-text">
                      <h5>Chat to sales</h5>
                      <a href="mailto:sales@doodleblue.com">sales@doodleblue.com</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div className="info-text">
                      <h5>Join our team</h5>
                      <a href="mailto:careers@doodleblue.com">careers@doodleblue.com</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Phone size={24} /></div>
                    <div className="info-text">
                      <h5>Call us</h5>
                      <span>+91 99622 41103</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Side */}
              <div className="contact-form-side">
                <form className="contactus-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="contactus-form-row">
                    <div className="contactus-field">
                      <input type="text" id="fname" required />
                      <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="contactus-field">
                      <input type="text" id="lname" required />
                      <label htmlFor="lname">Last Name</label>
                    </div>
                  </div>

                  <div className="contactus-form-row">
                    <div className="contactus-field">
                      <input type="email" id="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="contactus-field">
                      <input type="tel" id="phone" required />
                      <label htmlFor="phone">Phone</label>
                    </div>
                  </div>

                  <div className="contactus-field">
                    <input type="text" id="company" required />
                    <label htmlFor="company">Company</label>
                  </div>

                  <div className="contactus-field">
                    <select id="service" required defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="Gen AI">Gen AI</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="UI UX & Design Thinking">UI/UX & Design Thinking</option>
                      <option value="Mobile Engineering">Mobile Engineering</option>
                      <option value="Web Development">Web Technology</option>
                      <option value="Innovation">Innovation</option>
                      <option value="Enterprise Application">Enterprise Applications</option>
                    </select>
                    <label htmlFor="service">How can we help?</label>
                  </div>

                  <div className="contactus-field">
                    <textarea id="message" required></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>

                  <button type="submit" className="contactus-submit-btn">
                    Send Message <ArrowRight size={20} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Global Locations Section */}
        <section className="contactus-locations">
          <div className="contactus-container">
            <h2 className="contactus-section-label">Global Presence</h2>
            <div className="contactus-loc-grid">
              {locations.map((loc, index) => (
                <div key={index} className="contactus-loc-card">
                  <div className="contactus-loc-icon-wrap">
                    <MapPin size={28} />
                  </div>
                  <h4 className="contactus-loc-city">{loc.city}</h4>
                  <span className="contactus-loc-country">{loc.country}</span>
                  <div className="contactus-loc-details">
                    {loc.company && <p className="contactus-loc-company">{loc.company}</p>}
                    <p className="contactus-loc-address">{loc.address}</p>
                    <br/>
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="contactus-map-link">
                      View on Map <Navigation size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUs;
