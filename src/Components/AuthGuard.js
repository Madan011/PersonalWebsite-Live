import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authToken'); // Check if user is authenticated
};

const AuthGuard = ({ requiresAuth }) => {
  if (requiresAuth && !isAuthenticated()) {
    return <Navigate to="/signin" />; // Redirect unauthenticated users to signin
  }
  
  if (!requiresAuth && isAuthenticated()) {
    return <Navigate to="/store" />; // Redirect authenticated users away from signin
  }

  return <Outlet />; // Render the children (nested routes)
};

export default AuthGuard;
