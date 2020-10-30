import React from 'react'
import Carousel from "react-elastic-carousel";
import StoriesCardData from "./StoriesCardData"
import StoriesCard from "./StoriesCard";

function StoriesCardsCarousel() {

    const breakpoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3}
    ]

    const storiesCards = StoriesCardData.map(card => {
        return <StoriesCard id={card.id} card={card}/>
    })

    return (
            <div className="container-fluid">
            <div className="row my-5">
                <div className="col-10 mx-auto">
                <Carousel breakPoints={breakpoints}>
                    {storiesCards}
                </Carousel>
                </div>
            </div>
            </div>
    )
}

export default StoriesCardsCarousel
