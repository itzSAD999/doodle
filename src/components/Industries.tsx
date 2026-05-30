import React from 'react';
import './Industries.css';

const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Manufacturing',
      subtitle: 'Reinventing Production: The Smart Factory Revolution',
      desc: 'AI-powered factories are rewriting the rules of efficiency and resilience. Discover how industry leaders unlock real-time production insights and predictive operations to outpace disruption and deliver at scale.',
      cta: 'Explore How',
      imgSrc: '/industry_manufacturing_1780155400615.png',
      logos: ['Aljazeera', 'ATS']
    },
    {
      title: 'Retail',
      subtitle: 'Retail Unleashed: Creating Tomorrow’s Experiences Today',
      desc: 'With AI-driven personalisation and intelligent merchandising, modern retailers are building dynamic customer journeys that adapt on the fly—delighting shoppers and maximising profitability in a fast-evolving market.',
      cta: 'See How',
      imgSrc: '/industry_retail_1780154522985.png',
      logos: ['Bank of America', 'Boston Private']
    },
    {
      title: 'Supply Chain',
      subtitle: 'Future-Proofing: Supply Chains with AI Connectivity',
      desc: 'From visibility to adaptability, AI-enabled supply chains break silos and empower teams with actionable intelligence. Anticipate demand, reduce waste, and build resilience, even in volatile markets.',
      cta: 'Learn How',
      imgSrc: '/industry_supplychain_1780155415804.png',
      logos: ['AsianPaints', 'Ashok Leyland', 'Cipla', 'Colgate']
    },
    {
      title: 'Logistics',
      subtitle: 'The Autonomous Edge: Smart Logistics for a Rapid World',
      desc: 'AI is revolutionising logistics, from automated routing to last-mile excellence. Innovators are slashing delivery times and cost with scalable intelligence that adapts to real-world constraints—every hour, everywhere.',
      cta: 'Discover How',
      imgSrc: '/industry_logistics_1780155434420.png',
      logos: ['Caratlane', 'Yatra', 'Asics', 'Thangamayil']
    }
  ];

  return (
    <section className="mosaic-section">
      <div className="mosaic-grid industries-mosaic" style={{ width: '100vw', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, minmax(400px, 50vh))' }}>

        {/* 2x2 Industries Mosaic */}
        {industries.map((ind, idx) => (
          <div className="mosaic-card industry-mosaic-card" key={idx} style={{ borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="mosaic-bg" style={{ backgroundImage: `url(${ind.imgSrc})` }}></div>
            <div className="mosaic-overlay dark"></div>
            
            <div className="mosaic-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="industry-logos mb-auto" style={{ display: 'flex', gap: '16px', marginBottom: 'auto' }}>
                {ind.logos.map((logo, lIdx) => (
                  <span key={lIdx} className="industry-logo-placeholder" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{logo}</span>
                ))}
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <p className="mosaic-label text-light-blue" style={{ marginBottom: '8px' }}>Industry Focus</p>
                <h3 className="mosaic-title" style={{ fontSize: '32px' }}>{ind.title}</h3>
                <p className="mosaic-desc text-white" style={{ marginBottom: '16px' }}><strong>{ind.subtitle.split(':')[0]}:</strong>{ind.subtitle.split(':')[1]}</p>
                <p className="mosaic-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '24px' }}>{ind.desc}</p>
                <button className="btn-link" style={{ color: '#fff', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', padding: 0, background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  {ind.cta} <span className="diamond-arrow-right" style={{ color: 'var(--primary-color)' }}>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
