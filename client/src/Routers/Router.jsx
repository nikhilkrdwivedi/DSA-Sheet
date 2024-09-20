import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import App from '../App';
import Login from '../pages/public/Login';
import NotFound from '../pages/public/NotFound';
import Topic from '../pages/private/Topic';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import NavBar from '../pages/private/Navbar';
import Loader from '../components/Loader';
import Topics from '../pages/private/Topics';

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Loader />
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/topics" element={<ProtectedRoute ><Topics /></ProtectedRoute>} />
          <Route path="/topics/:topic" element={<ProtectedRoute ><Topic /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
