import React from 'react'
import CategoriesCardItem from './CategoriesCardItem';
import cardsData from "./CategoriesCardData"
import { NavLink } from 'react-router-dom';



class CategoriesCards extends React.Component {
    constructor() {
        super()
        this.state = {
         cardData : this.cardsDataArray
        }
    }

    render() {
// looping through the array to create no. of cards from categories card item component
   const cardsDataArray = cardsData.map(card => {
          return <CategoriesCardItem card={card} />     
   })

    return (
        <div className="row">

        {cardsDataArray}

    </div>           
    )  
    }

}
export default CategoriesCards
