import React, { Component } from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png"
import BusinessSignUp from './BusinessSignUp'

class BusinessLogin extends Component {

    constructor() {
        super()
        this.state = {
           inputVendorMobileNo: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

//record input no. in to the state onChange event
    handleChange (event) {
        const {name, value} = event.target;
          this.setState({
               [name] : value
          })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
   }
                
render () {

    return (
        <div>
           <div className="container-fluid">
                <div id={this.props.id} className="modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" role="document">
                        <div className="modal-header">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end my-1">
                                <button type="button" className="btn-close shadow-none" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                            
                                <div className="col-12 d-flex justify-content-center mb-4">
                                <div>
                                <img src={WMLogo} className="img-responsive wmlogo_tandc"></img>
                                </div>
                                </div>       
                            {/* </div> */}
                            
                                <div className="col-12 d-flex justify-content-center mb-2">
                                <h5 className="modal-title"><strong>Sign Up/Sign In</strong></h5>
                                </div>
                            {/* </div> */}
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="modal-body">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">

{/* Enter mobile number form */}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="col-12 d-flex justify-content-center">
                                    <div className="mb-2">
                                        <input type="tel" className="form-control shadow-none text_box" name="inputVendorMobileNo" value={this.state.inputVendorMobileNo} onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                                    </div>
                                    </div>
                        
{/* Submit button */}
                                    <div className="col-12 d-flex justify-content-center">
                                    <div className="my-4">
                                        <button className="btn btn-danger shadow-none contactus_button_edit" type="submit">Submit</button>
                                    </div>
                                    </div>
                                </form>

                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="container">
                            <div className="row">
{/* Business vendor login button */}

                                <div className="col-12 d-flex justify-content-center align-items-center">
                                {/* <div className="mb-2"> */}
                                    <p>Register as a vendor?</p>
                                    <button type="button" className="btn btn-danger shadow-none ml-2 mb-3 contactus_button_edit" data-target="#SignUpBusiness" data-toggle="modal">Sign Up</button>
                                    
                                {/* </div> */}
                                </div>
                                <BusinessSignUp id="SignUpBusiness"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> 
        </div>
        )
    }
}

export default BusinessLogin