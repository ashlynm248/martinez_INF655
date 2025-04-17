import React, { useState } from "react";
import { UserAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import FormInput from "./FormInput"; 
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";

//setting everything up for the sign up/login form
const Login = () => {
  const { SignUp } = UserAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const navigate = useNavigate();

  const { user, createUser, signIn } = UserAuth();

  const onFormSwitch = () => {
    setShowRegisterForm((prevState) => !prevState);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName(""); 
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match"); //if the passwords in the form do not match, user will be informed
      return;
    }

    const data = { name, email, password, confirmPassword };
    console.log(data);

    try {
      await createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      });
    } catch (err) {
      console.log(err);
    }

    //clears the form after the user has registered
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

    // This function handles the sign-in process
  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () => {
    if (showRegisterForm) {
      return (
        //registration form
        <>
          <FormHeader title="Register" />
          <form onSubmit={onSubmit}>
            <FormInput //user inserts name
              description="Name"
              type="text"
              className="nameInput"
              placeholder="Enter Your Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput //user inserts email they want to use
              description="Email"
              type="email"
              className="emailInput"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput //user inserts password they want to use
              description="Password"
              type="password"
              className="password"
              placeholder="Enter Your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormInput //user reinserts password for confirmation
              description="Confirm Password"
              type="password"
              className="password"
              placeholder="Confirm Your Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormButton title="Register" /> 
            <div className="registerLink">
              <p>Already have an account?</p> 
              <Link to="#" onClick={onFormSwitch}> 
                Login here! 
              </Link>
            </div>
          </form>
        </>
      );
    }
    return (
      <>
        <FormHeader title="Login" />
        <form onSubmit={onSignIn}>
          <FormInput //user inserts email to login
            description="Email"
            type="email"
            className="emailInput"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput //user inserts password to login
            description="Password"
            type="password"
            className="password"
            placeholder="Enter Your Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormButton title="Log In" /> 
          <div className="alternativeLogin">
            <label>Or Sign in with:</label>
            <div className="iconGroup">
              <FaFacebook id="facebookIcon" />
              <FaGithub id="gitIcon" />
              <FaGoogle id="googleIcon" />
            </div>
          </div>
          <div className="registerLink">
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password?
            </Link>
            <p>Don't have an account?</p>
            <Link to="#" id="registerLink" onClick={onFormSwitch}>
              Register Here!
            </Link>
          </div>
        </form>
      </>
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]); 

  return <div className="loginForm">{renderForm()}</div>;
};

export default Login;
  
  
  
  
  
  
  
  /*const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
//if the user logs in successfully, they will get an alert
      alert("Logged in successfully");
    } catch (error) {
//if they have trouble, they will get an error message
      alert(error.message);
    }
  };


//This is the form that allows the user to enter their email and password
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
*/