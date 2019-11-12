import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    credentials: {
      username: "",
      password: ""
    },
    isLoggedIn: false
  });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginCredentials({ ...loginCredentials, isLoggedIn: true });
    } else {
      setLoginCredentials({ ...loginCredentials, isLoggedIn: false });
    }
  }, []);

  const handleChange = e => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value
    });
    // console.log(loginCredentials);
  };

  const handleLogIn = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/api/login", loginCredentials)
      .then(response => {
        console.log("RESPONSE: ", response);
        const { data } = response;
        sessionStorage.setItem("token", data.payload);
      })
      .catch(error => console.error("Log In: ", error));
  };

  return (
    <div className="login-form-container">
      <h1>{loginCredentials.isLoggedIn ? "Logged In" : "Please Log In"}</h1>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
