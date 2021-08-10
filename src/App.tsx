import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ChatPage from "./screens/ChatPage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import { AuthUserContext } from "./context/AuthUserContext";
import * as utils from './utils/storage'
import { AuthUserInterface } from "./interfaces/UserInterface";
import "./App.css";


export default function App() {
  const data = {
    authUser: utils.getAuthUser('user') as AuthUserInterface
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ contextValue, setContextValue ] = useState( data )
  return (
    <div className="App">
      <AuthUserContext.Provider value={contextValue}>
        <Switch>
          <Route exact path="/" component={ChatPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </AuthUserContext.Provider>
      
    </div>
  );
}