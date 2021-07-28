import React, { useState } from "react";
import messsageInterface from "../interfaces/MessageInterface";
import "../css/ChatContainer.css";

export default function ChatContainer() {
  const [messages, setMessages] = useState<messsageInterface[]>([]);
  const [message, setMessage] = useState<messsageInterface>();

  const updateMsgState = (e: any) => {
    e.preventDefault()
    let updatedMsg = {
      content: e.target.value,
      user: 'your',
      date: new Date().toLocaleDateString(),
    }
    setMessage(updatedMsg)
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    if (message) setMessages([...messages, message ])
    e.target.message.value = ""
  }

  return (
    <div className="current-conversation">
      <div id="friends-mail"> </div>
      <form id="chat-form" className="chat-form" onSubmit = {submitHandler}>
        <div className="input-wrapper">
          <input type="text" name="message" placeholder="Enter your message" onChange = {updateMsgState}/>
        </div>
        <button>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          Submit
        </button>
      </form>
      <div id="chat-messages" className="chat-messages">
        {messages.map((msg) => {
          return (
            <div className = {"chat-message " + msg.user}>
              <span> {msg.content} </span>
            </div>
          )
        })}
      </div>
    </div>
  );
}
