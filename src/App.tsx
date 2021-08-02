import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ConversationsContainer from "./components/ConversationsContainer";
import ChatContainer from "./components/ChatContainer";
import RegisterContainer from "./components/RegisterContainer";
import LoginContainer from "./components/LoginContainer";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/login'>
          <LoginContainer/>
        </Route>
        <Route exact path = '/register'>
          <RegisterContainer/>
        </Route>
        <Route exact path = '/'>
          <NavBar></NavBar>
          <div className="body">
            <ConversationsContainer />
            <ChatContainer />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
