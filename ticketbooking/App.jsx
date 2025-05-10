import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Bookings from './pages/Bookings';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <AuthProvider>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
