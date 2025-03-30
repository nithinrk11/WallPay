import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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
  );
};

export default LoginPage;
