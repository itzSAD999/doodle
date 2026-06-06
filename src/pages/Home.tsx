import React from 'react';
import Hero from '../components/Hero';
import TrustedLeaders from '../components/TrustedLeaders';
import Services from '../components/Services';
import Industries from '../components/Industries';
import ValueProp from '../components/ValueProp';

const Home: React.FC = () => {
  return (
    <div className="home mosaic-section">
      <Hero />
      <TrustedLeaders />
      <Services />
      <Industries />
      <ValueProp />
    </div>
  );
};

export default Home;
