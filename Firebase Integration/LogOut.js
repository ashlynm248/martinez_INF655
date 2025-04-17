import React from "react";
import { UserAuth } from "./AuthContext"; 


//This is a button allowing the user to log out
const LogoutButton = () => {
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
//an alert to let the user know they have successfully logged out
      alert("Logged out successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;