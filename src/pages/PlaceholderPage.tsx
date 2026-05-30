import React from 'react';

const PlaceholderPage: React.FC<{title: string}> = ({ title }) => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container text-center">
        <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>{title}</h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
          This section is currently being updated with new premium content.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
