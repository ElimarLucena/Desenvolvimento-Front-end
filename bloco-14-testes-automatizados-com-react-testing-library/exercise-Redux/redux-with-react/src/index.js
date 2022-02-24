import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store/index'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
