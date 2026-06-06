import React from 'react';
import './ContactUs.css';

const locations = [
  {
    city: 'Chennai',
    country: 'India',
    icon: '/images/contact/chennai.svg',
    company: 'doodleblue | Centre of Excellence',
    address: '2nd Floor, 6/1, Pycrofts Garden Rd, Chennai, Tamil Nadu - 600006',
    mapLink: 'https://www.google.co.in/maps/place/doodleblue',
  },
  {
    city: 'Mumbai',
    country: 'India',
    icon: '/images/contact/mumbai.png',
    company: '',
    address: 'Mumbai India, 7th Floor, Mittal Tower C, Nariman Point, Mumbai - 400021',
    mapLink: 'https://maps.app.goo.gl/nvhU9qY31DNU5Mrp6',
  },
  {
    city: 'Bangalore',
    country: 'India',
    icon: '/images/contact/bangalore.svg',
    company: '',
    address: 'SYNERGE II WorkSpace, 16th Main Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041',
    mapLink: 'https://goo.gl/maps/SVXQSmnFoCD2',
  },
  {
    city: 'Boulder',
    country: 'USA',
    icon: '/images/contact/Boulder.svg',
    company: '',
    address: '3024 Washington Street Boulder CO 80304, USA.',
    mapLink: 'https://www.google.co.in/maps/place/3024+Washington+St,+Boulder,+CO+80304',
  },
  {
    city: 'New York',
    country: 'USA',
    icon: '/images/contact/USA.svg',
    company: '',
    address: '104-40 Queens Boulevard Suite, 11B Forest Hills – 11375, New York, USA.',
    mapLink: 'https://www.google.co.in/maps/place/doodleblue',
  },
];

const ContactUs: React.FC = () => {
  return (
    <div className="contactus-page">
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <section className="contactus-hero">
          <div className="contactus-hero-content">
            <h1 className="contactus-hero-title">
              <span className="fw-light">Let's get </span>
              <span className="text-primary text-uppercase fw-bold">talking</span>
            </h1>
            <h3 className="contactus-hero-subtitle">
              We are ready for our next challenge. Reach out to us.
            </h3>
          </div>
        </section>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content-wrapper">
        {/* Locations Section */}
        <section className="contactus-locations">
          <div className="contactus-container">
            <h2 className="contactus-section-label">◆ Our Offices</h2>
            <div className="contactus-loc-grid">
              {locations.map((loc, index) => (
                <div key={index} className="contactus-loc-card">
                  <div className="contactus-loc-icon-wrap">
                    <img src={loc.icon} alt={loc.city} className="contactus-loc-icon" />
                  </div>
                  <h4 className="contactus-loc-city">{loc.city}</h4>
                  <span className="contactus-loc-country">{loc.country}</span>
                  <div className="contactus-loc-details">
                    {loc.company && <p className="contactus-loc-company">{loc.company}</p>}
                    <p className="contactus-loc-address">{loc.address}</p>
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="contactus-map-link">
                      View on map →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contactus-form-section">
          <div className="contactus-container">
            <h2 className="contactus-form-title">Have a question? We're happy to help</h2>
            <div className="contactus-form-card">
              <form className="contactus-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contactus-form-row">
                  <div className="contactus-field">
                    <label>First Name <span className="contactus-req">*</span></label>
                    <input type="text" required />
                  </div>
                  <div className="contactus-field">
                    <label>Last Name <span className="contactus-req">*</span></label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="contactus-form-row">
                  <div className="contactus-field">
                    <label>Email <span className="contactus-req">*</span></label>
                    <input type="email" required />
                  </div>
                  <div className="contactus-field">
                    <label>Phone <span className="contactus-req">*</span></label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="contactus-field">
                  <label>Company <span className="contactus-req">*</span></label>
                  <input type="text" required />
                </div>

                <div className="contactus-field">
                  <label>Choose where we can help you <span className="contactus-req">*</span></label>
                  <select required defaultValue="">
                    <option value="" disabled>-None-</option>
                    <option value="Gen AI">Gen AI</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="UI UX & Design Thinking">UI UX & Design Thinking</option>
                    <option value="Mobile Engineering">Mobile Engineering</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Enterprise Application">Enterprise Application</option>
                    <option value="Devops Consulting">Devops Consulting</option>
                  </select>
                </div>

                <div className="contactus-field">
                  <label>Message <span className="contactus-req">*</span></label>
                  <textarea rows={4} required></textarea>
                </div>

                <button type="submit" className="contactus-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
