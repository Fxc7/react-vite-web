import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import 'aos/dist/aos.css';
import 'animate.css';

import profile from '../config.profile.js';

import App from './App.jsx';
import Scroll from './Scroll.jsx';

AOS.init();

document.querySelector('title').innerHTML = profile.title_web;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);