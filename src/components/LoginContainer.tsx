import React, { useState } from "react";
import '../css/LoginContainer.css'

export default function LoginContainer() {

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
        <form id="form-log-in">
          <div className="input-wrapper">
            <input type="email" name="email" placeholder=" Email" />
            <div id="email-error" className="message-error">
              {" "}
            </div>
          </div>

          <div className="input-wrapper">
            <input type="password" name="password" placeholder=" Password" />
            <div id="password-error" className="message-error">
              {" "}
            </div>
          </div>

          <div id="log-in-error" className="message-error">
            {" "}
          </div>

          <div className="form-footer">
            <a id="form-link" href="#">
              {" "}
              Not yet have an account? Register{" "}
            </a>
            <button id="log-in-btn"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
}
