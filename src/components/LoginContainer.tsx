import React, { useState } from "react";
import "../css/LoginContainer.css";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Redirect } from "react-router-dom";
import { localApi } from "../config";

export default function LoginContainer() {
  const [userMail, setUserMail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  const updateEmailState = (e: any) => {
    e.preventDefault();
    setUserMail(e.target.value);
  };
  const updatePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (userMail && password) {
      console.log(userMail + " " + password);

      axios
        .post( localApi + "/user/login", {
          email: userMail,
          password: password,
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          alert("switch to chat page");
          setSuccess("Login successfully");
          setError("");
          setIsLogin(true);
        })
        .catch((err: AxiosError) => {
          console.log(err);
          if (
            err.response!.status === 400 ||
            err.response!.status === 409 ||
            err.response!.status === 500
          ) {
            setError(err.response?.data);
            setSuccess("");
          } else {
            setError("Unrecognized Error");
            setSuccess("");
          }
        });
    } else {
      setError("Login failed");
      setSuccess("");
    }
  };
  if (isLogin) {
    return <Redirect to="/" />;
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
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
