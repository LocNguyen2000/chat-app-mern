import React from "react";
import '../css/RegisterContainer.css'

export default function RegisterContainer(){
    return (
        <div className = "register-container">
            <div className="form-container">
                <div className="form-header">
                    <span>
                        <h2>
                            <i className="fa fa-users" aria-hidden="true"></i>
                            Register Form 
                        </h2>
                    </span>
                </div>
                <form id="form-register">
                    <div className="name-wrapper">
                        <div className="input-wrapper">
                            <input type="text" name="firstname" placeholder=" First name" />
                            <div id = "first-name-error" className = "message-error"> </div>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="lastname" placeholder=" Last name" />
                            <div id = "last-name-error" className = "message-error"> </div>

                        </div>
                    </div>

                    <div className="input-wrapper">
                        <input type= "email" name="email" placeholder=" Email"/>
                        <div id = "email-error" className = "message-error"> </div>

                    </div>

                    <div className="input-wrapper">
                        <input type="password" name = "password" placeholder=" Password"/>
                        <div id = "password-error" className = "message-error"> </div>

                    </div>

                    <div className="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder=" Confirm Pass"/>
                        <div id = "confirm-password-error" className = "message-error"> </div>
                    </div>

                    <div id = "register-error" className = "message-error">  </div>
                    <div id = "register-success" className = "message-success">  </div>

                    <div className="form-footer">
                        <a id = "form-link" href="#"> Already have an account? Login</a>
                        <button id = "register-btn" >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}