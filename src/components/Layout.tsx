import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <Header />
      <main style={{ 
        position: 'sticky', 
        bottom: 0, 
        zIndex: 1, 
        minHeight: '100vh',
        backgroundColor: '#fff' // Default to white to ensure opaque backing
      }}>
        <Outlet />
      </main>
      <div style={{ 
        position: 'relative', 
        zIndex: 5,
        boxShadow: '0 -20px 40px rgba(0,0,0,0.1)'
      }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
