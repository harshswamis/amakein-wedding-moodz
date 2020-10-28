import React from 'react'
import LocationSearchBar from './LocationSearchBar';

import VendorSearchBar from './VendorSearchBar';


class SearchBar extends React.Component {
 
   constructor() {
       super()
       this.state = {
       }  
   }

render() {
    return (
    <form className="container-fluid pb-5">
    <div className="row search_row ">
      <div className="col-12 mx-auto">
          <div className="row my-2">

{/* vendor search box component */}
            <VendorSearchBar />

{/* location search box component */}
            <LocationSearchBar />

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
