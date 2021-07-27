import React from "react";
import "../css/ChatContainer.css";

export default function ChatContainer() {
  return (
    <div className="current-conversation">
      <div id="friends-mail"> </div>
      <form id="chat-form" className="chat-form">
        <div className="input-wrapper">
          <input type="text" name="message" placeholder="Enter your message" />
        </div>
        <button>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          Submit
        </button>
      </form>
      <div id="chat-messages" className="chat-messages"></div>
    </div>
  );
}
