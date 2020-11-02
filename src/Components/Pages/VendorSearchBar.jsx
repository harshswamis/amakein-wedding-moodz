import React from 'react'
import VendorSearchBoxIcon from "../Images/Icons _ vectors/vendor@4x.png";

class VendorSearchBar extends React.Component {

    constructor() {
        super()
        this.state = {
          
        }
       // this.handleChange = this.handleChange.bind(this)
    }

    //record the text from the textbox with onChange event
    // handleChange (event) {
    //     const {name, value} = event.target;
    //       this.setState({
    //            [name] : value
    //       })
    // }

render () {

    return (
        <>
            <div className="col-5">
                <div className=" homepage_searchbox d-flex align-items-center">

{/* type vendor category text input */}
                 <div className="input-group-append mtcol">   
                   <img src={VendorSearchBoxIcon} className="img-responsive vendor_searchbox_icon" />
                </div>
                    <input className="form-control homepage_textbox shadow-none" type="text" name="vendorCategory" onChange={this.handleChange} placeholder="Type vendor category..." aria-label="Search" />  
                </div>
            </div>
        </>
    )
}
}

export default VendorSearchBar
