import React from 'react';
import { Accordion } from 'react-bootstrap';
import PageContainer from './PageContainer';

const legalContent = {
  Policies: [
    { header: "1. Data Protection Policy", text: "NaijaGo adheres strictly to data privacy laws. All user data is encrypted and used solely for platform functionality and service improvement. We never sell your personal information." },
    { header: "2. Anti-Fraud Measures", text: "We utilize AI and human review to detect and prevent fraudulent activities, ensuring a safe marketplace for all users. Suspicious accounts are immediately suspended." },
    { header: "3. Dispute Resolution", text: "Our in-app dispute system provides mediation for buyer-vendor issues, aiming for fair and swift resolutions within 7 business days." },
  ],
  Terms: [
    { header: "1. User Account Responsibility", text: "Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account." },
    { header: "2. Vendor Listing Rules", text: "All products listed by vendors must be legal, accurately described, and priced transparently. Misleading listings are subject to removal." },
    { header: "3. Termination Clause", text: "NaijaGo reserves the right to suspend or terminate access to the platform for any user violating these terms or engaging in harmful behavior." },
  ],
};

const LegalPage = ({ type }) => {
  const content = legalContent[type];

  return (
    <PageContainer title={`${type} and Conditions`}>
      <Accordion defaultActiveKey="0" className="card-fade-in" style={{ opacity: 0 }}>
        {content.map((item, index) => (
          <Accordion.Item 
            eventKey={String(index)} 
            key={index} 
            className="mb-3"
          >
            <Accordion.Header className="text-white">
              {item.header}
            </Accordion.Header>
            <Accordion.Body className="bg-dark text-white-50">
              {item.text}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </PageContainer>
  );
};

// You will use these in your App.js router:
// <Route path="/policies" element={<LegalPage type="Policies" />} />
// <Route path="/terms" element={<LegalPage type="Terms" />} />

export default LegalPage;