import React from 'react';
import '../styles/SignUp.css'; // Import your CSS file for styling
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


//creates SignUp page/component
const SignUp = () => {
  const [email, setEmail] = useState(''); //stores email
  const [password, setPassword] = useState(''); //stores password
    const [name, setName] = useState(''); //stores name
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, name, email, password); //signs up user with name, email and password
      alert('Account created!'); //success message
    } catch (error) {
      alert(error.message);
    }
  };

  //SignUp page
  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" onChange={e => setName(e.target.value)} placeholder="Full Name" /> {/*Where user enters name*/}
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" /> {/*Where user enters email*/}
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" /> {/*Where user enters password*/}
      <button onClick={handleSignUp}>Sign Up</button> {/*SignUp button*/}
    </div>
  );
};

export default SignUp;
