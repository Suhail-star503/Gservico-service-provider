import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { ToastContainer } from 'react-toastify';
import ContextData from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>

    <ToastContainer autoClose={3000} limit={3} />

  </React.StrictMode>
);



