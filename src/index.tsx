import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/NewPairs" />} />
      <Route path="/:id" element={<App />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
