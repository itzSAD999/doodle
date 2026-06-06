import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <Link to="/" className="logo-text">doodleblue</Link>
          </div>
          <nav className="nav-menu">
            <Link to="/gen-ai" className="nav-link">Gen AI COEx</Link>
            <Link to="/services" className="nav-link">Services <span className="dropdown-icon">▼</span></Link>
            <Link to="/industries" className="nav-link">Industries <span className="dropdown-icon">▼</span></Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/success-stories" className="nav-link">Success Stories</Link>
            <Link to="/careers" className="nav-link">Careers</Link>
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>☰</button>
        </div>
      </header>
      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
