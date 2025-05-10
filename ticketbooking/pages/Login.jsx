import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

//creates Login page/component
const Login = () => {
  const [email, setEmail] = useState(''); //stores email
  const [password, setPassword] = useState(''); //stores password
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); //signs in user with email and password
      alert('Logged in!'); //success message
    } catch (error) {
      alert(error.message); //error
    }
  };

  //Login page
  return (
    <div>
      <h2>Login</h2>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" /> {/*Where user enters email*/}
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" /> {/*Where user enters password*/}
      <button onClick={handleLogin}>Login</button> {/*Login button*/}
      <p className="signup-text">
                    Don't have an account? <Link to="/Signup">Sign up</Link> {/* Link to SignUp page */}
    </p>
    </div>
  );
};



export default Login;
