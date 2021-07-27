import React from "react";
import "../css/ConversationsContainer.css";

export default function ConversationsContainer() {
  return (
    <div className="conversations-container">
      <div className="header">
        <h2>CHAT APPLICATION </h2>
      </div>
      <div className="add-new-conv">
        <form className = "add-new-form">
          <input placeholder="New conversation title"></input><br/>
          <input placeholder="Your friend email"></input><br/>
          <button>Add</button><br/>
        </form>

      </div>
      <div className="conversations-list">
        <ul>
          <li>Group 1</li>
          <li>Group 2</li>
          <li>Group 3</li>
        </ul>
      </div>
    </div>
  );
}
