import React from 'react'
import {NavLink} from "react-router-dom"
import "../Pages/Categories.css";

import CategoriesBackground from "../Images/background-common.jpg";
import CategoriesCards from './CategoriesCards';
import Web from "../Images/img-1.jpg";


class Categories extends React.Component {

   constructor() {
       super()
       this.state = {
           displayItems : "row scroll_list"
       }

       this.handleClick = this.handleClick.bind(this)
   }

   //changing the css class to view all items onClick event handler
   handleClick() {
        this.setState(prevState => {
            if(prevState.displayItems === "row scroll_list"){
            return {displayItems : "row displayAllItems"}}
            
            return {displayItems : "row scroll_list"}

           //prevState.displayItems === "row scroll_list" ? this.setState({displayItems : "row displayAllItems"}) : this.state({displayItems : "row scroll_list"})

        })
   }

   //Categories background wallpaper setup 
   componentDidMount ()
   {
     document.body.style.backgroundImage = `url(${CategoriesBackground})`;
     document.body.style.backgroundPosition = "center";
     document.body.style.backgroundRepeat = "no-repeat";
     document.body.style.backgroundSize = "cover";   
   }

   render () {
    return (
        <>
<div className="page-one-bg">
<section id="categories_text_container">
<div className="container-fluid">
    <div className="row my-3 align-items-center">
        <div className="col-md-5"></div>
        <div className="col-md-2 mx-auto">
            <h1 className="text-center categories_text">Categories</h1>
        </div>

{/* view all button */}
        <div className="col-md-5 text-center">
            <button type="button" class="btn btn-danger shadow-none button_edit" onClick={this.handleClick}>View All</button>
        </div>
    </div>

{/* build your dream text section */}
    <div className="row my-4 align-items-center">
        <div className="col-12 col-sm-7 mx-auto">
        <h4 className="text-center category_content_text">Build your dream wedding team from the verified list of best wedding photographers, wedding venues, bridal makeup artists, wedding decor and more. We always choose our vendors who are from the best!</h4>
        </div>

    </div>
</div>
</section>
<section>
    <div className="container-fluid">
        <div className="row mb-5">
            <div className="col-sm-2 d-flex align-items-end justify-content-center">

{/* FAQ icon link */}
                <div className="row text-right">
                    <div className="d-none d-sm-block  col-sm-2 text-center faq_text">      
                    <NavLink active className="mr-4" to="/FAQs">
                        <i className="fas fa-question-circle"></i>
                    </NavLink>  
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-10 text-center">
                <div className={this.state.displayItems}>
                  <div className="col-12">

{/* categories cards component call */}
                    <CategoriesCards />                                               
                  </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
        </>
    )
                    }
}

export default Categories
