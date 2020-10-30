import React from 'react'
import WebHandpickedImg from "../Images/img_f0326e.png"

function HandspickedCard(props) {
    return (
        // <div className="col-3">
         <div className="card handpicked_card">
              <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
              <div className="card-body handpicked_card_body">
              <p class="card-title handpicked_card_title ml-2">{props.card.cardTitle}</p>
              <p class="card-text handpicked_card_text ml-2">{props.card.cardSubTitle}</p>
              </div>
          </div>
    //   </div>
    )
}

export default HandspickedCard
