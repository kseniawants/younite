import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/all.scss';
import axios from 'axios';
import setToken from './TokenUtil';
axios.defaults.baseURL = process.env.REACT_APP_API_PATH;
const root = ReactDOM.createRoot(document.getElementById('root'));
setToken();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
