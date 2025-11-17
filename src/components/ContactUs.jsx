import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import PageContainer from './PageContainer';

const ContactUs = () => {
  return (
    <PageContainer title="Get In Touch">
      <Row className="justify-content-center">
        {/* FIX: Increased Col size to 9 (from 7) to use more width */}
        <Col lg={9}> 
          <div className="bg-dark p-4 p-md-5 rounded shadow-lg card-fade-in" style={{ opacity: 0 }}>
            <p className="lead text-white text-center mb-4">
              Have questions, feedback, or need support? Fill out the form below.
            </p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contactFormName">
                    <Form.Label className="text-white">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" className="form-control-dark" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contactFormEmail">
                    <Form.Label className="text-white">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className="form-control-dark" required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="contactFormSubject">
                <Form.Label className="text-white">Subject</Form.Label>
                <Form.Control type="text" placeholder="Briefly describe your query" className="form-control-dark" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactFormMessage">
                <Form.Label className="text-white">Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message..." className="form-control-dark" required />
              </Form.Group>

              <div className="d-grid mt-4">
                <Button variant="warning" size="lg" type="submit" className="cta-button pulse-animation">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ContactUs;