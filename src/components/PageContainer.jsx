import React from 'react';
import { Container } from 'react-bootstrap';
import './PageContainer.css'; // For common page background and spacing

const PageContainer = ({ title, children }) => {
  return (
    <div className="page-wrapper">
      {/* CRITICAL CHANGE: Using Container fluid to span 100% width.
        This ensures the content inside uses the full viewport width,
        solving the issue of the content being constrained by the default Container width.
      */}
      <Container fluid className="page-content py-5">
        
        {/* Animated Page Title */}
        <h1 className="page-title text-center text-white mb-4 animate-slide-in">
          {title}
        </h1>
        {/* Orange Divider */}
        <div className="orange-divider mx-auto mb-5 animate-slide-in delay-1"></div>
        
        {/* Page Content */}
        <div className="page-body">
          {children}
        </div>
        
      </Container>
    </div>
  );
};

export default PageContainer;