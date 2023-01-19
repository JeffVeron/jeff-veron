import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter, /* RouterProvider, */
 /*   RouterProvider,  */
} from "react-router-dom";
import { inject } from '@vercel/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  inject();
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
    
  </React.StrictMode>
);
 
