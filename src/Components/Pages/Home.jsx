import React from 'react'
import "./Home.css"
import VendorSearchBoxIcon from "../Images/Icons _ vectors/vendor@4x.png";
import CitySearchBoxIcon from "../Images/Icons _ vectors/location@4x.png"
import HomeBackground from "../Images/background-6.jpg"

class Home extends React.Component {

  constructor () {
    super()
 
    this.state = {

    }
  }

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
              <div className="text-center">
               <div className="text-font">
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
<section>
  <div className="container-fluid pb-5">
    <div className="row search_row ">
      <div className="col-12 mx-auto">
          <div className="row my-2">
            <div className="col-5">
                <div className=" homepage_searchbox d-flex align-items-center">
                 <div className="input-group-append mtcol">   
                   <img src={VendorSearchBoxIcon} className="img-responsive vendor_searchbox_icon" />
                </div>
                    <input className="form-control homepage_textbox shadow-none" type="text" placeholder="Type vendor category..." aria-label="Search" />      
                </div>
            </div>
            <div className="col-5">
                <div className="d-flex align-items-center homepage_searchbox">
                <div className="input-group-append mtcol">   
                <img src={CitySearchBoxIcon} className="img-responsive city_searchbox_icon" />
                </div>
                    <input className="form-control homepage_textbox shadow-none" type="text" placeholder="type your preferred city..." aria-label="Search" />      
                </div>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger shadow-none get_started_button d-flex justify-content-center align-items-center"><span className="getStarted_text">Get Started</span></button>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
}

export default Home
