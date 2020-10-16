import React from 'react'
import "./SignUpMobileLogin.css"

function SignUpMobileLogin(props) {
    return (
        <>
            <div className="container-fluid">
                <div id={props.id} className="modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" role="document">
                        <div className="modal-header">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end my-3">
                                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-2">
                                <h5 className="modal_logo">Wedding Moodz Logo</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-2">
                                <h5 className="modal-title">Sign Up/Sign In</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="modal-body">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                <div className="mb-2">
                                    <input type="tel" className="form-control shadow-none text_box" id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                <div className="my-4">
                                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Submit</button>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                <div className="mb-3">
                                    <p>OR</p>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                <div className="row mb-5">
                                    <div className="col-4">
                                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Submit</button>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Submit</button>
                                    </div>
                                    <div className="col-4">
                                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Submit</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column mt-4">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center inline-block">
                                <div className="mb-2">
                                    <p>Are you a vendor?</p>
                                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Business Login</button>
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
        </>
    )
}

export default SignUpMobileLogin
