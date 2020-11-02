import React from 'react'
import HandspickedCard from './HandspickedCard';
import Carousel from "react-elastic-carousel"
import HandspickedCardData from "./HandspickedCardsData";

class HandspickedCardsCarousel extends React.Component {

    componentDidMount() {
        this.fetchItem();
        console.log(this.props.match);
    }
    
       fetchItem = async () => {
           const fetchItem = await fetch("fetch-url-with-specific-id");
           //can match the id from ${this.props.match.params.id} with the fetch id to land on right page.
           const item = await fetchItem.json();
           console.log(item);
       }

    render () {
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
}

export default HandspickedCardsCarousel
