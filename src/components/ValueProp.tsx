import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './ValueProp.css';

const clients = [
  { name: 'Mobily',       abbr: 'موبايلي\nmobily', bg: '#1a9bd7', color: '#fff',    font: 700, href: 'https://www.mobily.com.sa' },
  { name: 'BijliPay',    abbr: 'B bijlipay',       bg: '#5c2d91', color: '#fff',    font: 700, href: 'https://www.bijlipay.co.in' },
  { name: 'SARVA',       abbr: 'S·A·R·V·A',        bg: '#444c55', color: '#fff',    font: 600, href: 'https://www.sarva.com' },
  { name: 'Validus',     abbr: '✳ VALIDUS',         bg: '#c0392b', color: '#fff',    font: 700, href: 'https://www.validus.sg' },
  { name: 'eShakti',     abbr: 'eShakti®',          bg: '#111111', color: '#fff',    font: 600, href: 'https://www.eshakti.com' },
  { name: 'Beezer Golf', abbr: 'BEEZER\nGOLF',      bg: '#27ae60', color: '#1a1a1a', font: 900, href: 'https://www.beezergolf.com' },
  { name: 'StarHealth',  abbr: '★ STAR\nInsurance',  bg: '#2980b9', color: '#fff',    font: 700, href: 'https://www.starhealth.in' },
  { name: 'Roundups',    abbr: '⊕ Roundups',         bg: '#1a1a1a', color: '#fff',    font: 600, href: 'https://roundups.com' },
];

const ValueProp: FC = () => {
  return (
    <section className="vp-section">

      {/* ── SUCCESS STORIES ROW ── */}
      <div className="vp-stories-row">

        {/* Left blue panel */}
        <div className="vp-left-panel">
          <h2 className="vp-left-title">Success Stories &amp; References</h2>
          <p className="vp-left-desc">
            How doodleblue's AI-powered strategies helped customers realise their ambitions
          </p>
          <Link to="/success-stories" className="vp-read-btn">
            Read Story <span className="vp-arrow">→</span>
          </Link>
        </div>

        {/* Right logo grid */}
        <div className="vp-logo-grid">
          {clients.map((c, i) => (
            <a
              key={i}
              className="vp-logo-card"
              style={{ background: c.bg }}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${c.name}`}
            >
              <span
                className="vp-logo-text"
                style={{ color: c.color, fontWeight: c.font }}
              >
                {c.abbr}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── CTA ROW ── */}
      <div className="vp-cta-row">
        <div className="vp-cta-card vp-cta-blue">
          <h3 className="mosaic-title">What can we help you achieve?</h3>
          <button className="btn btn-white mt-4">
            Let's Get to Work <span className="arrow">→</span>
          </button>
        </div>
        <div className="vp-cta-card vp-cta-purple">
          <h3 className="mosaic-title">Where will your career take you?</h3>
          <button className="btn btn-outline-white mt-4">
            Come Find Out <span className="arrow">→</span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default ValueProp;
