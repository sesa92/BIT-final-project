import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import "@fortawesome/free-solid-svg-icons"

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);
