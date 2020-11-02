import React from 'react'
import "./Home.css"

import HomeBackground from "../Images/background-5.jpg"
import SearchBar from './SearchBar';



class Home extends React.Component {

  constructor () {
    super()
 
    this.state = {

    }
  }

  //Home backgorund setup on component mounting
  componentDidMount ()
  {
    document.body.style.backgroundImage = `url(${HomeBackground})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

}

  

  render () {
    return (
  <div className="home">
  <section id="header">
    <div className="container-fluid">
    <div className="row mb-4">
         <div className="col-10 mx-auto">
           <div className="row">
             <div className="col-md-12 pt-lg-0 order-2 order-lg-1">
              <div className="text-center textbg">
               <div className="text-font">

{/* Home text */}
                 <h3>HELLO!</h3>
                 <h5>WELCOME ABOARD</h5>
               </div>
             <p className="mt-2 feelfree_Text">Feel free to search according to your needs</p>
            </div>
            </div>
             </div>
         </div>
    </div>
</div>
</section>

{/* Search bar component */}
<section>
  <SearchBar />
</section>
        </div>
    )
}
}

export default Home
