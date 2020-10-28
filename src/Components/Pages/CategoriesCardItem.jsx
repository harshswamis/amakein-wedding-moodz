import React from 'react'
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
        <img src={Web} className="img-fluid my_image" alt="..." />
    <h5 className="image_text">{this.props.card.cardText}</h5>
    </div>   
         
    )
}
}

export default CategoriesCardItem
