// src/components/Transactions.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Table, Typography, message, Tabs } from 'antd';
import axios from 'axios';

const { Title } = Typography;
const { TabPane } = Tabs;

const columns = [
  {
    title: 'Recipient/Sender',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amt) => `₹${amt}`,
  },
  {
    title: 'Mode',
    dataIndex: 'mode',
    key: 'mode',
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date) => new Date(date).toLocaleString(),
  },
];

const Transactions = () => {
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);
  const receivedCountRef = useRef(0); // Store previous count

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/transactions', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const newReceived = res.data.received.map((item) => ({
          key: item._id,
          user: item.sender.username,
          amount: item.amount,
          mode: item.mode,
          createdAt: item.createdAt,
        }));

        const newSent = res.data.sent.map((item) => ({
          key: item._id,
          user: item.recipient,
          amount: item.amount,
          mode: item.mode,
          createdAt: item.createdAt,
        }));

        // Only show message if new received transaction
        if (newReceived.length > receivedCountRef.current) {
          const latest = newReceived[0];
          message.success(`You've received ₹${latest.amount} from ${latest.user}`);
          receivedCountRef.current = newReceived.length;
        }

        setSent(newSent);
        setReceived(newReceived);
      } catch (err) {
        message.error('Failed to load transactions');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div style={{ padding: '12px' }}>
      <Title level={4}>Transaction History</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Paid Transactions" key="1">
          <Table dataSource={sent} columns={columns} pagination={false} />
        </TabPane>
        <TabPane tab="Received Transactions" key="2">
          <Table dataSource={received} columns={columns} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Transactions;
