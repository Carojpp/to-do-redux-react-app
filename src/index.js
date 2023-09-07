// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Importa el Provider
import store from './store';

ReactDOM.render(
  <Provider store={store}> {/* Agrega el Provider con el store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
