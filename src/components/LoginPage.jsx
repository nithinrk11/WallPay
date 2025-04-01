import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 535ea124bde38f4e69ed815ac86af114edbb2dbf
import { Button, Form, Input, Divider, notification } from "antd";

const LoginPage = ({ openSignupDrawer, closeLoginModal }) => {
  const [api, contextHolder] = notification.useNotification();
<<<<<<< HEAD
=======
import { Button, Form, Input, Divider, notification } from "antd";
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const LoginPage = ({ openSignupDrawer, closeLoginModal }) => {  
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();  // Use useNavigate hook
>>>>>>> b7394598 (frontend and backend compatibility updates)
=======
>>>>>>> 535ea124bde38f4e69ed815ac86af114edbb2dbf

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
<<<<<<< HEAD
<<<<<<< HEAD
        window.location.href = '/welcome'; // Redirect to welcome page
=======
        navigate('/user'); // Redirect to User page
>>>>>>> b7394598 (frontend and backend compatibility updates)
=======
        window.location.href = '/welcome'; // Redirect to welcome page
>>>>>>> 535ea124bde38f4e69ed815ac86af114edbb2dbf
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 535ea124bde38f4e69ed815ac86af114edbb2dbf
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
<<<<<<< HEAD
=======
>>>>>>> b7394598 (frontend and backend compatibility updates)
=======
>>>>>>> 535ea124bde38f4e69ed815ac86af114edbb2dbf
  );
};

export default LoginPage;
