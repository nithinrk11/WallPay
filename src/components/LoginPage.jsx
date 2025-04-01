import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
<<<<<<< HEAD
import { Button, Form, Input, Divider, notification } from "antd";

const LoginPage = ({ openSignupDrawer, closeLoginModal }) => {
  const [api, contextHolder] = notification.useNotification();

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
        window.location.href = '/welcome'; // Redirect to welcome page
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
=======
import { Button, Form, Input, Divider } from "antd";

const LoginPage = ({ openSignupDrawer, closeLoginModal }) => {  
  const handleLogin = (values) => {
    console.log("Login details:", values);
  };

  return (
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
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
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
            closeLoginModal(); // ✅ Close Login Modal first
            openSignupDrawer(); // ✅ Open Signup Drawer
          }}
        >
          Register now!
        </a>
      </Form.Item>
    </Form>
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05
  );
};

export default LoginPage;
