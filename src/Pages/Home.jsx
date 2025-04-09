import React, { useState } from "react";
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Card, Row, Col, Button, Dropdown, theme, Modal } from "antd";

import HomePage from "../components/HomePage.jsx";
import SignupPage from "../components/SignupPage.jsx";
import LoginPage from "../components/LoginPage.jsx"; 

const { Header, Content, Footer } = Layout;

const solutionsGrid = (
  <div style={{ padding: "10px", background: "white", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
    <Row gutter={[16, 16]}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Col key={index} span={8}>
          <Card title={`Solution ${index}`} bordered={false} hoverable>
            Description {index}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const Home = () => {
  const [selectedKey, setSelectedKey] = useState("logo");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupDrawerOpen, setSignupDrawerOpen] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "logo",
      label: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontFamily: "Soliden, sans-serif",
            fontWeight: "bold",
            fontSize: "36px",
            color: selectedKey === "logo" ? "White" : "#00E6E6",
            padding: "0 16px",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          WallPay
        </span>
      ),
    },
    { key: "join", label: <span style={{ fontSize: "18px", fontWeight: "600" }}>Join Us</span>, icon: <UserOutlined style={{ fontSize: "20px" }} /> },
    { key: "business", label: <span style={{ fontSize: "18px", fontWeight: "600" }}>Business with Us</span>, icon: <SolutionOutlined style={{ fontSize: "20px" }} /> },
    { key: "contact", label: <span style={{ fontSize: "18px", fontWeight: "600" }}>Contact Us</span>, icon: <DesktopOutlined style={{ fontSize: "20px" }} /> },
    { key: "about", label: <span style={{ fontSize: "18px", fontWeight: "600" }}>About Us</span>, icon: <DesktopOutlined style={{ fontSize: "20px" }} /> },
  ];

  const showSignupDrawer = () => {
    console.log("Opening Signup Drawer");
    setSignupDrawerOpen(true);
    setLoginModalOpen(false); // ✅ Close login modal when opening signup drawer
  };

  const openLoginModal = () => {
    console.log("Opening Login Modal");
    setSignupDrawerOpen(false); // ✅ Close signup drawer
    setLoginModalOpen(true); // ✅ Open login modal
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "join":
        return <div><h2>Join Us</h2><p>Explore career opportunities and community programs with WallPay.</p></div>;
      case "business":
        return <div><h2>Business with Us</h2><p>Partner with WallPay and grow your business using our digital solutions.</p></div>;
      case "contact":
        return <div><h2>Contact Us</h2><p>Email: support@wallpay.com</p><p>Phone: +91-123-456-7890</p><p>Location: New Delhi, India</p></div>;
      case "about":
        return <div><h2>About Us</h2><p>Learn more about WallPay’s vision, mission, and the team behind our success.</p></div>;
      default:
        return <HomePage
        openLoginModal={openLoginModal}
        openSignupDrawer={showSignupDrawer}
      />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={menuItems}
          style={{ flex: 1, minWidth: 0, height: 74 }}
        />

        <Dropdown overlay={solutionsGrid} trigger={["hover"]}>
          <Button type="text" style={{ color: "white", fontSize: "18px" }}>
            Our Solutions <TeamOutlined style={{ fontSize: "24px" }} />
          </Button>
        </Dropdown>
        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          <Button
            type="text"
            style={{
              background: "transparent",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              padding: "18px 16px",
              border: `2px solid ${isLoginClicked ? "#00E6E6" : "white"}`, // ✅ Changes border on click
              transition: "border-color 0.3s ease",
            }}
            onClick={() => {
              console.log("Login Button Clicked");
              setIsLoginClicked(true); // ✅ Change border color
              openLoginModal(); // ✅ Open login modal
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            style={{ color: "White", fontSize: "18px", padding: "18px 16px", fontWeight: "600" }}
            onClick={showSignupDrawer}
          >
            Sign Up
          </Button>
        </div>
      </Header>

      <Content style={{ padding: "20px 6px", flex: 1 }}>
        <div style={{ background: colorBgContainer, minHeight: 280, padding: 14, borderRadius: borderRadiusLG }}>
          {renderContent()}
        </div>
      </Content>

      <Footer style={{ background: "#001529", color: "white", padding: "40px 20px" }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ color: "#00E6E6" }}>WallPay</h3>
            <p>
              Empowering digital payments for individuals and businesses. Secure. Fast. Reliable.
            </p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4 style={{ color: "#00E6E6" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="#join" style={{ color: "white" }}>Join Us</a></li>
              <li><a href="#business" style={{ color: "white" }}>Business with Us</a></li>
              <li><a href="#about" style={{ color: "white" }}>About Us</a></li>
              <li><a href="#contact" style={{ color: "white" }}>Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <h4 style={{ color: "#00E6E6" }}>Contact</h4>
            <p>Email: support@wallpay.com</p>
            <p>Phone: +91-123-456-7890</p>
            <p>Location: New Delhi, India</p>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: "40px", borderTop: "1px solid #444", paddingTop: "20px" }}>
          © {new Date().getFullYear()} WallPay. All rights reserved.
        </div>
      </Footer>

      {/* Signup Drawer */}
      <SignupPage
        open={signupDrawerOpen}
        onClose={() => setSignupDrawerOpen(false)}
        onLoginClick={openLoginModal} // ✅ Pass function to open login modal from signup
      />

      {/* Login Modal */}
      <Modal
        title="Login"
        open={loginModalOpen}
        onCancel={() => {
          console.log("Closing Login Modal");
          setLoginModalOpen(false); 
          setIsLoginClicked(false); 
        }}
        footer={null}
      >
        <LoginPage 
          openSignupDrawer={showSignupDrawer} 
          closeLoginModal={() => setLoginModalOpen(false)} 
        />
      </Modal>
    </Layout>
  );
};

export default Home;
