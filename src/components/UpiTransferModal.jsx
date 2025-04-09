// src/components/UpiTransferModal.jsx
import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const UpiTransferModal = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/transfer', values, {
        headers: { Authorization: `Bearer ${token}` },
      });

      message.success(`Payment of ₹${values.amount} sent to ${values.recipient} successfully!`);
      form.resetFields();
    } catch (error) {
      message.error(error.response?.data?.message || 'Transfer failed');
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Recipient UPI ID or Mobile Number"
        name="recipient"
        rules={[{ required: true, message: 'Please enter a valid UPI ID or number' }]}
      >
        <Input placeholder="e.g. 9876543210@upi" />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please enter the amount' }]}
      >
        <Input type="number" placeholder="e.g. 500" />
      </Form.Item>

      <Form.Item
        label="Transfer Mode"
        name="mode"
        rules={[{ required: true, message: 'Please select transfer mode' }]}
      >
        <Select placeholder="Select a mode">
          <Option value="UPI">UPI</Option>
          <Option value="Mobile">Mobile Number</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Send Money
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpiTransferModal;
