import React from 'react';
import './Blogs.css';

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Technology',
    date: 'OCT 12, 2023',
    title: 'The Future of AI in Enterprise Software Development'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'UI/UX Design',
    date: 'SEP 28, 2023',
    title: 'Why Micro-Interactions Are the Key to User Retention'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Digital Strategy',
    date: 'SEP 15, 2023',
    title: 'Navigating Digital Transformation in the Post-Pandemic Era'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Data Analytics',
    date: 'AUG 30, 2023',
    title: 'Harnessing the Power of Predictive Analytics for E-commerce'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Cloud Computing',
    date: 'AUG 12, 2023',
    title: 'Serverless Architecture: Pros, Cons, and Best Practices'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tag: 'Mobile Engineering',
    date: 'JUL 22, 2023',
    title: 'Building High-Performance React Native Applications'
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-page">
      {/* Sticky Hero */}
      <div className="sticky-hero-wrapper">
        <section className="blogs-hero">
          <div className="blogs-hero-inner">
            <h1 className="blogs-title">
              Insights <span className="blogs-amp">&</span> Blogs
            </h1>
            <p className="blogs-subtitle">
              Discover doodleblue's expert insights on transforming the way business is done in today's world. Read our latest articles on technology trends, digital strategy, and more.
            </p>
          </div>
        </section>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content-wrapper">
        <section className="blogs-grid-section">
          <div className="blogs-container">
            <div className="blogs-grid">
              {blogPosts.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-image-wrapper">
                    <img src={blog.image} alt={blog.title} className="blog-image" loading="lazy" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-tag">{blog.tag}</span>
                      <span className="blog-date">{blog.date}</span>
                    </div>
                    <h3 className="blog-post-title">{blog.title}</h3>
                    <div className="blog-read-more">
                      <span className="blog-read-text">Read Article</span>
                      <span className="blog-read-icon">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="blogs-load-more">
              <button className="blogs-load-btn">Load More</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
