import React from 'react'
import CategoriesCardItem from './CategoriesCardItem';
import cardsData from "./CategoriesCardData"



class CategoriesCards extends React.Component {
    constructor() {
        super()
        this.state = {
         cardData : cardsData
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
