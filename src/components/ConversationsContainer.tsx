import { useEffect, useState, useContext } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import {
  AuthUserContext,
  ConversationsContext,
  CurrentConversationContext,
} from "../context/AuthUserContext";
import "../css/ConversationsContainer.css";
import { ConversationInterface } from "../interfaces/ConversationInterface";
import { localApi } from "../utils/variables";

export default function ConversationsContainer(props: any) {
  const authUserContext = useContext(AuthUserContext);
  const conversationContext = useContext(ConversationsContext);
  const { currentChat, setCurrentChat } = useContext(CurrentConversationContext)

  const userEmail = authUserContext.authUser.email;

  const [conversations, setConversations] = useState<ConversationInterface[]>([]);
  const [conversationTitle, setConversationTitle] = useState<string>("");
  const [friendEmail, setFriendEmail] = useState<string>("");

  useEffect(() => {
    setConversations(conversationContext.conversations)
    setCurrentChat(currentChat)    
  }, [conversationContext, currentChat, setCurrentChat])

  const updateConversationTitle = (e: any) => {
    setConversationTitle(e.target.value);
  };
  const updateFriendEmail = (e: any) => {
    setFriendEmail(e.target.value);
  };
  const updateCurrentConversation = (cnv: ConversationInterface) => {
    if (cnv){
      setCurrentChat(cnv)
      console.log(currentChat);      
    }
  }

  const displayConversation = (cnv: ConversationInterface, index: number) => {
    const showMsg =
      cnv.messages.length > 0 ? cnv.messages[0].content : "Say your hello";
    return (
      <li key={index} className="chat-box" onClick={() => {updateCurrentConversation(cnv)}}>
        <h2>{cnv.title} </h2>
        <h3>{showMsg}</h3>
      </li>
    );
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(conversationTitle, " - ", friendEmail);
    
    axios
      .post(localApi + "/chat/add", {
        title: conversationTitle,
        users: [userEmail, friendEmail],
      })
      .then((res: AxiosResponse) => {
        console.log(res.data);
        setConversations([...conversations, res.data])
        alert('Add new conversation')
        setConversationTitle('')
        setFriendEmail('')
        e.target.title.value = ""
        e.target.friendEmail.value = ""
      })
      .catch((err: AxiosError) => {
        alert(err.response!.data)
        console.log(err.response!.data);
      });
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
          <input
            placeholder="Your friend email"
            name="friendEmail"
            type="email"
            onChange={updateFriendEmail}
          ></input>
          <br />
          <button>Add</button>
          <br />
        </form>
      </div>
      <div className="conversations-list">
        <ul>
          {conversations.map((cnv, index) => {
            return displayConversation(cnv, index);
          })}
        </ul>
      </div>
    </div>
  );
}
