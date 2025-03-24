import React, { useEffect } from 'react';
import { AutoComplete, Button, Checkbox, Col, Form, Input, Row, Carousel } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import '../styles/RegisterPage.css';
import wallpayLogo from '../assets/WallPay.png';
import add1 from '../assets/1.png';
import add2 from '../assets/2.png';
import add3 from '../assets/3.png';
import add4 from '../assets/4.png';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 7 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 9, offset: 7 } },
};

const Register = ({ onSwitchPage }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.classList.add('Signup-page');
    document.title = 'Signup - WallPay';
    return () => {
      document.body.classList.remove('Signup-page');
      document.title = 'WallPay';
    };
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // You can call your backend signup API here
  };

  return (
    <div className="SignupContainer">
      <div className="Left">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ minWidth: 560 }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              { type: 'email', message: 'The input is not a valid E-mail!' },
              { required: true, message: 'Please input your E-mail!' },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered does not match!'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input style={{ width: '100%' }} prefix={<PhoneOutlined />} />
          </Form.Item>

          <Form.Item label="Captcha" extra="We must make sure that you're a human.">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/terms" target="_blank" rel="noopener noreferrer">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginBottom: '24px', padding: '0 95px', fontSize: '18px', fontWeight: '500' }}
              >
                Sign up
              </Button>
              <span style={{ marginBottom: '12px', fontSize: '14px' }}>
                Already have an account?
              </span>
              <Button
                type="primary"
                style={{ padding: '0 86px', fontSize: '18px', fontWeight: '500' }}
                onClick={() => onSwitchPage('login')}
              >
                Login now
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>

      <div className="Right">
        <div className="carousel-wrapper">
          <Carousel autoplay>
            <div><img src={add1} alt="1" /></div>
            <div><img src={add2} alt="2" /></div>
            <div><img src={add3} alt="3" /></div>
            <div><img src={add4} alt="4" /></div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Register;
