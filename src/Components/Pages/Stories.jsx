import React from 'react'
import "./Stories.css"
import StoriesBackground from "../Images/background-common.jpg";
import HandspickedCardsCarousel from './HandspickedCardsCarousel';
import StoriesCardsCarousel from "./StoriesCardsCarousel";


class Stories extends React.Component {

      constructor() {
          super()
          this.state = {}
      }

    // stories background image setup
      componentDidMount ()
      {
        document.body.style.backgroundImage = `url(${StoriesBackground})`;
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";   
      }

      render() {

    return (
<>
<section>
    <div className="container-fluid">
        <div className="row">
            {/* <div className="col-5"></div> */}
            <div className="col-md-2 mx-auto">
                <h1 className="text-center stories_text">Stories</h1>
            </div>
            {/* <div className="col-5"></div> */}
        </div>
    </div>
</section>
  <section>
        <StoriesCardsCarousel />
  </section> 
  <section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <h1 className="text-center stories_text">Handpicked by Wedding Moodz</h1>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
</section>  
<section>
     <HandspickedCardsCarousel />           
</section>   
</>
    )
}
}

export default Stories
