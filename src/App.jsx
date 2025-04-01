import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { ConfigProvider, App as AntdApp } from 'antd';
=======
import { ConfigProvider } from 'antd';
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05

import './App.css';
import Home from './Pages/Home';
=======
import { ConfigProvider, App as AntdApp } from 'antd';

import './App.css';
import Home from './Pages/Home';
import User from "./Pages/User"; 
>>>>>>> b7394598 (frontend and backend compatibility updates)

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
<<<<<<< HEAD
    Carousel: {
      colorBgContainer: 'rgb(255, 255, 255)',
=======
  Carousel: {
    "colorBgContainer": "rgb(255, 255, 255)",
>>>>>>> d04dad7d7289b9107e35bf292b581db7f41fcc05
=======
    Carousel: {
      colorBgContainer: 'rgb(255, 255, 255)',
>>>>>>> b7394598 (frontend and backend compatibility updates)
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b7394598 (frontend and backend compatibility updates)
      <AntdApp>  {/* Wrap entire app with AntdApp */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
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
=======
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </AntdApp>
>>>>>>> b7394598 (frontend and backend compatibility updates)
    </ConfigProvider>
  );
}

export default App;
