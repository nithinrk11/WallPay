import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import wallpayLogo from '../assets/WallPay.png';
import '../styles/LoginPage.css';

function Login({ onSwitchPage }) {
  useEffect(() => {
    document.body.classList.add('login-page');
    document.title = 'Login - WallPay';
    return () => {
      document.body.classList.remove('login-page');
      document.title = 'WallPay';
    };
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='Logincontainer'>
      <div className='Left'>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" style={{ marginLeft: '29px' }}>Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <span style={{ display: 'block', textAlign: 'center', marginTop: 10 }}>
              or <Button type="link" onClick={() => onSwitchPage('signup')}>Sign up now!</Button>
            </span>
          </Form.Item>
        </Form>
      </div>

      <div className='Right'>
        <img src={wallpayLogo} alt="WallPay Logo" />
      </div>
    </div>
  );
}

export default Login;
