import React from 'react';
import './ValueProp.css';

const ValueProp: React.FC = () => {
  const testimonials = [
    { client: 'Mobily', sector: 'Telecom', quote: 'We appreciate doodleblue’s all-time availability and cooperation. They are extremely responsive and provide excellent client servicing', author: 'Mohammed A.Aljallal, Director Digital Channels' },
    { client: 'BijliPay', sector: 'Finance', quote: 'doodleblue’s cooperation and empathetic nature has helped us build the product of our dreams with ease.', author: 'Eniyan Narayanaswamy, Chief Product Officer' },
    { client: 'Validus', sector: 'Finance', quote: 'We were amazed by doodleblue’s “let’s try another approach” attitude, which has helped us with every hurdle of our complex project.', author: 'Sauvik D, Founding Team' },
    { client: 'SARVA', sector: 'Healthcare', quote: 'We were actively looking for a CTO to hire into the system and figure out our entire digital transformation...', author: 'Sarvesh Sashi, Founder and CEO' },
    { client: 'KluoApp', sector: 'Education', quote: 'We were looking for a company to see our vision, understand our target market and deliver on time...', author: 'Tyler Sellars, CEO' },
    { client: 'StarHealth', sector: 'BFSI', quote: 'We developed a great partnership with doodleblue. Their dedication to work is evident in every aspect of the app...', author: 'Senthil S, CIO' },
    { client: 'Hospitality Client', sector: 'Hospitality', quote: 'It was a pleasure to work with doodleblue on a critical project transforming our UX...', author: 'Somdev Devvarman, International Tennis Champion' },
    { client: 'eShakti', sector: 'Fashion', quote: 'Simply put dedication to work, client-centric engagement, high-quality delivery...', author: 'Varun L, Product Manager' },
    { client: 'CrayonData', sector: 'Finance', quote: 'We have been quite impressed with the skill level and flexibility they offered us...', author: 'Priyanshu Mishra' },
    { client: 'Beezer Golf LLC', sector: 'Sports', quote: 'The doodleblue team helped us build the best golf game app in the market...', author: 'Antonio Casacuberta, Founder' },
    { client: 'Flyy', sector: 'Transport', quote: 'doodleblue\'s technical strength is their biggest plus point. Our experience with them has been very positive...', author: 'Yasar Arafath, Head of software division' }
  ];

  const partners = ['IBM', 'Snowflake', 'Google Cloud', 'AWS'];

  return (
    <section className="mosaic-section">
      
      {/* Testimonials Mosaic Row */}
      <div className="mosaic-grid testimonials-mosaic" style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
        <div className="mosaic-card solid-blue-left" style={{ padding: '60px 80px', flex: 1, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="section-header text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="mosaic-hero-title">Success Stories & References</h2>
            <p className="mosaic-desc text-white text-center">How doodleblue’s AI-powered strategies helped customers realise their ambitions</p>
          </div>
        </div>
        
        <div className="testimonials-slider-container" style={{ background: '#0d3b75', padding: '0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="testimonials-slider">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card mosaic-card" key={idx} style={{ background: 'var(--bg-dark)', padding: '40px', minWidth: '400px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="quote-mark" style={{ color: 'var(--primary-color)' }}>"</div>
                <p className="mosaic-desc text-white mb-4">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong style={{ color: '#fff' }}>{t.author}</strong>
                    <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', marginTop: '4px' }}>{t.client} | {t.sector}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA 50/50 Mosaic Row */}
      <div className="mosaic-grid cta-mosaic" style={{ display: 'flex', width: '100vw' }}>
        <div className="mosaic-card solid-light-blue" style={{ flex: 1, padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h3 className="mosaic-title">What can we help you achieve?</h3>
          <button className="btn btn-white mt-4">
            Let's Get to work <span className="arrow">→</span>
          </button>
        </div>
        <div className="mosaic-card solid-dark-purple" style={{ flex: 1, padding: '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h3 className="mosaic-title">Where will your career take you?</h3>
          <button className="btn btn-outline-white mt-4" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
            Come Find Out <span className="arrow">→</span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default ValueProp;
