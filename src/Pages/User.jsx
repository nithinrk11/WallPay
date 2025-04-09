import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Layout, Menu, Button, Card, Col, Row, Modal, theme
} from 'antd';
import {
  DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,
  UserOutlined, QrcodeOutlined, CreditCardOutlined, BankOutlined,
  LogoutOutlined, ProfileOutlined, SwapOutlined, UsergroupAddOutlined,
  FundOutlined, FieldTimeOutlined, AlertOutlined, HeartOutlined,
  CarOutlined, HomeOutlined, GoldOutlined, SolutionOutlined,
  CalendarOutlined
} from '@ant-design/icons';

import Upi from '../components/Upi.jsx';
import UpiTransferModal from '../components/UpiTransferModal.jsx';
import Transactions from '../components/Transactions.jsx';


const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, children) => ({ key, icon, children, label });

const iconMap = {
  'UPI / Mobile Number': <SwapOutlined style={{ fontSize: 24, color: '#1890ff' }} />,
  'To Bank / Savings': <BankOutlined style={{ fontSize: 24, color: '#52c41a' }} />,
  'Split Bills': <UsergroupAddOutlined style={{ fontSize: 24, color: '#faad14' }} />,
  'Short Term': <FundOutlined style={{ fontSize: 24, color: '#722ed1' }} />,
  'Long Term': <FieldTimeOutlined style={{ fontSize: 24, color: '#13c2c2' }} />,
  'Emergency Saving': <AlertOutlined style={{ fontSize: 24, color: '#eb2f96' }} />,
  'Family / Health': <HeartOutlined style={{ fontSize: 24, color: '#f5222d' }} />,
  'Vehicle': <CarOutlined style={{ fontSize: 24, color: '#2f54eb' }} />,
  'Home Insurance': <HomeOutlined style={{ fontSize: 24, color: '#fa541c' }} />,
  'Gold Loan': <GoldOutlined style={{ fontSize: 24, color: '#fa8c16' }} />,
  'Personal Loan': <SolutionOutlined style={{ fontSize: 24, color: '#1890ff' }} />,
  'Daily Repayment': <CalendarOutlined style={{ fontSize: 24, color: '#52c41a' }} />
};

const sectionBackgrounds = {
  'Transfer Money': '#e6f7ff',
  'Investments': '#fffbe6',
  'Insurance': '#f9f0ff',
  'Loan Services': '#f6ffed'
};

