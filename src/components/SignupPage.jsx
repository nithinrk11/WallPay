import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  Divider,
  notification,
} from 'antd';

import "../Styles/HomePage/SignupPage.css";

const SignupPage = ({ open, onClose, onLoginClick }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, message, description) => {
    api[type]({
      message,
      description,
      placement: 'topRight', // Change placement if needed
    });
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log('Sending values to server: ', values);
  
      // Connect to your Express backend API endpoint
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
      console.log('Response from backend:', data);
  
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
  
      // Show success notification
      openNotification('success', 'Account Created', 'Your account has been created successfully!');
  
      // Close the drawer after successful submission
      onClose();
    } catch (error) {
      console.error('Signup error:', error.message);
      openNotification('error', 'Signup Failed', error.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{ body: { paddingBottom: 80 } }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button 
              type="primary" 
              style={{ width: '150px' }} 
              onClick={() => form.submit()}
              loading={loading}
            >
              Sign Up
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please enter user name' }]}>
                <Input placeholder="Enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true, message: 'Please enter a valid E-mail!' }]}>
                <Input placeholder="Enter email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password!' }]} hasFeedback>
                <Input.Password placeholder="Enter password"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}>
                <Input.Password placeholder="Confirm password" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                <Input addonBefore="+91" placeholder="Enter phone number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="captcha" label="Captcha" extra="We must ensure you are human.">
                <Row gutter={8}>
                  <Col span={12}><Input /></Col>
                  <Col span={12}><Button>Get Captcha</Button></Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="agreement" valuePropName="checked" rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('You must accept the agreement')) }]}>
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          </Form.Item>
          <Divider style={{ color: 'teal' }} />
          <Form.Item style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>Already have an account?</span>
              <Button
                type="primary"
                style={{ marginTop: 8, width: "30%" }}
                onClick={() => {
                  console.log("Closing Signup Drawer & Opening Login Modal");
                  onClose();
                  setTimeout(() => {
                    onLoginClick();
                  }, 300);
                }}
              >
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default SignupPage;
