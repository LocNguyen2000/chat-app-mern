import { useState, useContext, useEffect } from "react";
import axios, { AxiosResponse} from "axios";
import { localApi } from "../utils/variables";
import { Redirect } from "react-router-dom";
import ConversationsContainer from "../components/ConversationsContainer";
import ChatContainer from "../components/ChatContainer";
import NavBar from "../components/NavBar";
import { verifyAuthUser } from '../utils/storage'
import { AuthUserContext, ConversationsContext, CurrentConversationContext } from "../context/AuthUserContext";
import { ConversationInterface } from "../interfaces/ConversationInterface";

export default function ChatPage() {
  const context = useContext(AuthUserContext)
  const authUser = context.authUser
  
  const [userConversations, setUserConversations ] = useState<ConversationInterface[]>([])
  const [currentConversation, setCurrentConversation] = useState<ConversationInterface>({} as ConversationInterface)
  // const [expired, setExpired] = useState<Boolean>(false)

  useEffect(() => {
    const getConversationLists = async (email: string) => {
      try {
        const cnvList: ConversationInterface[] = []
        const res : AxiosResponse = await axios.post(localApi + '/chat/', { email: email })
  
        const data = await res.data 
        for (let cnv of data){
          cnvList.push(cnv)          
        }
        setUserConversations(cnvList)
        // setCurrentConversation()
        console.log('Get conversation done');
      } catch (error) {
        console.log(error);
      }
    }
    // setExpired(verifyAuthUser(authUser.token))
    getConversationLists(authUser.email)
  }, [authUser])
    
  if (!verifyAuthUser(authUser.token)){
    return <Redirect to ='/login'/> 
  }
  
  return (
    <>
      {console.log(userConversations[0])}
      <ConversationsContext.Provider value={{conversations: userConversations}}>
        <NavBar />
          <div className="body">
          <CurrentConversationContext.Provider value={{currentChat: currentConversation, setCurrentChat: setCurrentConversation}}>
            <ConversationsContainer/>
            <ChatContainer/>
          </CurrentConversationContext.Provider>
          </div>
      </ConversationsContext.Provider>
    </>

  );
  
}
