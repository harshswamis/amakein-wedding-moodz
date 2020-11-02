import React from 'react'
import CurrentLocationIcon from "../Images/Icons _ vectors/find me@4x.png";
import CitySearchBoxIcon from "../Images/Icons _ vectors/location@4x.png";
import VendorSearchBoxIcon from "../Images/Icons _ vectors/vendor@4x.png";

const GOOGLE_API_KEY = "AIzaSyBiZ0GTitpQ_SMJk2xil6gPYLLoAQJiYI0"

class SearchBar extends React.Component {
 
  constructor() {
    super()
    this.state = {
        latitude: "",
        longitude: "",
        userAddress: "",
        //preferred city text box input
        preferredCity: "",
        vendorCategory: ""
    }

  this.handleChange = this.handleChange.bind(this)
  this.getLocation = this.getLocation.bind(this)
  this.getCoordinates = this.getCoordinates.bind(this)
  this.reverseGeocodeAddress = this.reverseGeocodeAddress.bind(this)

}

handleSubmit = (event) => {
     event.preventDefault()
     const data = this.state
     console.log("Final data is", data)
}

// Get the input city data
handleChange (event) {
    const {name, value} = event.target;
      this.setState({
           [name] : value
      })
      console.log(this.state.preferredCity)
}

// Get current location code
getLocation () {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.getCoordinates);
     } else {
       alert("Geolocation is not supported by this browser.");
     }
   }

  //record the coordinates
getCoordinates(position) {
     this.setState({
       latitude : position.coords.latitude,
       longitude : position.coords.longitude
     })
     this.reverseGeocodeAddress()
}

//to show the address
reverseGeocodeAddress() {
 fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${GOOGLE_API_KEY}`)
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => alert(error))
 
}

//geo location error handling 
handleLocationError(error) {
     switch(error.code) {
       case error.PERMISSION_DENIED:
         alert("User denied the request for Geolocation.")
         break;
       case error.POSITION_UNAVAILABLE:
         alert("Location information is unavailable.")
         break;
       case error.TIMEOUT:
         alert("The request to get user location timed out.")
         break;
       case error.UNKNOWN_ERROR:
         alert("An unknown error occurred.")
         break;
       default:
         alert("An unknown error occured.");
     }
   }

render() {
    return (
    <form className="container-fluid pb-5" onSubmit={this.handleSubmit}>
    <div className="row search_row ">
      <div className="col-12 mx-auto">
          <div className="row my-2">

{/* vendor search box component */}
            <div className="col-5">
                            <div className=" homepage_searchbox d-flex align-items-center">

            {/* type vendor category text input */}
                            <div className="input-group-append mtcol">   
                              <img src={VendorSearchBoxIcon} className="img-responsive vendor_searchbox_icon" />
                            </div>
                                <input className="form-control homepage_textbox shadow-none" type="text" name="vendorCategory" onChange={this.handleChange} placeholder="Type vendor category..." aria-label="Search" />  
                            </div>
            </div>

{/* location search box component */}
          <div className="col-5">
                          <div className="d-flex align-items-center homepage_searchbox">
                          <div className="input-group-append mtcol">   
          {/* type your preferred city textbox */}
                          <img src={CitySearchBoxIcon} className="img-responsive city_searchbox_icon" />
                          </div>

                              <input className="form-control homepage_textbox shadow-none" type="text" name="preferredCity" onChange={this.handleChange} placeholder="type your preferred city..." aria-label="Search" />  
          {/* get location icon button     */}
                              <button className="currentLocationButton" onClick={this.getLocation}><img src={CurrentLocationIcon} className="img-responsive currentLocation_searchbox_icon" /></button>
                              
                          </div>
          </div>

{/* Get started button */}
            <div className="col-2">
             <button type="submit" className="btn btn-danger shadow-none get_started_button d-flex justify-content-center align-items-center"><span className="getStarted_text">Get Started</span></button>
            </div>
          </div>
      </div>
    </div>
  </form>
    )
}
}

export default SearchBar
