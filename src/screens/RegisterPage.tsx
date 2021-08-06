import React, { useState } from "react";
import "../css/RegisterPage.css";
import axios, { AxiosResponse, AxiosError } from "axios";
import { localApi } from "../utils/variables";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const hasWhiteSpace = (e: string) => {
    return e.indexOf(" ") >= 0;
  };
  const registerFormValidation = () => {
    let valid = false;

    if (username.length < 5) {
      setError("Username must have at least 6 characters");
      setSuccess("");
    } else if (hasWhiteSpace(password) || hasWhiteSpace(username)) {
      setError("Username or password cannot have white space");
      setSuccess("");
    } else if (password.length < 5) {
      setError("Password must have at least 6 characters");
      setSuccess("");
    } else if (confirmPass !== password) {
      setError("Password does not match");
      setSuccess("");
    } else {
      valid = true;
    }
    return valid;
  };

  const updateUsername = (e: any) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const updateEmailState = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const updateConfirmPass = (e: any) => {
    e.preventDefault();
    setConfirmPass(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    const isValid = registerFormValidation();

    if (isValid) {
      axios
        .post( localApi + "/user/register", {
          name: username,
          email: email,
          password: password,
        })
        .then((res: AxiosResponse) => {          
          setSuccess(res.data);
          setError("");
        })
        .catch((err: AxiosError) => {
          if (err.response!) {            
            setError(err.response?.data);
            setSuccess("");
          } else {
            setError("Server not found");
            setSuccess("");
          }
        });
    }
  };

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
            <input
              type="text"
              name="username"
              placeholder=" Username"
              onChange={updateUsername}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder=" Email"
              onChange={updateEmailState}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder=" Password"
              onChange={updatePassword}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              name="confirmPassword"
              placeholder=" Confirm Password"
              onChange={updateConfirmPass}
              required
            />
          </div>

          <div id="register-error" className="message-error">
            {error}{" "}
          </div>
          <div id="register-success" className="message-success">
            {success}{" "}
          </div>

          <div className="form-footer">
            <a id="form-link" href="/login">
              {" "}
              Already have an account? Login{" "}
            </a>
            <button id="register-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
