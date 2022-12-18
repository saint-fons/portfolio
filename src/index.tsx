import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CountriesContexProvider } from './CountriesContext/CountriesContex';
import { initializeIcons } from '@fluentui/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
initializeIcons();
root.render(
  <React.StrictMode>
    <CountriesContexProvider>
      <App />
    </CountriesContexProvider>
  </React.StrictMode>
);
