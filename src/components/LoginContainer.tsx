import React, { useState, useEffect } from "react";
import "../css/LoginContainer.css";
import axios from "axios";

export default function LoginContainer() {
  const [userMail, setUserMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const updateEmailState = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);

    setUserMail(e.target.value);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    
    setPassword(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(userMail, " ", password);
    
    if (userMail && password) {
      alert(userMail + " " + password);
      setSuccess('Login successfully')
      
      // axios.post('http://localhost:8000/user/login', {
      //   email: userMail,
      //   password: password,
      // }).then((token) => {
      //   console.log(token);
      //   setSuccess('Login successfully')
      // }).catch(err => {
      //   console.log(err);
      //   setError(err.message)
      // })
    }
    else setError('Login failed')
  
  };

  return (
    <div className="log-in-container">
      <div className="form-container">
        <div className="form-header">
          <span>
            <h1>
              <i className="fa fa-comments" aria-hidden="true"></i>
              Chat Login
            </h1>
          </span>
        </div>

        <form id="form-log-in" onSubmit={submitHandler}>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder=" Email"
              onChange={updateEmailState}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder=" Password"
              onChange={updatePassword}
            />
          </div>

          <div className="message message-error" >{error}</div>
          <div className="message message-success" >{success}</div>

          <div className="form-footer">
            <a id="form-link" href="/register">
              Not yet have an account? Register
            </a>
            <button type='submit' id="log-in-btn"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
}
