import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustedLeaders from '../components/TrustedLeaders';
import Services from '../components/Services';
import Industries from '../components/Industries';
import ValueProp from '../components/ValueProp';
import './Home.css';

interface DividerProps {
  label: string;
  sublabel?: string;
  to: string;
}

const SectionDivider: React.FC<DividerProps> = ({ label, sublabel, to }) => (
  <Link to={to} className="section-divider">
    <div className="section-divider-inner">
      <span className="section-divider-next">Next</span>
      <div className="section-divider-rule" />
      <span className="section-divider-label">{label}</span>
      {sublabel && <span className="section-divider-sub">{sublabel}</span>}
      <span className="section-divider-arrow">→</span>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="sticky-hero-wrapper">
        <Hero />
      </div>

      <div className="overlay-content-wrapper">
        <SectionDivider label="Trusted Leaders" to="/about" />
        <TrustedLeaders />

        <SectionDivider label="Solutions by outcome" sublabel="AI · Digital · Engineering" to="/services" />
        <Services />

        <SectionDivider label="Core sectors we serve at scale" to="/industries" />
        <Industries />

        <SectionDivider label="Success Stories" sublabel="& References" to="/success-stories" />
        <ValueProp />
      </div>
    </div>
  );
};

export default Home;
