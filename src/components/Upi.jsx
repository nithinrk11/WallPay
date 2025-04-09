import React, { useEffect, useState } from 'react';
import { Typography, Spin, message } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const Upi = () => {
  const [upiCode, setUpiCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUpiData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        message.error('User not authenticated');
        return;
      }

      // Generate UPI code (if not already created)
      await axios.post('http://localhost:5000/api/generate-upi', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Fetch UPI and QR
      const res = await axios.get('http://localhost:5000/api/upi', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUpiCode(res.data.upiCode);
      setQrCode(res.data.qrCode);
    } catch (error) {
      console.error(error);
      message.error('Failed to fetch UPI information');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpiData();
  }, []);

  if (loading) {
    return <Spin tip="Fetching UPI details..." size="large" style={{ marginTop: 100 }} />;
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <Title level={2}>Your WallPay UPI Code</Title>
      <Paragraph copyable style={{fontSize: '24px'}}>{upiCode}</Paragraph>
      <img src={qrCode} alt="UPI QR Code" style={{ marginTop: '20px', maxWidth: '300px' }} /> <p>Scan the QR code for UPI</p>
    </div>
  );
};

export default Upi;
