import React from "react";
import NavBar from "./components/NavBar";
import ConversationsContainer from "./components/ConversationsContainer";
import ChatContainer from "./components/ChatContainer";
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className = 'body'>
        <ConversationsContainer/> 
        <ChatContainer/>
      </div>
    </div>
  );
}

export default App;
