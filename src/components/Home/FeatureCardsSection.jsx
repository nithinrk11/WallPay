import React from 'react';
import { Card, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import insuranceIcon from '../../assets/6.png'; 
import investmentsIcon from '../../assets/7.png'; 
import lendingIcon from '../../assets/8.png'; 
import billsIcon from '../../assets/10.png';  
import bankTransfersIcon from '../../assets/11.png';  
import Workflow from '../../assets/9.png';

const features = [
  { title: 'Insurance', icon: insuranceIcon },
  { title: 'Investments', icon: investmentsIcon },
  { title: 'Lending', icon: lendingIcon },
  { title: 'Bills', icon: billsIcon },
  { title: 'Bank Transfers', icon: bankTransfersIcon },
];

const FeatureCardsSection = () => (
  <div style={{ width: '100%', margin: '48px 0', textAlign: 'center' }}>
    <Row gutter={[24, 24]} justify="center">
      {features.map((feature, index) => (
        <Col key={index} xs={12} sm={8} md={6} lg={4}> {/* Adjusted for square layout */}
          <Card
            hoverable
            style={{
              borderRadius: '16px',
              textAlign: 'center',
              maxWidth: '200px',  // Square-like shape
              minHeight: '200px',  
              border: '3px solid #0f9e99',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',  // Allows background positioning
              overflow: 'hidden',  // Prevents overflow of the background
              transition: 'box-shadow 0.3s ease-in-out',
            }}
            bodyStyle={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0px 9px 5px rgba(12, 103, 99, 0.51)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Curved Radial Background */}
            <div 
              style={{
                position: 'absolute',
                top: '-25%',  
                left: '50%',  
                width: '170%',  
                height: '90%',
                background: 'rgba(15, 158, 153, 0.15)',  // Soft green shade
                borderRadius: '50%',  
                transform: 'translateX(-50%)',  
                zIndex: 0,  
              }}
            />

            {/* Icon */}
            <img
              src={feature.icon}
              alt={feature.title}
              style={{
                width: '150px', // Adjust icon size to fit square
                height: '150px',
                marginBottom: '10px',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,  // Ensures icon appears above background
              }}
            />

            {/* Title & Arrow */}
            <h2 style={{ 
              color: '#3A3A3A', 
              fontWeight: '600', 
              fontSize: '16px', 
              marginBottom: '5px',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '6px',
              position: 'relative',
              zIndex: 1,  // Ensures text stays above background
            }}>
              {feature.title} 
              <ArrowRightOutlined style={{ color: '#6A00F4', fontSize: '16px' }} />
            </h2>
          </Card>
        </Col>
      ))}
    </Row>
    <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <img 
        src={Workflow} 
        alt="Workflow" 
        style={{ width: '100%', height: 'auto', maxWidth: '1600px', marginTop: '40px', borderRadius: '12px', boxShadow: 'inset(0 4px 12px rgba(0, 0, 0, 0.2))' }} 
      />
    </div>
  </div>
);

export default FeatureCardsSection;
