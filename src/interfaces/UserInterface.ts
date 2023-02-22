export interface UserInterface {
  id: number
  name: string
  email: string
}
export interface AuthUserInterface {
  id: number
  name: string
  email: string
  token: string
}

export interface RegisterInterface {
  username: string
  email: string
  password: string
  confirmPassword: string
}
