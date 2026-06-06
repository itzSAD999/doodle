import React from 'react';
import { Link } from 'react-router-dom';
import './GenAIPage.css';

const algorithms = [
  {
    id: 1,
    side: 'left',
    image: '/gen/genaione.png',
    title: 'Revolutionising Drug Discovery',
    algorithm: 'Generative Adversarial Networks (GANs)',
    impact: 'Accelerated Development of Life-Saving Drugs',
    description:
      'In the healthcare industry, Generative Adversarial Networks (GANs) are transforming drug discovery. By generating novel molecular structures, GANs enable researchers to explore a vast chemical space at unprecedented speed. This not only accelerates the identification of promising drug candidates but also reduces the cost and time associated with traditional drug development. The result? Faster delivery of life-saving medications to patients in need.',
  },
  {
    id: 2,
    side: 'right',
    image: '/gen/genaitwo.png',
    title: 'Personalized Shopping Experiences',
    algorithm: 'Transformer Models (e.g., GPT)',
    impact: 'Enhanced Customer Engagement and Satisfaction',
    description:
      'In retail and e-commerce, Transformer models like GPT are revolutionising how businesses engage with customers. These models generate personalised product descriptions, recommendations, and marketing content tailored to individual preferences. By delivering highly relevant and personalised shopping experiences, businesses see increased customer satisfaction and higher conversion rates, leading to stronger brand loyalty and improved sales performance.',
  },
  {
    id: 3,
    side: 'left',
    image: '/gen/genaithree.png',
    title: 'Virtual Try-On Technology',
    algorithm: 'Generative Adversarial Networks (GANs)',
    impact: 'Reduced Returns and Improved Customer Confidence',
    description:
      'Generative Adversarial Networks (GANs) are at the heart of virtual try-on solutions in the fashion industry. These models create lifelike images that allow customers to visualise how clothing, accessories, or makeup will look on them before making a purchase. This technology reduces uncertainty, enhances the online shopping experience, and significantly lowers return rates, saving costs and boosting customer confidence.',
  },
  {
    id: 4,
    side: 'right',
    image: '/gen/genaifour.png',
    title: 'Creative Product Design',
    algorithm: 'Variational Autoencoders (VAEs)',
    impact: 'Faster Innovation with Diverse Design Options',
    description:
      'In manufacturing and engineering, Variational Autoencoders (VAEs) are unleashing creativity in product design. These models generate multiple design iterations, allowing companies to rapidly prototype and explore a wide array of design possibilities. This approach not only speeds up the innovation process but also ensures that the final product is both functional and aesthetically appealing, leading to better market fit and increased customer satisfaction.',
  },
  {
    id: 5,
    side: 'left',
    image: '/gen/genaifive.png',
    title: 'Fraud Detection in Finance',
    algorithm: 'Generative Adversarial Networks (GANs)',
    impact: 'Enhanced Security and Reduced Financial Losses',
    description:
      'In the finance industry, GANs play a crucial role in enhancing fraud detection systems. By generating synthetic fraud scenarios, these models train machine learning systems to better detect and prevent fraudulent activities. The result is a more secure financial environment, where institutions can protect their assets and customers more effectively, reducing financial losses and enhancing trust.',
  },
];

