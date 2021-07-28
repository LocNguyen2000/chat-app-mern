import React, { useState } from "react";
import "../css/ConversationsContainer.css";

export default function ConversationsContainer() {
  const [conversations, setConversations] = useState<Array<string>>([]);
  const [conversationTitle, setConversationTitle] = useState<string>("");

  const updateConversationTitle = (e: any) => {
    setConversationTitle(e.target.value);
  };
  
  const submitHandler = (e: any) => {
    e.preventDefault();
    alert(conversationTitle);
    setConversations([...conversations, conversationTitle]);
    e.target.title.value = ""
  };

  return (
    <div className="conversations-container">
      <div className="header">
        <h2>CHAT APPLICATION </h2>
      </div>
      <div className="add-new-conv">
        <form className="add-new-form" onSubmit={submitHandler}>
          <input
            placeholder="New conversation title"
            name="title"
            type="text"
            onChange={updateConversationTitle}
          ></input>
          <br />
          <input placeholder="Your friend email" type="email"></input>
          <br />
          <button>Add</button>
          <br />
        </form>
      </div>
      <div className="conversations-list">
        <ul>
          {conversations.map((cnv) => {
            return <li> {cnv} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
