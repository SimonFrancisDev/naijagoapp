import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGooglePlay, FaApple, FaTags, FaStore, FaChartLine, FaSearch, FaShieldAlt, FaWarehouse, FaBell, FaGlobe } from 'react-icons/fa'; 
import TypingEffect from './TypingEffect';
import './HeroSection.css';

// --- Headlines for Rotation with Corresponding Icons ---
const rotatingContent = [
  { text: "Welcome To NaijaGo: The Best Marketing Solution For Vendors and Buyers", Icon: FaStore },
  { text: "NaijaGo: Connect with Thousands of Verified Buyers, Instantly.", Icon: FaSearch },
  { text: "Boost Your Sales: Get Noticed By Local Customers on NaijaGo.", Icon: FaChartLine },
  { text: "Discover Quality Products: NaijaGo Makes Local Shopping Easy.", Icon: FaTags },
  { text: "Secure Transactions, Verified Users: Trust the NaijaGo Marketplace.", Icon: FaShieldAlt },
  { text: "Manage Your Inventory and Orders, All in One Place: NaijaGo.", Icon: FaWarehouse },
  { text: "Find the Best Local Deals and Vendors with NaijaGo App.", Icon: FaSearch },
  { text: "Zero Commission Fees for Vendors: Maximize Your Profit with NaijaGo.", Icon: FaTags },
  { text: "Instant Notifications on Sales & Deals: Stay Ahead with NaijaGo.", Icon: FaBell },
  { text: "NaijaGo: Your Gateway to Nigeria's Premier Digital Market.", Icon: FaGlobe },
];

const HeroSection = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  // Effect to handle the headline rotation every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeadlineIndex(prevIndex => (prevIndex + 1) % rotatingContent.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  const { text: currentHeadlineText, Icon: CurrentIcon } = rotatingContent[headlineIndex];
  
  const benefits = [
    "1. Access to verified vendors and quality products.",
    "2. Secure in-app payment and escrow features.",
    "3. Real-time chat with buyers/sellers.",
    "4. Geo-location services for local deals.",
    "5. Exclusive daily vendor discount codes.",
    "6. Personalized product recommendations.",
    "7. Simple inventory management for vendors.",
    "8. Detailed sales analytics and reports.",
    "9. Instant order and payment notifications.",
    "10. High-speed, low-data usage interface.",
  ];

  return (
    <div className="hero-wrapper">
      <div className="hero-animated-blend"></div>
      <div className="hero-glass-overlay"></div>

      <div className="hero-content d-flex align-items-center text-center">
        <Container className="text-white">
          <Row className="justify-content-center">
            <Col lg={8} md={10}>

              {/* Dynamic Headline with Icon */}
              <h1 className="hero-title fade-in-up" key={headlineIndex}>
                {CurrentIcon && <CurrentIcon className="headline-icon" />} 
                <span className="ms-2">{currentHeadlineText}</span>
              </h1>

              {/* Subtitle and Buttons remain the same */}
              <p className="hero-subtitle fade-in-up delay-1">
                Powerful UI. Cutting-edge performance. Made for Vendors & Buyers.
              </p>
              
              <div className="d-flex justify-content-center gap-3 fade-in-up delay-2 store-links">
                {/* ... Store Buttons ... */}
                 <Button variant="warning" size="lg" className="store-button cta-button pulse-animation" href="YOUR_PLAY_STORE_LINK_HERE" target="_blank">
                  <FaGooglePlay className="store-icon" /> <span className="d-none d-sm-inline">Get it on</span> Play Store
                </Button>
                <Button variant="outline-light" size="lg" className="store-button cta-secondary" href="YOUR_APP_STORE_LINK_HERE" target="_blank">
                  <FaApple className="store-icon" /> <span className="d-none d-sm-inline">Available on the</span>App Store
                </Button>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
      
      <TypingEffect benefits={benefits} /> 
    </div>
  );
};

export default HeroSection;