const User = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);
  const [activeMenuKey, setActiveMenuKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const navigate = useNavigate();
  const { token: { colorBgContainer } } = theme.useToken();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, []);

  const titleMap = {
    qr: 'QR/UPI Generate',
    bills: 'Bills & Payments',
    bank: 'Banking & Balance',
    profile: 'Profile Details',
    complain: 'Complain / Help',
    transactions: 'Transactions',
    contacts: 'Contacts',
    loan: 'Loan Services',
    savings: 'Savings',
    wallet: 'Wallet',
    preferences: 'Preferences',
  };

  const handleMenuClick = ({ key }) => {
    setActiveMenuKey(key);

    setModalTitle(titleMap[key] || key);

    if (key === 'qr') {
      setModalContent(<Upi />);
    } else if (key === 'transactions') {
      setModalContent(<Transactions />);
    } else {
      setModalContent(`You clicked on: ${key}`);
    }

    setIsModalOpen(true);
  };

  const userItems = users.length
    ? users.map(u => getItem(u.username, u._id, <UserOutlined />))
    : [getItem('No users available', 'no-users')];

  const menuItems = [
    getItem('Transactions', 'transactions', <PieChartOutlined />),
    getItem('Contacts', 'contacts', <TeamOutlined />),
    getItem('Loan', 'loan', <BankOutlined />),
    getItem('Savings', 'savings', <CreditCardOutlined />),
    getItem('Wallet', 'wallet', <DesktopOutlined />),
    getItem('Preferences', 'preferences', <ProfileOutlined />),
    getItem('Users', 'sub1', <TeamOutlined />, userItems),
    getItem('Complain/Help', 'complain', <FileOutlined />)
  ];

  const headerItems = [
    { key: 'qr', icon: <QrcodeOutlined />, label: 'QR/UPI Generate' },
    { key: 'bills', icon: <CreditCardOutlined />, label: 'Bills & Payments' },
    { key: 'bank', icon: <BankOutlined />, label: 'Banking & Balance' },
    { key: 'profile', icon: <UserOutlined />, label: 'Profile Details' }
  ].map(i => ({
    ...i,
    style: {
      padding: '0 28px',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      color: 'white'
    },
    icon: React.cloneElement(i.icon, { style: { fontSize: '32px' } })
  }));

  const renderCardSection = (title, cards) => (
    <Card
      type="inner"
      title={<span style={{ fontWeight: 'bold', color: '#2e5cb8', fontSize: '20px' }}>{title}</span>}
      extra={<a href="#">More</a>}
      style={{ marginTop: 16, backgroundColor: sectionBackgrounds[title] }}
      headStyle={{ backgroundColor: sectionBackgrounds[title] }}
      bodyStyle={{ backgroundColor: sectionBackgrounds[title] }}
    >
      <Row gutter={[16, 16]}>
        {cards.map(({ title, description }) => (
          <Col xs={24} sm={12} md={8} key={title}>
            <Card
              hoverable
              bordered
              style={{
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                background: 'linear-gradient(to bottom right, #ffffff, #f5f7fa)',
                transition: 'transform 0.3s',
              }}
              bodyStyle={{ minHeight: 100 }}
              
              onClick={() => {
                setModalTitle(title);
                if (title === 'UPI / Mobile Number') {
                  setModalContent(<UpiTransferModal />);
                } else {
                  setModalContent(`${title} selected`);
                }
                setIsModalOpen(true);
              }}
              
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {iconMap[title]}
                <div>
                  <div style={{ fontWeight: 600, fontSize: '16px' }}>{title}</div>
                  <div style={{ fontSize: '14px', color: '#595959' }}>{description}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        background: '#001529', padding: '0 16px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Menu
          mode="horizontal" theme="dark" selectedKeys={[activeMenuKey]}
          onClick={handleMenuClick}
          style={{ background: '#001529', flex: 1 }}
          items={[
            {
              key: 'logo',
              label: <div style={{
                fontWeight: 'bold', color: 'white', fontSize: '34.2px',
                display: 'flex', justifyContent: 'center', width: '173px', marginLeft: '-21px'
              }}>WallPay</div>, disabled: true
            },
            ...headerItems
          ]}
        />
        <Button
          type="primary"
          style={{ marginLeft: 'auto', padding: '18px 16px', backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
          onClick={() => { localStorage.removeItem('token'); navigate('/'); }}
        >
          Logout <LogoutOutlined />
        </Button>
      </Header>

      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Menu
            theme="dark" mode="inline" selectedKeys={[activeMenuKey]}
            onClick={handleMenuClick}
            items={menuItems}
            style={{ fontSize: '18px', lineHeight: '60px' }}
            inlineIndent={24}
          />
        </Sider>

        <Layout>
          <Content style={{ padding: 24, background: colorBgContainer }}>
            {renderCardSection('Transfer Money', [
              { title: 'UPI / Mobile Number', description: 'Transfer using UPI or mobile number.' },
              { title: 'To Bank / Savings', description: 'Send directly to bank or savings account.' },
              { title: 'Split Bills', description: 'Share and manage group expenses.' }
            ])}

            {renderCardSection('Investments', [
              { title: 'Short Term', description: 'Grow your money with flexible short-term options.' },
              { title: 'Long Term', description: 'Secure your future with long-term plans.' },
              { title: 'Emergency Saving', description: 'Save for unexpected needs and emergencies.' }
            ])}

            {renderCardSection('Insurance', [
              { title: 'Family / Health', description: 'Health and family protection plans.' },
              { title: 'Vehicle', description: 'Secure your car or bike with coverage.' },
              { title: 'Home Insurance', description: 'Protect your home from damage and theft.' }
            ])}

            {renderCardSection('Loan Services', [
              { title: 'Gold Loan', description: 'Get instant loan on your gold assets.' },
              { title: 'Personal Loan', description: 'Quick personal loans at low interest.' },
              { title: 'Daily Repayment', description: 'Easy daily repayment options available.' }
            ])}
          </Content>
          <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '24px 50px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div>
              <strong>WallPay</strong> ©{new Date().getFullYear()} | Built with Ant Design
            </div>
            <div style={{ fontSize: '14px', color: '#888' }}>
              Need help? <a href="mailto:support@wallpay.com">Contact Support</a> | Version 1.0.0
            </div>
          </div>
        </Footer>

        </Layout>
      </Layout>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        {typeof modalContent === 'string' ? <p>{modalContent}</p> : modalContent}
      </Modal>
    </Layout>
  );
};

export default User;
