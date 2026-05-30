import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '56px', marginBottom: '32px' }}>About doodleblue</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '40px' }}>
          We are a digital strategy consulting boutique that leads digital transformations for global brands, 
          leading consultancies, famous startups, fortune 500s and governments.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px' }}>
          <button className="btn btn-primary">Meet Leadership</button>
          <button className="btn btn-outline-white">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
