import React from 'react';
import { Row, Col } from 'antd';
import logo from '../../assets/logo.png';

const WelcomeMessage = () => (
  <div className="welcome-section">
    <Row gutter={24}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>
          Welcome to WallPay
        </h1>
        <p style={{ fontSize: '18px' }}>
          Your one-stop digital wallet solution.
        </p>
        <img
          src={logo}
          alt="WallPay Logo"
          style={{
            height: 120,
            margin: '20px 0',
            borderRadius: '20px',
          }}
        />
        <p style={{ fontSize: '16px' }}>
          Enjoy secure payments, seamless transactions, and exclusive offers.
        </p>
      </Col>
    </Row>
  </div>
);

export default WelcomeMessage;
