import React from 'react'
import {NavLink} from "react-router-dom";
import "../Components/NavBar.css";
import "./Pages/Modals/SignUpMobileLogin"
import SignUpMobileLogin from './Pages/Modals/SignUpMobileLogin';
import WMLogo from "./Images/Logo/logo1@4x_withouttext.png";

function NavBar() {
    return (
<>
<section>
<div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-1"></div>
       <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="row">
                <div className="col-6">
              <NavLink className="navbar-brand" to="/home">
                <div>
                <img src={WMLogo} class="img-responsive wmlogo_navbar"></img>
                <span className="navbar_brand_logo">WEDDING MOODZ</span>
                </div>
              </NavLink>
              </div>
              <div className="col-6">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink exact activeClassName="menu_active active" className="nav-link" to="/home">
                      <span className="nav_menu_text">Home</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/categories"><span className="nav_menu_text">Categories</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/stories"><span className="nav_menu_text">Stories</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/contactus"><span className="nav_menu_text">Contact Us</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/">
                      <button type="button" class="btn btn-danger shadow-none signup_button_edit" data-target="#SignUpMobileLogin" data-toggle="modal">Sign Up</button>
                      <SignUpMobileLogin id="SignUpMobileLogin" />
                      </NavLink>
                  </li>
                </ul>
                </div>
                </div>
                </div>
            </nav>
         <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" tabindex="0"></div>
       </div>
<div className="col-1"></div>
         </div>
    </div>
</section>
        </>
    )
}

export default NavBar
