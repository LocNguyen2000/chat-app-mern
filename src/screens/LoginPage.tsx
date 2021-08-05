import React, { useState } from "react";
import "../css/LoginPage.css";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Redirect } from "react-router-dom";
import { localApi } from "../utils/variables";
import * as TokenTool from "../utils/token";

export default function LoginPage() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  const updateEmailState = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (email && password) {
      axios
        .post(localApi + "/user/login", {
          email: email,
          password: password,
        })
        .then((response: AxiosResponse) => {
          // set success state
          setSuccess("Login successfully");
          setError("");
          alert("switch to chat page");

          // set token to local storage
          TokenTool.setToken(response.data.token)

          setIsLogin(true);
        })
        .catch((err: AxiosError) => {
          if (err) {
            setError(err.response?.data);
            setSuccess("");
          } else {
            setError("Server not found");
            setSuccess("");
          }
        });
    } else {
      setError("Login failed");
      setSuccess("");
    }
  };
  if (isLogin) {
    return <Redirect to="/home" />;
  }

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

          <div className="message message-error">{error}</div>
          <div className="message message-success">{success}</div>

          <div className="form-footer">
            <a id="form-link" href="/register">
              Not yet have an account? Register
            </a>
            <button type="submit" id="log-in-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
