import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  ThunderboltOutlined,
  UsergroupAddOutlined,
  GiftOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const cardContent = [
  {
    title: 'Instant Payments, Zero Hassle.',
    icon: <ThunderboltOutlined />,
    message: 'Experience fast, seamless payments with WallPay.',
  },
  {
    title: 'Send Money to Friends, Instantly.',
    icon: <UsergroupAddOutlined />,
    message: 'Transfer money to friends with just a tap.',
  },
  {
    title: 'Exclusive Cashback & Rewards.',
    icon: <GiftOutlined />,
    message: 'Earn cashback and enjoy exciting rewards.',
  },
  {
    title: 'Pay Bills, Recharge, & More.',
    icon: <AppstoreOutlined />,
    message: 'One app for all your payments and recharges.',
  },
  {
    title: 'Secure & Trusted Payments.',
    icon: <SafetyCertificateOutlined />,
    message: 'Bank-level security to keep your money safe.',
  },
  {
    title: 'Pay Local Merchants Easily.',
    icon: <ShopOutlined />,
    message: 'Support your favorite local shops using WallPay.',
  },
  {
    title: 'WallPay: Your City’s Smartest Payment Solution.',
    icon: <EnvironmentOutlined />,
    message: 'Optimized for your region, trusted by many.',
  },
];

const Cards = () => (
  <div className="card-section">
    <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
      {cardContent.map((ad, index) => (
        <Col xs={24} sm={12} md={12} lg={6} key={index}>
          <Card
            title={ad.title}
            style={{
              backgroundColor: '#efe9e0',
              border: '1px solid #0f9e99',
              borderRadius: '10px',
              height: '100%',
            }}
            headStyle={{
              backgroundColor: '#efe9e0',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>
              {ad.icon}
            </div>
            <p style={{ color: '#000', fontSize: '16px' }}>
              {ad.message}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Cards;
