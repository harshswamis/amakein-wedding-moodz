import React from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png"

class SignUpMobile extends React.Component {

    constructor() {
        super()
        this.state = {
           inputMobileNo: ""
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
                                        <input type="tel" className="form-control shadow-none text_box" name="inputMobileNo" value={this.state.inputMobileNo} onChange={this.handleChange} id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                                    </div>
                                    </div>
                        
{/* Submit button */}
                                    <div className="col-12 d-flex justify-content-center">
                                    <div className="my-4">
                                        <button className="btn btn-danger shadow-none contactus_button_edit" type="submit">Submit</button>
                                    </div>
                                    </div>
                                </form>
                            {/* </div> */}
                            
                                <div className="col-12 d-flex justify-content-center">
                                <div className="mb-1">
                                    <p><strong>OR</strong></p>
                                </div>
                                </div>

{/* Social media links  */}
                                <div className="col-12 d-flex justify-content-center">
                                <div className="row mb-5">
                                    <div className="col-4">
                                    <button type="button" className="btn btn-danger shadow-none signInLogo_button_edit">
                                    <i className="fab fa-twitter-square"></i>
                                    </button>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                    <button type="button" className="btn btn-danger shadow-none signInLogo_button_edit">
                                    <i className="fab fa-facebook-square"></i>
                                    </button>
                                    </div>
                                    <div className="col-4">
                                    <button type="button" className="btn btn-danger shadow-none signInLogo_button_edit">
                                     <i className="fab fa-google-plus-square"></i>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            {/* </div> */}
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column mt-4">

{/* Business vendor login button */}
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center inline-block">
                                <div className="mb-2">
                                    <p>Are you a vendor?</p>
                                    <button type="button" className="btn btn-danger shadow-none contactus_button_edit">Business Login</button>
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
            </div>
            </div>
            </div> 
        </div>
    )
}
}

export default SignUpMobile
