import {createContext} from "react"
import { AuthUserInterface } from "../interfaces/UserInterface"

// for sharing user data across all components
export const AuthUserContext = createContext({
   authUser: {} as AuthUserInterface
})