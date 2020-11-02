import React, { useState, useEffect } from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png"
import {Form, Button} from "react-bootstrap"

class SignUpEmail extends React.Component{

    constructor() {
        super()
        this.state = {
           emailAddress: "",
           password: "",
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
                            <div className="col-12 d-flex justify-content-center">
                                    <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{fontSize : "x-small"}}>Email address</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "x-small", width : "250px"}} 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        autoFocus
                                        required
                                        name="emailAddress"
                                        value={this.state.emailAddress}
                                        onChange={this.handleChange} 
                                        />
                                    </Form.Group>

                                    <Form.Group className="my-1" controlId="formBasicPassword">
                                        <Form.Label style={{fontSize : "x-small"}}>Password</Form.Label>
                                        <Form.Control 
                                        style={{fontSize : "x-small"}} 
                                        type="password" 
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        { this.state.hasAccount ? (
                                        <>
                                        <Button className="btn btn-danger shadow-none login_button_edit mt-2 mb-4" style={{fontSize : "x-small", width : "80px"}} type="submit">
                                        Sign In
                                        </Button><br />
                                        <Form.Label style={{fontSize : "x-small"}}>Dont have an account?</Form.Label>
                                        <Button className="btn btn-danger shadow-none login_button_edit my-2 mx-2" onClick={this.handleClick} style={{fontSize : "8px", width : "70px", backgroundColor : "#f0326e"}}>
                                            Sign Up
                                        </Button> 
                                        </> ) : 
                                        (
                                            <>
                                            <Button className="btn btn-danger shadow-none login_button_edit mt-2 mb-4" style={{fontSize : "x-small", width : "80px"}} type="submit">
                                            Sign Up
                                            </Button><br />
                                            <Form.Label style={{fontSize : "x-small"}}>Have an account?</Form.Label>
                                            <Button className="btn btn-danger shadow-none login_button_edit my-2 mx-2" onClick={this.handleClick} style={{fontSize : "8px", width : "70px", backgroundColor : "#f0326e"}}>
                                                Sign In
                                            </Button> 
                                            </>  
                                        )}
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

export default SignUpEmail
