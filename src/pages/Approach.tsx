import React from 'react';
import './Approach.css';

const Approach: React.FC = () => {
  return (
    <div className="approach-page">
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <section className="approach-hero">
          <div className="approach-hero-content">
            <h1 className="approach-title">
              <span className="approach-title-light">Your business </span>
              <span className="approach-title-accent">goals are met </span>
              <span className="approach-title-light">ensuring classic standards.</span>
            </h1>
            <h3 className="approach-subtitle">
              Innovative Strategy. Transparent Communication.
            </h3>
          </div>
        </section>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content-wrapper">
        {/* Intro Section */}
        <section className="approach-intro">
          <div className="approach-container">
            <p className="approach-intro-text">
              Every project is unique, but this is how we start each of them -
              <span className="approach-highlight"> "tell us everything"</span>.
              Where you started, where you want to go next, what you value, who are your customers and why they care about you. Because we care about you and your business, our approach includes innovative strategy, transparent communication and new-age design thinking that goes beyond the ordinary.
            </p>
          </div>
        </section>

        {/* Initial Discussion */}
        <section className="approach-discussion">
          <div className="approach-container">
            <div className="approach-two-col">
              <div className="approach-col">
                <h2 className="approach-discussion-headline">
                  Say <span className="approach-highlight">"build uber app"</span> or<br /> a 275 Page scope document
                </h2>
              </div>
              <div className="approach-col">
                <h4 className="approach-section-title">Initial discussion</h4>
                <p className="approach-section-desc">
                  We work with all kinds of project briefs - it could be as simple as "Build us an Uber" or a 275-page detailed scope document. Our customized approaches cater to various work methodologies to handle every situation.
                </p>

                <div className="approach-testimonial-card">
                  <p className="approach-testimonial-text">
                    "We were looking for a company to see our vision, understand our target market and deliver on time. If you look at something in-house, the price is pretty exponential, but if you outsource, you might not get the quality. To get the best of both worlds is fairly hard to get and we were able to pick this up with doodleblue, so we are delighted."
                  </p>
                  <h5 className="approach-testimonial-author">Tyler Sellars</h5>
                  <p className="approach-testimonial-role">CEO at Kluo App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Stats */}
        <section className="approach-stats">
          <div className="approach-container">
            <div className="approach-two-col">
              <div className="approach-col">
                <h3 className="approach-stats-title">
                  <span className="approach-stats-number">83%</span><br />
                  of our client engagements<br />
                  are virtual.
                </h3>
              </div>
              <div className="approach-col">
                <h4 className="approach-stats-subtitle">Long distance is always worrisome, be it a relationship or doing business.</h4>
                <p className="approach-stats-desc">
                  We feel your pain. But it should give you greater confidence that 83% of our clients are from different continents, and our clients are extremely satisfied with our services.
                </p>
                <div className="approach-stats-testimonial">
                  <p>"We had started our project with another developer and after about a year and a half of frustration we moved all development to doodleblue. They immediately assigned a project manager and completely overhauled the entire project. We couldn't be more happy with our decision and consider doodleblue as a trusted advisor and partner in our journey."</p>
                  <div className="approach-stats-author">
                    <h6>Adam Ruetz</h6>
                    <small>Co-Founder Oddz App</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Models */}
        <section className="approach-pricing">
          <div className="approach-container">
            <h4 className="approach-pricing-intro">Owing to our transparent communication, smooth workflow, and in-depth contingency plans</h4>
            <p className="approach-pricing-desc">
              We get many requests for on-site, video conferences and daily standups, and we assure you all of this is handled with ease. We have many business models that you can choose from.
            </p>

            <div className="approach-pricing-grid">
              {[
                { title: 'Fixed Fee', desc: 'Experience quality products at a price freeze' },
                { title: 'Retainer', desc: 'Give us the workload and take a break' },
                { title: 'On-site', desc: 'Want to build a product from your place? We are ready to fly!' },
                { title: 'Off-site', desc: 'We are not busy, but productive from our pavilion' }
              ].map((model, idx) => (
                <div key={idx} className="approach-pricing-card">
                  <div className="approach-pricing-icon">✓</div>
                  <h4 className="approach-pricing-card-title">{model.title}</h4>
                  <p className="approach-pricing-card-desc">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="approach-strategy">
          <div className="approach-container">
            {[
              { title: 'Empathy', gradient: 'linear-gradient(135deg, #1a62bb, #2d8cf0)', desc: 'Your problems are our problems. We care and empathize with the challenges faced by our clients. You\'ll often hear us ask - why do you need that? or, "let\'s try another approach" - this shows that we think about the challenge at hand and try and address that.' },
              { title: 'Speed', gradient: 'linear-gradient(135deg, #6c3ecf, #a855f7)', desc: 'Be it from quotes, design, development or deployment, we follow an agile process, and we don\'t know how to operate in any other fashion. We ensure quick turnarounds without compromising on quality.' },
              { title: 'Availability', gradient: 'linear-gradient(135deg, #059669, #34d399)', desc: 'We are highly responsive and available at all times to make your project a success. We make every client\'s dream a reality and one that will leave your audience amazed.' }
            ].map((item, idx) => (
              <div className={`approach-strategy-row ${idx % 2 !== 0 ? 'reverse' : ''}`} key={idx}>
                <div className="approach-strategy-visual" style={{ background: item.gradient }}></div>
                <div className="approach-strategy-content">
                  <h3 className="approach-strategy-title">{item.title}</h3>
                  <p className="approach-strategy-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="approach-methodology">
          <div className="approach-container">
            <h3 className="approach-methodology-title">Process & methodology</h3>
            <p className="approach-methodology-desc">
              While we have fun, we are rooted in our core discipline and systematic work process.
            </p>

            <div className="approach-methodology-grid">
              {[
                { title: 'INSIGHTS', desc: "We understand the client's vision and the scope of the project to form a holistic view of a company's pain points and strengths. Then move onto extensive market research to gather and identify relevant information." },
                { title: 'STRATEGY', desc: "We deploy agile methodologies to develop a digital strategic approach that uncovers opportunities. Our persona-driven approach with transparent communication, innovative strategy and agile execution plan transforms your business digitally." },
                { title: 'TRANSFORM', desc: "Our unrivalled combination of insight and strategy exhilarates digital transformation to build sustainable relationships. Rather than simply enhancing and support traditional methods. We help accelerate growth, provide global opportunities and give you a competitive advantage." }
              ].map((method, idx) => (
                <div key={idx} className="approach-methodology-card">
                  <div className="approach-methodology-number">{String(idx + 1).padStart(2, '0')}</div>
                  <h4 className="approach-methodology-card-title">{method.title}</h4>
                  <p className="approach-methodology-card-desc">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Approach;
