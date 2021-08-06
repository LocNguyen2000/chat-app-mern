import React, { useState, useContext } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { AuthUserContext } from "../context/AuthUserContext";
import "../css/ConversationsContainer.css";
import { localApi } from "../utils/variables";

const getConversationLists = (email: string) => {
  const cnvList: string[] = []
  axios.post(localApi + '/chat/', { email: email }).then((res: AxiosResponse) => {
    for (let cnv of res.data){
      console.log(cnv);
      cnvList.push(cnv.title)
    }
  }).catch((err: AxiosError) => {
    console.log(err);
  })
  
  return cnvList;
}

export default function ConversationsContainer() {
  const context = useContext(AuthUserContext)

  const userEmail = context.authUser.email;
  console.log(userEmail);
  
  const [conversations, setConversations] = useState<Array<string>>(getConversationLists(userEmail));
  const [conversationTitle, setConversationTitle] = useState<string>("");
  const [friendEmail, setFriendEmail] = useState<string>("")

  const updateConversationTitle = (e: any) => {
    setConversationTitle(e.target.value);
  };
  const updateFriendEmail = (e: any) => {
    setFriendEmail(e.target.value)
  }
  
  const submitHandler = (e: any) => {
    e.preventDefault();
    setConversations([...conversations, conversationTitle]);
    setConversationTitle('')
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
            required
          ></input>
          <br />
          <input placeholder="Your friend email" type="email" onChange={updateFriendEmail} ></input>
          <br />
          <button>Add</button>
          <br />
        </form>
      </div>
      <div className="conversations-list">
        <ul>
          {conversations.map((cnv, index) => {
            return <li key={index}> {cnv} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
