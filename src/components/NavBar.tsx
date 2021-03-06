import React, { useState, useContext } from 'react'

import { AuthUserContext } from '../context/AuthUserContext'
import { deleteAuthUser } from '../utils/storage'
import '../css/NavBar.css'

export default function NavBar() {
  const context = useContext(AuthUserContext)
  const [username] = useState(context.authUser.name)

  const signOutEvent = (e: any) => {
    e.preventDefault()
    deleteAuthUser()
    // eslint-disable-next-line no-restricted-globals
    window.location.reload()
  }

  return (
    <nav className="main-nav-bar">
      {/* <div id="community-container" className="nav-cards-container">
        <button>
          <i className="fa fa-users" aria-hidden="true"></i>
          Add
        </button>
      </div> */}
      <div id="user-profile-container" className="nav-cards-container">
        <span>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <span id="user-email" className="user-email">
            {username ? username : ''}
          </span>
        </span>
      </div>
      <div className="nav-cards-container">
        <button id="sign-out-btn" onClick={signOutEvent}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Log out
        </button>
      </div>
    </nav>
  )
}
