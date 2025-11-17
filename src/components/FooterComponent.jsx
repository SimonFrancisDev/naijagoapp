import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer-wrapper text-white pt-5 pb-3">
      <Container>
        <Row>

          {/* Column 1 */}
          <Col md={4} className="mb-4">
            <h5 className="text-orange fw-bold">NaijaGo</h5>
            <p className="footer-text-muted">
              Your gateway to Nigeria's premier digital market. Connecting verified vendors and buyers efficiently.
            </p>
          </Col>

          {/* Column 2 */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/policies" className="footer-link">Policies</a></li>
              <li><a href="/privacy" className="footer-link">Privacy & Terms</a></li>
            </ul>
          </Col>

          {/* Column 4: Social Media Icons */}
          <Col md={2} className="mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="social-icons">
              <a href="#" target="_blank" className="social-icon-link"><FaFacebook /></a>
              <a href="#" target="_blank" className="social-icon-link"><FaTwitter /></a>
              <a href="#" target="_blank" className="social-icon-link"><FaInstagram /></a>
              <a href="#" target="_blank" className="social-icon-link"><FaWhatsapp /></a>
            </div>
          </Col>

        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="copyright-text mb-0">
              &copy; {new Date().getFullYear()} NaijaGo. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
