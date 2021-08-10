import {createContext} from "react"
import { ConversationInterface } from "../interfaces/ConversationInterface"
import { AuthUserInterface } from "../interfaces/UserInterface"

export interface currentConversationTypes{
   currentChat: ConversationInterface,
   setCurrentChat: (value: ConversationInterface) => void
}

// for sharing user data across all components
export const AuthUserContext = createContext({
   authUser: {} as AuthUserInterface
})

export const ConversationsContext = createContext({
   conversations: [] as ConversationInterface[]
})

export const CurrentConversationContext = createContext<currentConversationTypes>({
   currentChat: {} as ConversationInterface,
   setCurrentChat: () => {}
})