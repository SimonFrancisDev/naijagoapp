import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PageContainer from './PageContainer';
import { FaBullseye, FaUsers, FaChartArea } from 'react-icons/fa';

const teamMembers = [
  { name: 'Ojemen Destiny Carter', title: 'Founder & CEO', icon: FaUsers },
  { name: 'Marvinx', title: 'Board Member', icon: FaUsers },
  { name: 'Mainx', title: 'Board Member', icon: FaUsers },
  { name: 'Jason', title: 'Board Member', icon: FaUsers },
  { name: 'Francis', title: 'Board Member', icon: FaUsers },
];

const AboutUs = () => {
  return (
    <PageContainer title="About NaijaGo">
      <Row className="justify-content-center text-white">
        
        {/* Mission Statement */}
        <Col lg={10} className="mb-5">
          <p className="lead text-center card-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            NaijaGo was established with a clear mission: to create the most **efficient, secure, and user-friendly** digital marketplace connecting verified vendors and savvy buyers across Nigeria. We believe in empowering local businesses through cutting-edge technology.
          </p>
          <p className="text-center card-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
            Our vision is to be the **No. 1 platform** for digital commerce in West Africa, driving economic growth one transaction at a time, backed by powerful UI and performance.
          </p>
        </Col>

        {/* --- Team Section (Animated Cards) --- */}
        <Col xs={12} className="mb-4">
          <h2 className="text-center text-orange mb-4 animate-slide-in" style={{ animationDelay: '0.8s' }}>
            Meet The Core Team
          </h2>
        </Col>

        {teamMembers.map((member, index) => (
          <Col md={4} key={member.name} className="mb-4">
            <Card className="bg-dark text-white card-hover-lift card-fade-in" style={{ animationDelay: `${1 + index * 0.2}s`, opacity: 0 }}>
              <Card.Body className="text-center">
                <member.icon size={48} className="text-orange mb-3" />
                <Card.Title className="fw-bold">{member.name}</Card.Title>
                <Card.Text className="">{member.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>
    </PageContainer>
  );
};

export default AboutUs;