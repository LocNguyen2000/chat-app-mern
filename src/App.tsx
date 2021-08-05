import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatPage from "./screens/ChatPage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}