import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';

import './App.css';
import Home from './Pages/Home';
import User from "./Pages/User"; 

const customTheme = {
  token: {
    colorPrimary: '#0f9e99',
    colorInfo: '#0f9e99',
  },
  components: {
    Layout: {
      footerBg: 'rgb(0,21,41)',
      bodyBg: 'rgb(255, 255, 255)',
      headerHeight: 74,
      fontSize: 18,
    },
    Carousel: {
      colorBgContainer: 'rgb(255, 255, 255)',
    },
    Card: {
      colorBorderSecondary: 'rgb(166,175,175)',
      headerBg: 'rgb(234,234,234)'
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <AntdApp>  {/* Wrap entire app with AntdApp */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
