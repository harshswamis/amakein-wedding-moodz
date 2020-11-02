import React from 'react'
import {NavLink} from "react-router-dom";
import "../Components/NavBar.css";
import "./Pages/Modals/SignUpLogin"
import SignUpLogin from './Pages/Modals/SignUpLogin';
import WMLogo from "./Images/Logo/Main Logo_withouttext.png";

//Navigation Menu component

function NavBar(props) {
    return (
<>
<section>
<div className="container-fluid nav_bg">
    <div className="row d-flex justify-content-between navbarbg">
        <div className="col-sm-1"></div>
        <div className="col-sm-6 d-flex align-items-center">

{/* Wedding moodz logo and text */}
              <NavLink className="navbar-brand" to="/home">
                <img src={WMLogo} className="img-responsive wmlogo_navbar"></img>
                <span className="navbar_brand_logo">WEDDING MOODZ</span>     
              </NavLink>
              </div>
{/* <div className="col-1"></div> */}
       <div className="col-sm-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-end">        
              <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
              <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

{/* Menu bar */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mb-2 mb-lg-0">

{/* Home */}
                  <li className="nav-item active">
                    <NavLink exact activeClassName="menu_active active" className="nav-link" to="/">
                      <span className="nav_menu_text">Home</span></NavLink>
                  </li>
{/* Categories */}
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/categories"><span className="nav_menu_text">Categories</span></NavLink>
                  </li>
{/* Stories */}
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/stories"><span className="nav_menu_text">Stories</span></NavLink>
                  </li>
{/* Contact Us */}
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu_active" className="nav-link" to="/contactus" ><span className="nav_menu_text">ContactUs</span></NavLink>
                  </li>
{/* Sign Up */}
                  <li className="nav-item">
                    {/* <NavLink exact activeClassName="menu_active" className="nav-link" to="/"> */}
                    <div className="mt-1">
                      <button type="button" className="btn btn-danger shadow-none signup_button_edit" data-target="#SignUpLogin" data-toggle="modal">SignUp</button>
                      <SignUpLogin id="SignUpLogin" />
                    </div>
                      {/* </NavLink> */}
                  </li>
                </ul>
                </div>
                </div>
                </div>
            </nav>
         <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" tabIndex="0"></div>
       </div>
<div className="col-sm-1"></div>
         </div>
    </div>
</section>
        </>
    )
}

export default NavBar
