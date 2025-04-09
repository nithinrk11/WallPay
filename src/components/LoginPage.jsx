import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Divider, notification } from "antd";
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const LoginPage = ({ openSignupDrawer, closeLoginModal }) => {  
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();  // Use useNavigate hook

  const handleLogin = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem('token', data.token);

      api.success({
        message: 'Login Successful',
        description: 'Welcome to WallPay!',
        placement: 'topRight',
      });

      closeLoginModal();

      setTimeout(() => {
        navigate('/user'); // Redirect to User page
      }, 1000);
    } catch (error) {
      api.error({
        message: 'Login Failed',
        description: error.message,
        placement: 'topRight',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="login"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          <Divider variant="solid" style={{ borderColor: "#7cb305" }} />
          New User?{" "}
          <a
            href="#"
            onClick={() => {
              closeLoginModal();
              openSignupDrawer();
            }}
          >
            Register now!
          </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
