import React from "react";
import "../css/NavBar.css";

export default function NavBar() {
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
          <span id="user-email" className="user-email">
            Not Sign In?
          </span>
        </span>
        <button id="sign-out-btn">
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Sign out
        </button>
      </div>
    </nav>
  );
}
