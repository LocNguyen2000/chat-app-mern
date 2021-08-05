import React from "react";
import { Redirect } from "react-router-dom";
import ConversationsContainer from "../components/ConversationsContainer";
import ChatContainer from "../components/ChatContainer";
import NavBar from "../components/NavBar";
import * as TokenTool from "../utils/token";

export default function ChatPage() {
  const hasToken = TokenTool.getToken()
  
  if (!hasToken){
    return <Redirect to ='/login'/> 
  }
  return (
    <div>
      <NavBar />
      <div className="body">
        <ConversationsContainer />
        <ChatContainer />
      </div>
    </div>
  );
  
}
