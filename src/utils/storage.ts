import { secretKey } from './variables'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AuthUserInterface } from '../interfaces/UserInterface'

export const verifyAuthUser = (token: string) => {
  try {
    if (token) {
      const payload = jwt.verify(token, secretKey) as JwtPayload
      if (!payload) {
        return false
      }
      return true
    }
    return false
  } catch (error) {
    console.log(error)
    deleteAuthUser()
    return false
  }
}

export const getAuthUser = (key: string) => {
  let user = localStorage.getItem(key)
  if (user) {
    user = JSON.parse(user)
    return user
  }
  return {}
}

export const setAuthUser = (key: string, user: AuthUserInterface) => {
  localStorage.setItem(key, JSON.stringify(user))
}

export const deleteAuthUser = () => {
  localStorage.clear()
}