const GenAIPage: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;

  return (
    <div className="genai-page">
      <div className="sticky-hero-wrapper">
        {/* ── SECTION 1: HERO BANNER ── */}
        <section className="genai-banner-wrapper">
          <div className="genai-banner-overlay">
            <img src="/gen/gen_banner.svg" alt="Gen AI Banner" className="genai-banner-svg" />
          </div>
          <div className="genai-banner-content">
            <div className="genai-banner-text" style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <span className="genai-dot" />
              <h1 className="genai-main-title">
                <span>Our GEN AI </span><span>Expertise</span>
                <br />
                <span>Your Value </span><span>Realised.</span>
              </h1>
              <p className="genai-subtitle">Innovate, Create, Elevate</p>
              <div className="genai-consult-btn">
                <a href="mailto:sales@doodleblue.com">
                  Consult Now{' '}
                  <img
                    src="/gen/btn_arrow.svg"
                    alt="arrow"
                    className="genai-btn-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="overlay-content-wrapper">
        {/* ── SECTION 2: BRANDS WE'VE WORKED WITH ── */}
        <section
          className="genai-brands-wrapper"
          style={{ backgroundImage: 'url(/gen/brand_banner.svg)' }}
        >
          <div className="genai-container">
            <div className="genai-brands-title-img">
              <img src="/gen/brand_text.svg" alt="Brands" />
            </div>
            <h2 className="genai-brands-heading">BRANDS WE'VE WORKED WITH</h2>
            <p className="genai-brands-desc">
              Our Gen AI COEx (Centre Of Excellence) stands at the forefront of innovation,
              serving a diverse clientele ranging from global brands and top consultancies to
              startups, Fortune 500 companies, and government bodies. Our expertise lies in
              harnessing the power of advanced technologies such as generative artificial
              intelligence, machine learning, and data analytics to drive digital transformation.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: ALGORITHMS ── */}
        <div className="genai-algorithms-main">
          {/* Decorative floating images */}
          <img className="genai-dbl1" src="/gen/DBL1.png" alt="" aria-hidden="true" />
          <img className="genai-dbl2" src="/gen/DBL2.png" alt="" aria-hidden="true" />
          <img className="genai-dbl3" src="/gen/DBL3.png" alt="" aria-hidden="true" />
          <img className="genai-dbl4" src="/gen/DBL4.png" alt="" aria-hidden="true" />

          {/* Heading area */}
          <div className="genai-algo-head-container">
            <img className="genai-shadow-algo" src="/gen/shadowalgorithm.png" alt="" aria-hidden="true" />
            <h2 className="genai-algo-heading">algorithms that we have expertise in</h2>
          </div>

          {/* Alternating algorithm blocks */}
          {algorithms.map((algo) =>
            algo.side === 'left' ? (
              /* LEFT: image left, content right */
              <div key={algo.id} className="genai-algo-row genai-algo-row--left">
                <div className="genai-algo-img-col">
                  <div className="genai-algo-img-wrap genai-algo-img-wrap--left">
                    <p className="genai-algo-img-label">{algo.title}</p>
                    <img src={algo.image} alt={algo.title} />
                  </div>
                </div>
                <div className="genai-algo-content-col">
                  <h3 className="genai-algo-title">{algo.title}</h3>
                  <h4 className="genai-algo-sub">
                    <span>Algorithm: </span>{algo.algorithm}
                    <br />
                    <span>Impact: </span>{algo.impact}
                  </h4>
                  <p className="genai-algo-para">{algo.description}</p>
                </div>
              </div>
            ) : (
              /* RIGHT: content left, image right */
              <div key={algo.id} className="genai-algo-row genai-algo-row--right">
                <div className="genai-algo-content-col">
                  <h3 className="genai-algo-title">{algo.title}</h3>
                  <h4 className="genai-algo-sub">
                    <span>Algorithm: </span>{algo.algorithm}
                    <br />
                    <span>Impact: </span>{algo.impact}
                  </h4>
                  <p className="genai-algo-para">{algo.description}</p>
                </div>
                <div className="genai-algo-img-col">
                  <div className="genai-algo-img-wrap genai-algo-img-wrap--right">
                    <p className="genai-algo-img-label">{algo.title}</p>
                    <img src={algo.image} alt={algo.title} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* ── SECTION 4: GEN AI COEX ADVANTAGES ── */}
        <div className="genai-about-container">
          <div className="genai-about-left">
            <p className="genai-about-overline">top advantages</p>
            <h2 className="genai-about-heading">Gen AI COEx Advantages</h2>
            <p className="genai-about-desc">
              Our Gen AI Centre of Excellence delivers measurable business outcomes through
              deep domain expertise, rapid deployment frameworks, and enterprise-grade
              AI governance — enabling global brands and innovative startups to
              unlock the true power of generative AI.
            </p>
            <Link to="/services" className="genai-about-cta">
              Explore Our Services →
            </Link>
          </div>
          <div className="genai-about-right">
            <img src="/gen/Section.png" alt="Gen AI COEx Advantages" className="genai-section-img" />
          </div>
        </div>

        {/* ── SECTION 5: CTA STRIP ── */}
        <div className="genai-cta-strip">
          <div className="genai-cta-strip-inner">
            <div className="genai-cta-strip-dot" />
            <h3 className="genai-cta-strip-text">
              Reach out to us on{' '}
              <a href="mailto:sales@doodleblue.com" className="genai-cta-email">
                sales@doodleblue.com
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAIPage;
