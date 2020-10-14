import React from 'react'
import {NavLink} from "react-router-dom";
import "../Components/NavBar.css";

function NavBar() {
    return (
<>
<section>
<div className="container-fluid nav_bg">
    <div className="row">
         <div className="col-10 mx-auto">
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home"><span>WEDDING MOODZ</span></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <NavLink exact activeClassName="menu_active active" className="nav-link" to="/home"><span className="nav_menu_text">Home</span></NavLink>
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
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/"><button type="button" class="btn btn-danger shadow-none signup_button_edit">Sign Up</button></NavLink>
      </li>
    </ul>
  </div>
</nav>

<div data-spy="scroll" data-target="#navbar-example3" data-offset="0" tabindex="0">
  
</div>
         </div>
    </div>
</div>
</section>
        </>
    )
}

export default NavBar
