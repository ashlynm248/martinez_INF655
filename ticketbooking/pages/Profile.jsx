// src/components/Profile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

//creates Profile page/component
const Profile = () => {
  const { user } = useAuth(); //uses auth to get user information


  //Profile page
  return (
    <div>
      <h2>Your Profile</h2>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p> {/*shows user email */}
          <button onClick={() => signOut(auth)}>Logout</button> {/*Logout button */}
        </>
      ) : (
        <p>Information</p>
      )}
    </div>
  );
};

export default Profile;
