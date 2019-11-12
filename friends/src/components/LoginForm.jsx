import React, {useState} from "react";
import axios from "axios";

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    credentials: {
      username: '',
      password: ''
    },
    isLoggedIn: false
  });

  const handleLogIn = e => {
    e.preventDefault();
    console.log("Credentials: ", loginCredentials);
  };

  const handleChange = e => {
    setLoginCredentials({...loginCredentials, [e.target.name]: e.target.value});
    // console.log(loginCredentials);
  };

  return (
    <div className="login-form-container">
      <input type="text" name="username" placeholder="Username..."
             onChange={handleChange}/>
      <input type="text" name="password" placeholder="Password..."
             onChange={handleChange}/>
      <button type="submit" onClick={handleLogIn}>Log In</button>
    </div>
  );
}

export default LoginForm;