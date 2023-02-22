export interface ConversationInterface {
  id: number
  title: string
  users: string[]
  messages: messageInterface[]
}

export interface messageInterface {
  content: string
  user: string
  date: string
}
