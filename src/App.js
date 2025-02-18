import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Counter from './components/Counter';
import Dashboard from './components/Dashboard';
import Auth from './components/auth/Auth';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import Home from './components/Home';
import RichTextEditor from './components/RichTextEditor';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <>
      <CssBaseline />
       <Navbar/>
        <Routes>
          <Route path="/counter" element={<PrivateRoute><Counter /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/userform" element={<PrivateRoute><UserForm /></PrivateRoute>} />
          <Route path="/" element={<Home />} />
          <Route path="/richtexteditor" element={<PrivateRoute><RichTextEditor /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      
    </>
  );
}

export default App;
