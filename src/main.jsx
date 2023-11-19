/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#c43042',
        colorLink: '#c43042',
        colorLinkActive: '#000',
        colorLinkHover: '#c43042',
        colorTextDisabled: '#E9A1A8',
        colorPrimaryTextHover: '#000',
      },
      components: {
        Card: {
          colorBgContainer: 'transparent',
        },
        Input: {
          colorTextPlaceholder: 'white',
        },
        Layout: {
          siderBg: '#c43042',
        },
        Menu: {
          darkItemBg: 'transparent',
          darkItemSelectedBg: 'white',
          darkItemSelectedColor: 'black',
        },
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
);
