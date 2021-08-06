import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import ConversationsContainer from "../components/ConversationsContainer";
import ChatContainer from "../components/ChatContainer";
import NavBar from "../components/NavBar";
import { AuthUserContext } from "../context/AuthUserContext";

export default function ChatPage() {
  const context = useContext(AuthUserContext)
  const authUser = context.authUser
  
  if (!authUser.token){
    return <Redirect to ='/login'/> 
  }
  
  return (
    <>
        <NavBar />
        <div className="body">
          <ConversationsContainer />
          <ChatContainer />
        </div>
    </>

  );
  
}
