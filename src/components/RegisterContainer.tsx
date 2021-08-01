import React, { useState } from "react";
import "../css/RegisterContainer.css";

export default function RegisterContainer() {
  const [username, setUsername] = useState<string | undefined>();
  const [userMail, setUserMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const updateUsername = (e: any) => {
    e.preventDefault();
    setUsername(e.target.username)
  };
  const updateEmailState = (e: any) => {
    e.preventDefault();
    setUserMail(e.target.email);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.password);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

  }

  return (
    <div className="register-container">
      <div className="form-container">
        <div className="form-header">
          <span>
            <h2>
              <i className="fa fa-users" aria-hidden="true"></i>
              Register Form
            </h2>
          </span>
        </div>
        <form id="form-register" onSubmit={submitHandler}>
          <div className="input-wrapper">
            <input type="text" name="username" placeholder=" Username" onChange= {updateUsername}/>
          </div>

          <div className="input-wrapper">
            <input type="email" name="email" placeholder=" Email" onChange={updateEmailState}/>
          </div>

          <div className="input-wrapper">
            <input type="password" name="password" placeholder=" Password" onChange={updatePassword}/>
          </div>

          <div className="input-wrapper">
            <input type="password" name="confirmPassword" placeholder=" Confirm Pass" />
          </div>

          <div id="register-error" className="message-error">{error} </div>
          <div id="register-success" className="message-success">{success} </div>

          <div className="form-footer">
            <a id="form-link" href="/login">  Already have an account? Login </a>
            <button id="register-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
