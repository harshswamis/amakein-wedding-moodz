import React from 'react'
import CategoriesCardItem from './CategoriesCardItem';
import cardsData from "./CategoriesCardData"
import { NavLink } from 'react-router-dom';



class CategoriesCards extends React.Component {
    constructor() {
        super()
        this.state = {
         cardData : this.cardsDataArray //items array
        }
    }

    componentDidMount() {
         this.fetchItems();
    }

    fetchItems = async() => {
         const data = await fetch("fetch_url");
         const items = await data.json();
         console.log(items.data);
    }

    render() {
// looping through the array to create no. of cards from categories card item component
   const cardsDataArray = cardsData.map(card => {
          return <CategoriesCardItem key={card.id} card={card} />     
   })

    return (
    <div className="row">
        {cardsDataArray}
    </div>           
    )  
    }

}
export default CategoriesCards
