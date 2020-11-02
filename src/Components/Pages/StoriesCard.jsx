
import React from 'react'
import { NavLink } from 'react-router-dom';
import Web from "../Images/img-home-background.JPG";

function StoriesCard(props) {
    return (
        // // <div className="col-4">
        <NavLink to={`/stories/${props.card.itemId}`} style={{textDecoration : "none"}}>
              <div className="card stories_card">
                <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                <div className="card-body stories_card_bodies">
                    <p class="card-title stories_card_title text-center">{props.card.cardTitle}</p>
                    <p class="card-text stories_card_text text-center">{props.card.cardSubTitle}</p>                                       
                </div>
            </div>
        </NavLink>
        // </div>
        
    )
}

export default StoriesCard
