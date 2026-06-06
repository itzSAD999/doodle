import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    const timeoutId = setTimeout(updateHeight, 100);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ 
        flexGrow: 1,
        position: 'relative', 
        zIndex: 2, 
        marginBottom: `${footerHeight}px`,
        backgroundColor: 'transparent',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        <Outlet />
      </main>
      <div 
        ref={footerRef} 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          zIndex: 0 
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
