import React, { useState, useContext } from 'react'
import '../css/LoginPage.css'
import axios, { AxiosError } from 'axios'
import { Redirect } from 'react-router-dom'
import { localApi } from '../utils/variables'
import * as utils from '../utils/storage'
import { AuthUserContext } from '../context/AuthUserContext'
import { AuthUserInterface } from '../interfaces/UserInterface'

export default function LoginPage() {
  const context = useContext(AuthUserContext)
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const updateEmailState = (e: any) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const updatePassword = (e: any) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const submitHandler = async (e: any) => {
    e.preventDefault()

    try {
      const response = await axios.post(localApi + '/user/login', {
        email: email,
        password: password,
      })
      const data = await response.data as AuthUserInterface

      setSuccess('Login successfully')
      setError('')

      const authUserData = {
        id: data.id,
        name: data.name,
        email: data.email,
        token: data.token
      }
      
      // save token to local storage & save userData
      utils.setAuthUser('user', response.data)
      context.authUser = authUserData

      setTimeout(() => {
        setIsLogin(true)
      }, 1000)

    } catch (error) {
      const err = error as AxiosError
      if (err.response) {
        setError(err.response!.data)
        setSuccess('')
      } else {
        setError('Server not found')
        setSuccess('')
      }
    }
  }
  if (isLogin) {
    return <Redirect to="/" />
  }

  return (
    <div className="log-in-container">
      <div className="form-container">
        <div className="form-header">
          <span>
            <h1>
              <i className="fa fa-comments" aria-hidden="true"></i>
              Chat Login
            </h1>
          </span>
        </div>

        <form id="form-log-in" onSubmit={submitHandler}>
          <div className="input-wrapper">
            <input type="email" name="email" placeholder=" Email" onChange={updateEmailState} required />
          </div>

          <div className="input-wrapper">
            <input type="password" name="password" placeholder=" Password" onChange={updatePassword} required />
          </div>

          <div className="message message-error">{error}</div>
          <div className="message message-success">{success}</div>

          <div className="form-footer">
            <a id="form-link" href="/register">
              Not yet have an account? Register
            </a>
            <button type="submit" id="log-in-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
