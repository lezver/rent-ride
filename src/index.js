import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-ride">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
