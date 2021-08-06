import React, { useState, useContext } from "react";
import { AuthUserContext } from "../context/AuthUserContext";
import "../css/NavBar.css";
import { deleteAuthUser } from "../utils/storage";


export default function NavBar() {
  const context = useContext(AuthUserContext)
  const [ username ] = useState(context.authUser.name)

  const signOutEvent = (e: any) => {
    e.preventDefault()
    deleteAuthUser()
    // eslint-disable-next-line no-restricted-globals
    window.location.reload()
  }

  return (
    <nav className="main-nav-bar">
      <div id="add-new-container" className="nav-cards-container">
        <div id="add-new">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
      <div id="community-container" className="nav-cards-container">
        <div id="community">
          <i className="fa fa-users" aria-hidden="true"></i>
          Community
        </div>
      </div>
      <div id="user-profile-container" className="nav-cards-container">
        <span>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <span id="user-email" className="user-email"> { username ? username : '' } </span>
        </span>
        <button id="sign-out-btn" onClick = {signOutEvent}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Sign out
        </button>
      </div>
    </nav>
  );
}
