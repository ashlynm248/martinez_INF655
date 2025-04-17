import './App.css';
import React from 'react';
import { AuthContextProvider } from "./AuthContext";
import Login from "./Login";
import Greeting from "./Greeting";
import UserInfo from './UserInfo';
import TaskList from './TaskList';
import LogoutButton from './LogOut';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";
import TaskRoutes from "./TaskRoutes";
import { TaskProvider } from "./TaskContext";



//Connecting Firebase through AuthContext

function App() {
  return (
    <div>
      <br />
      <AuthContextProvider>
      <Login />
      <LogoutButton />
      </AuthContextProvider>
      <Greeting name="Sammy" />
      <br />
      <h2>Tasks</h2>
      <TaskList />
      <br />
      <UserInfo />
    </div>
  );
}

<AuthContextProvider>
<TaskProvider>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/SignUp"
        element={
          <ProtectedRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/task/*"
        element={
          <ProtectedRoute>
            <TaskRoutes />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    <Footer />
  </BrowserRouter>
</TaskProvider>
</AuthContextProvider>
export default App;