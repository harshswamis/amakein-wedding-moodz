import React from 'react'
import Carousel from "react-elastic-carousel";
import StoriesCardData from "./StoriesCardData"
import StoriesCard from "./StoriesCard";

class StoriesCardsCarousel extends React.Component {

    

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

    render() {

       const breakpoints = [
            {width: 1, itemsToShow: 1},
            {width: 500, itemsToShow: 2},
            {width: 768, itemsToShow: 3}
        ]

        //loops thorugh the sample data which creates mulitple story cards depending upon data.
    const storiesCards = StoriesCardData.map(card => {
        return ( 
        <StoriesCard id={card.itemId} card={card}/>
        )
    })
    return (
            <div className="container-fluid">
            <div className="row my-5 py-2">
                <div className="col-10 mx-auto">
                <Carousel breakPoints={breakpoints}>
                    {storiesCards}
                </Carousel>
                </div>
            </div>
            </div>
    )
}
}

export default StoriesCardsCarousel
