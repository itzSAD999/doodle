import React, { useState } from 'react';
import './ApplyNow.css';

const ApplyNow: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (Mock)");
  };

  return (
    <div className="applynow-page">
      <div className="sticky-hero-wrapper">
        <section className="applynow-hero">
          <div className="container position-relative z-1 h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="applynow-title">
                  <span className="fw-light">Join the </span>
                  <span className="text-primary fw-bold text-lowercase">doodleblue</span>
                  <span className="fw-light"> Team</span>
                </h1>
                <p className="applynow-subtitle mt-4 mx-auto">
                  We are always looking for smart, curious and creative people who are excited to help build a platform that empowers the future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper bg-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="apply-form-card">
                <div className="apply-form-header">
                  <h3>Submit Your Application</h3>
                  <p>Tell us a bit about yourself and we'll get in touch.</p>
                </div>
                
                <form className="apply-form" onSubmit={handleSubmit}>
                  {/* Name Row */}
                  <div className="row mb-4">
                    <div className="col-md-6 form-group-modern">
                      <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        required 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={formData.firstName ? 'has-val' : ''}
                      />
                      <label htmlFor="firstName">First Name *</label>
                      <span className="focus-border"></span>
                    </div>
                    <div className="col-md-6 form-group-modern mt-4 mt-md-0">
                      <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        className={formData.lastName ? 'has-val' : ''}
                      />
                      <label htmlFor="lastName">Last Name *</label>
                      <span className="focus-border"></span>
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="row mb-4">
                    <div className="col-md-6 form-group-modern">
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className={formData.email ? 'has-val' : ''}
                      />
                      <label htmlFor="email">Email Address *</label>
                      <span className="focus-border"></span>
                    </div>
                    <div className="col-md-6 form-group-modern mt-4 mt-md-0">
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className={formData.phone ? 'has-val' : ''}
                      />
                      <label htmlFor="phone">Phone Number *</label>
                      <span className="focus-border"></span>
                    </div>
                  </div>

                  {/* Position */}
                  <div className="row mb-4">
                    <div className="col-12 form-group-modern select-group">
                      <select 
                        name="position" 
                        id="position" 
                        required 
                        value={formData.position}
                        onChange={handleChange}
                        className={formData.position ? 'has-val' : ''}
                      >
                        <option value="" disabled></option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Business Analyst">Business Analyst</option>
                        <option value="AI / ML Engineer">AI / ML Engineer</option>
                      </select>
                      <label htmlFor="position">Position Applying For *</label>
                      <span className="focus-border"></span>
                      <span className="dropdown-arrow">▼</span>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <div className="file-upload-wrapper">
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" className="file-input" required />
                        <div className="file-upload-box">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a62bb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                          </svg>
                          <p className="mt-3 mb-1 fw-bold text-dark">Upload your Resume *</p>
                          <p className="text-muted small mb-0">PDF, DOC, DOCX up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="row mb-4">
                    <div className="col-md-6 form-group-modern">
                      <input 
                        type="url" 
                        name="linkedin" 
                        id="linkedin" 
                        value={formData.linkedin}
                        onChange={handleChange}
                        className={formData.linkedin ? 'has-val' : ''}
                      />
                      <label htmlFor="linkedin">LinkedIn URL (Optional)</label>
                      <span className="focus-border"></span>
                    </div>
                    <div className="col-md-6 form-group-modern mt-4 mt-md-0">
                      <input 
                        type="url" 
                        name="portfolio" 
                        id="portfolio" 
                        value={formData.portfolio}
                        onChange={handleChange}
                        className={formData.portfolio ? 'has-val' : ''}
                      />
                      <label htmlFor="portfolio">Portfolio URL (Optional)</label>
                      <span className="focus-border"></span>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="row mb-5">
                    <div className="col-12 form-group-modern">
                      <textarea 
                        name="coverLetter" 
                        id="coverLetter" 
                        rows={4}
                        value={formData.coverLetter}
                        onChange={handleChange}
                        className={formData.coverLetter ? 'has-val' : ''}
                      ></textarea>
                      <label htmlFor="coverLetter">Why doodleblue? (Optional)</label>
                      <span className="focus-border"></span>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn-diamond btn-primary border-0 w-100 justify-content-center" style={{padding: '18px', borderRadius: '8px'}}>
                      Submit Application <span className="diamond-icon">─◇</span>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
