import React from 'react'
import HandspickedCard from './HandspickedCard';
import Carousel from "react-elastic-carousel"
import HandspickedCardData from "./HandspickedCardsData";

function HandspickedCardsCarousel() {

        const breakpoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 2},
            {width: 768, itemsToShow: 4},
            {width: 1200, itemsToShow: 4},
        ]
    
        const handspickedCardData = HandspickedCardData.map(card => {
            return <HandspickedCard id={card.id} card={card}/>
        })
    
        return (
                <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                    <Carousel breakPoints={breakpoints}>
                        {handspickedCardData}
                    </Carousel>
                    </div>
                </div>
                </div>
        ) 
    
}

export default HandspickedCardsCarousel
