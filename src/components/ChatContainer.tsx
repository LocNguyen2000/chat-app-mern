import React, { useState, useEffect, useContext } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'

import { ConversationInterface, messageInterface } from '../interfaces/ConversationInterface'
import { AuthUserContext, CurrentConversationContext } from '../context/AuthUserContext'
import { localApi } from '../utils/variables'
import '../css/ChatContainer.css'

export default function ChatContainer() {
  const authUserContext = useContext(AuthUserContext)
  const { currentChat, setCurrentChat } = useContext(CurrentConversationContext)

  const [messages, setMessages] = useState<messageInterface[]>([])
  const [message, setMessage] = useState<messageInterface>()

  useEffect(() => {
    const getChatMessages = (cnv: ConversationInterface) => {
      if (!cnv.messages) return []
      return cnv.messages as messageInterface[]
    }

    setCurrentChat(currentChat)
    setMessages(getChatMessages(currentChat))
  }, [currentChat, setCurrentChat])

  const getFriendEmail = (users: string[], currentUser: string) => {
    if (users && currentUser) {
      const friendsIndex = users.length - users.indexOf(currentUser) - 1
      return users[friendsIndex]
    }
    return
  }
  const getCurrentTitle = (currentChat: ConversationInterface) => {
    if (currentChat) {
      return currentChat.title
    }
    return
  }

  const updateMsgState = (e: any) => {
    e.preventDefault()
    const updatedMsg = {
      content: e.target.value,
      user: authUserContext.authUser.email,
      date: new Date().toLocaleString(),
    }
    setMessage(updatedMsg)
  }

  const submitHandler = async (e: any) => {
    try {
      e.preventDefault()
      if (message) {
        const res: AxiosResponse = await axios.post(localApi + '/chat/send', {
          id: currentChat.id,
          content: message.content,
          user: message.user,
          date: message.date,
        })
        const data = await res.data
        setMessages(data.messages)
        setMessage({} as messageInterface)
        e.target.message.value = ''
      }
    } catch(error) {
      const err = error as AxiosError
      if (err.response){
        return alert(err.response!.data)
      }
      console.log(error);
    }
  }

  return (
    <div className="current-conversation">
      <div className="chat-header">
        <div className="friend-mail" id="friend-mail">
          {getFriendEmail(currentChat.users, authUserContext.authUser.email)}
        </div>
        <div className="chat-title"> {getCurrentTitle(currentChat)}</div>
      </div>

      <form id="chat-form" className="chat-form" onSubmit={submitHandler}>
        <div className="input-wrapper">
          <input type="text" name="message" placeholder="Enter your message" onChange={updateMsgState} />
        </div>
        <button>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          Submit
        </button>
      </form>

      <div id="chat-messages" className="chat-messages">
        {messages.map((msg: messageInterface, index: number) => {
          let className = 'chat-message'
          if (msg.user === authUserContext.authUser.email) {
            className += ' your'
          }
          return (
            <div className={className} key={index}>
              <span> {msg.content} </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
