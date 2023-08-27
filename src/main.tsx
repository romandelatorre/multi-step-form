import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './Pages/MainPage';
import './index.css';
import ContextProvider from './Components/Context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  </React.StrictMode>
);
