import React, { useState } from "react";
import "../css/LoginContainer.css";

export default function LoginContainer() {
  const [userMail, setUserMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const updateEmailState = (e: any) => {
    e.preventDefault();
    setUserMail(e.target.email);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    let p = e.target.password
    setPassword(p);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (userMail && password) {
      alert(userMail + " " + password);
      setSuccess('Login successfully')
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

          {/* <div className="message message-error" >{error}</div> */}
          <div className="message message-success" >{success}</div>

          <div className="form-footer">
            <a id="form-link" href="/register">
              Not yet have an account? Register
            </a>
            <button id="log-in-btn"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
}
