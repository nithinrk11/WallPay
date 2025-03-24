import React from 'react';
import { Card, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import insuranceIcon from '../../assets/6.png'; // Replace with actual image path
import investmentsIcon from '../../assets/7.png'; // Replace with actual image path
import lendingIcon from '../../assets/8.png'; // Replace with actual image path

const features = [
  { title: 'Insurance', icon: insuranceIcon },
  { title: 'Investments', icon: investmentsIcon },
  { title: 'Lending', icon: lendingIcon },
];

const FeatureCardsSection = () => (
  <div style={{ width: '100%', margin: '48px 0', textAlign: 'center' }}>
    <Row gutter={[24, 24]} justify="center">
      {features.map((feature, index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <Card
            hoverable
            style={{
              borderRadius: '16px',
              textAlign: 'center',
              padding: '30px 20px',
              height: '100%',
              border: '5px solid #0f9e99',
              
            }}
            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0px 9px 5px rgba(12, 103, 99, 0.51)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                marginBottom: '20px',
                objectFit: 'contain', // or 'cover' based on image type
              }}
            />
            <h2 style={{ color: '#3A3A3A', fontWeight: '700', fontSize: '20px', marginBottom: '10px' }}>
              {feature.title}
            </h2>
            <ArrowRightOutlined style={{ color: '#6A00F4', fontSize: '22px' }} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default FeatureCardsSection;