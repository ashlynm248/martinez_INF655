import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//makes sure user is logged in before accessing the page
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  //If the user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
