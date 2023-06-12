import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/all.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //嚴謹模式 可以拿掉
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
