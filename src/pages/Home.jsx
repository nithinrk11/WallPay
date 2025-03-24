import React, { useState } from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Carousel,
  Row,
  Col,
  Card,
} from 'antd';
import {
  ThunderboltOutlined,
  UsergroupAddOutlined,
  GiftOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

import Login from './Login';
import Register from './Register';
import logo from '../assets/logo.png';

import WelcomeMessage from '../components/Home/WelcomeMessage';
import CarouselSection from '../components/Home/CarouselSection';
import CardsSection from '../components/Home/CardsSection';


const { Header, Content, Footer } = Layout;

const items = [
  { key: 'home', label: 'Home' },
  { key: 'login', label: 'Login' },
  { key: 'signup', label: 'Sign Up' },
  { key: 'services', label: 'Our Services' },
  { key: 'contact', label: 'Contact Us' },
  { key: 'join', label: 'Join Us' },
  { key: 'business', label: 'Business' },
  { key: 'about', label: 'About Us' },
];



const Home = () => {
  const [activeContent, setActiveContent] = useState('home');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setActiveContent(e.key);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'login':
        return <Login onSwitchPage={setActiveContent} />;
      case 'signup':
        return <Register onSwitchPage={setActiveContent} />;
      case 'services':
        return (
          <div>
            Explore our various digital payment services tailored for your needs.
          </div>
        );
      case 'contact':
        return (
          <div>Contact Us: support@wallpay.com | +91-123-456-7890</div>
        );
      case 'join':
        return (
          <div>
            Join Us: Careers and community opportunities with WallPay.
          </div>
        );
      case 'business':
        return <div>WallPay Business: Partner with us to grow your business.</div>;
      case 'about':
        return <div>About Us: Learn more about WallPay’s vision and team.</div>;
      case 'home':
      default:
        return (
          <>
            <>
              <CarouselSection />
              <WelcomeMessage />
              <CardsSection />
            </>
          </>
        );
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0f9e99',
          height: '80px',
          padding: '0 32px',
        }}
      >
        <img
          src={logo}
          alt="WallPay Logo"
          style={{ height: 60, marginRight: 32, borderRadius: '12px' }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeContent]}
          onClick={handleMenuClick}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: '#0f9e99',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '80px',
            borderBottom: 'none',
            color: 'white',
          }}
        />
      </Header>

      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{activeContent}</Breadcrumb.Item>
        </Breadcrumb>

        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </div>
      </Content>

      <Footer style={{ backgroundColor: '#0f9e99', color: '#fff', padding: '40px 50px 20px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <h3 style={{ color: '#fff' }}>WallPay</h3>
            <p>
              WallPay is your secure and seamless digital wallet. Pay bills, transfer money, recharge and more – all in one place.
            </p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: '#fff' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#fff' }}>Home</a></li>
              <li><a href="#" style={{ color: '#fff' }}>Login</a></li>
              <li><a href="#" style={{ color: '#fff' }}>Sign Up</a></li>
              <li><a href="#" style={{ color: '#fff' }}>Services</a></li>
              <li><a href="#" style={{ color: '#fff' }}>Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: '#fff' }}>Contact</h4>
            <p>Email: support@wallpay.com</p>
            <p>Phone: +91-123-456-7890</p>
            <p>Location: New Delhi, India</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: '#fff' }}>Follow Us</h4>
            <div style={{ fontSize: '20px' }}>
              <a href="#" style={{ color: '#fff', marginRight: '12px' }}><i className="fab fa-facebook" /></a>
              <a href="#" style={{ color: '#fff', marginRight: '12px' }}><i className="fab fa-twitter" /></a>
              <a href="#" style={{ color: '#fff', marginRight: '12px' }}><i className="fab fa-instagram" /></a>
              <a href="#" style={{ color: '#fff' }}><i className="fab fa-linkedin" /></a>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #ffffff33', paddingTop: '16px' }}>
          © {new Date().getFullYear()} WallPay. All rights reserved.
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
