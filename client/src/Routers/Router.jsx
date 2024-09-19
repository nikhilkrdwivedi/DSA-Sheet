import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
import App from '../App';
import Login from '../pages/public/Login';
import NotFound from '../pages/public/NotFound';
import Topic from '../pages/private/Topic';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import NavBar from '../pages/private/Navbar';
import Container from '../components/Container';
import Loader from '../components/Loader';

export default function Router() {
  return (
    <AuthProvider>
    <BrowserRouter>
    {/* <Container > */}
    <Loader />
    <NavBar />
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<ProtectedRoute ><App /></ProtectedRoute>} />
      <Route path="/topics" element={<ProtectedRoute ><App /></ProtectedRoute>} />
      <Route path="/topics/:topic" element={<ProtectedRoute ><Topic /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* </Container> */}
  </BrowserRouter>
  </AuthProvider>
  )
}
