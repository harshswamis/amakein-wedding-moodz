import React, { Component } from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png"
import {Form, Button} from "react-bootstrap"
import BusinessLogin from './BusinessLogin'

export default class BusinessSignUp extends Component {
    constructor() {
        super()
        this.state = {
           emailAddress: "",
           password: "",
           brandName: "",
           city: "",
           vendorType: "",
           mobileNo: "",
           hasAccount: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
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

   handleClick = () => {
       this.setState({hasAccount: !this.state.hasAccount})
   }


    render() {
  
    return (
        <>
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
                            
                                <div className="col-12 d-flex justify-content-center">
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
                            <div className="col-12 d-flex justify-content-center">
                                    <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "8px"}}>Brand Name</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px", width : "250px"}} 
                                        type="text" 
                                        placeholder="Brand Name*" 
                                        autoFocus
                                        required
                                        name="brandName"
                                        value={this.state.brandName}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "8px"}}>City</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px", width : "250px"}} 
                                        type="text" 
                                        placeholder="Enter your City" 
                                        autoFocus
                                        required
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "8px"}}>Vendor Type</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px", width : "250px"}} 
                                        type="text" 
                                        placeholder="Enter your Vendor Type" 
                                        autoFocus
                                        required
                                        name="vendorType"
                                        value={this.state.vendorType}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "8px"}}>Email address</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px", width : "250px"}} 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        autoFocus
                                        required
                                        name="emailAddress"
                                        value={this.state.emailAddress}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "8px"}}>Mobile No.</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px", width : "250px"}} 
                                        type="tel" 
                                        placeholder="Enter your mobile number*" 
                                        autoFocus
                                        required
                                        name="mobileNo"
                                        value={this.state.mobileNo}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="my-1" controlId="formBasicPassword">
                                        <Form.Label style={{fontSize : "8px"}}>Password</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "8px"}} 
                                        type="password" 
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="d-flex justify-content-center">
                                        <Button className="btn btn-danger shadow-none login_button_edit mt-2 mb-4" style={{fontSize : "8px", width : "80px"}} type="submit">
                                        Sign Up
                                        </Button><br />

                                    </Form.Group>
                                    </Form>
                            </div>
                            </div>
                            </div>
                            </div>
                </div>
                </div>
                </div>
                </div>
            </>
        )
    }
}
