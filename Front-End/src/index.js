import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/all.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //嚴謹模式 可以拿掉
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
