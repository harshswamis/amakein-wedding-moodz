import React from 'react'
import { NavLink } from 'react-router-dom';
import Web from "../Images/img-1.jpg";

class CategoriesCardItem extends React.Component {

     constructor () {
         super()
         this.state = {
            
         }
     }

render() {
    
    return (

// card with its text        
        <div className="my-4 col-xl-4 col-lg-3 col-2">  
            <NavLink to={`/categories/${this.props.card.id}`}>
                <img src={Web} className="img-fluid my_image" alt="..." />
            </NavLink>
                <h5 className="image_text text-center">{this.props.card.cardText}</h5>          
        </div>   
         
    )
}
}

export default CategoriesCardItem
