import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
    <BrowserRouter>
    <ToastContainer/>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
     
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
