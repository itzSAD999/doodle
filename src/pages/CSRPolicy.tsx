import React from 'react';
import './CSRPolicy.css';

const CSRPolicy: React.FC = () => {
  return (
    <div className="csr-page">
      <div className="sticky-hero-wrapper">
        <section className="csr-hero">
          <div className="csr-hero-content">
            <h1 className="csr-hero-title">CSR Policy</h1>
            <p className="csr-hero-subtitle">
              Our commitment to corporate social responsibility and sustainable growth.
            </p>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        <section className="csr-content">
          <div className="csr-container">
            <div className="csr-text-block">
              <h2>Corporate Social Responsibility</h2>
              <p>
                At doodleblue, we believe that our responsibility extends beyond business. That's why
                we've established a Corporate Social Responsibility (CSR) policy to ensure that we
                make a positive impact on society and the environment. We are committed to operating
                in an economically, socially, and environmentally sustainable manner, while
                balancing the interests of our stakeholders.
              </p>

              <h2>Our Core CSR Principles</h2>
              <ul>
                <li>
                  <strong>Environmental Sustainability:</strong> We strive to minimize our
                  environmental footprint by reducing waste, conserving energy, and promoting
                  eco-friendly practices within our organization and communities.
                </li>
                <li>
                  <strong>Community Engagement:</strong> We actively participate in community
                  development initiatives, supporting education, healthcare, and social welfare
                  programs to uplift the underprivileged and marginalized sections of society.
                </li>
                <li>
                  <strong>Ethical Business Practices:</strong> We conduct our business with
                  integrity, transparency, and fairness, ensuring compliance with all applicable
                  laws and regulations.
                </li>
                <li>
                  <strong>Employee Well-being:</strong> We foster a diverse, inclusive, and safe
                  work environment, prioritizing the health, safety, and professional development of
                  our employees.
                </li>
              </ul>

              <h2>CSR Initiatives</h2>
              <p>
                Our CSR initiatives are focused on areas where we can make a meaningful difference.
                We collaborate with NGOs, government agencies, and other stakeholders to implement
                programs that address pressing social and environmental issues. Some of our key
                initiatives include:
              </p>
              <ul>
                <li>Supporting education for underprivileged children.</li>
                <li>Promoting digital literacy and skill development.</li>
                <li>Organizing health camps and awareness drives.</li>
                <li>Participating in environmental conservation projects.</li>
              </ul>

              <h2>Governance and Implementation</h2>
              <p>
                Our CSR committee, comprising senior management representatives, is responsible for
                formulating, implementing, and monitoring our CSR policy. The committee ensures that
                our CSR activities align with our core principles and deliver measurable impact. We
                regularly review and update our CSR policy to adapt to evolving societal needs and
                expectations.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions regarding our CSR policy or initiatives,
                please feel free to contact us. We welcome feedback and collaboration opportunities
                to further our commitment to corporate social responsibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CSRPolicy;
