import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GrudgeProvider } from './context/GrudgeContext';

import './index.css';
import './styles/index.scss';

ReactDOM.render(
  <GrudgeProvider>
    <App />
  </GrudgeProvider>,
  document.getElementById('root')
);
