import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { ConfigProvider, App as AntdApp } from 'antd';
=======
import { ConfigProvider } from 'antd';
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05

import './App.css';
import Home from './Pages/Home';

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
<<<<<<< HEAD
    Carousel: {
      colorBgContainer: 'rgb(255, 255, 255)',
=======
  Carousel: {
    "colorBgContainer": "rgb(255, 255, 255)",
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
<<<<<<< HEAD
      <AntdApp>  {/* Wrap entire app with AntdApp */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AntdApp>
=======
      <Router>  {/* Wrap everything inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05
    </ConfigProvider>
  );
}

export default App;
