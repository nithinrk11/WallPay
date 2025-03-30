import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

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
  Carousel: {
    "colorBgContainer": "rgb(255, 255, 255)",
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Router>  {/* Wrap everything inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
