import React from 'react'
import "./FAQs.css";
import FAQWMLogo from "../Images/Logo/Main Logo.png";
import FAQFacebookLogo from "../Images/Icons _ vectors/facebook@4x.png";
import FAQInstaLogo from "../Images/Icons _ vectors/instagram@4x.png";
import FAQWatsappLogo from "../Images/Icons _ vectors/whats app@4x.png";
import FAQPhoneLogo from "../Images/Icons _ vectors/phone@4x.png";
import FAQEmailLogo from "../Images/Icons _ vectors/mail@4x.png";
import {NavLink} from "react-router-dom";
import ReactTooltip from "react-tooltip";

function FAQs() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                             <img src={FAQWMLogo} class="img-responsive faqwmlogo_navbar"></img>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-center">
                        <h1 className="text-center FAQs_title">FAQ's</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center inline-block">
                        <div className="d-flex inline-block align-items-center faq_searchbox">
                        <input className="form-control faq_textbox shadow-none" type="text" placeholder="search any question..." aria-label="Search" />
                        <div className="input-group-append"> 
                            <button className="faq_searchbutton"><span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search"
                                aria-hidden="true"></i></span></button>
                        </div>
                        </div>
                        </div>       
                        </div>
                        </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row mt-5">
                        {/* <div className="col-2"></div> */}
                        <div className="col-8">
                            <div className="row mt-4">
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <p className="faq_content_text">
                                        <h5>Frequently Asked Questions</h5>
                                        <h6>Returns</h6>
                                        <ol className="mt-3 faq_link_text">
                                            <li><a href="#">I want to return my purchase! What do I do?</a></li>
                                            <li><a href="#">I would like to return a gift that was sent to me. How do I do that?</a></li>
                                            <li><a href="#">Can I exchange my order instead of returning it?</a></li>
                                            <li><a href="#">I printed out my label and misplaced it. How can I retrieve it again?</a></li>
                                            <li><a href="#">How long does it take for me to get a refund?</a></li>
                                            <li><a href="#">Do your pre-paid labels cover international returns?</a></li>
                                            <li><a href="#">I am returning an item purchased with a Gift Certificate or Gift Card, how does that work?</a></li>
                                            <li><a href="#">I only see the option to return my order through UPS on the website. Am I able to return through USPS instead?</a></li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <div className="row">
                                <div className="col-12 haveaques_form my-4 mx-4">
                        <div className="mt-2 mx-3">
                        <h5 className="have_a_ques_text">Have a question ?</h5>
                        <h6 className="feel_free_to_ask">Feel free to ask us.</h6>
                        <hr />
                        </div>
                        <div className="mt-2 mx-3">
                        <label for="exampleFormControlInput1" className="form-label faq_text_label">Name</label>
                        <input type="text" className="form-control shadow-none faq_text_box" id="exampleFormControlInput1" />
                        </div>
                        <div className="mx-3">
                        <label for="exampleFormControlInput1" className="form-label faq_text_label">Email</label>
                        <input type="email" className="form-control shadow-none faq_text_box" id="exampleFormControlInput1" />
                        </div>
                        <div className=" mb-3 mx-3">
                        <label for="exampleFormControlTextarea1" className="form-label faq_text_label">Your query</label>
                        <textarea className="form-control shadow-none faq_text_area" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type="button" class="btn btn-danger shadow-none faqform_button_edit"><span className="post_button_text">Post</span></button>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row my-5">
                    <div className="col-4"></div>
                    <div className="col-4 d-flex justify-content-center faq_socialmedia_icons">
                                <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FAQPhoneLogo} class="img-responsive faq_smlogo" />
                                  </div>    
                                </NavLink >
                                <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FAQWatsappLogo} class="img-responsive faq_smlogo" />
                                  </div>    
                                </NavLink >
                                <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FAQInstaLogo} class="img-responsive faq_smlogo" />
                                  </div>    
                                </NavLink >  
                                <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FAQFacebookLogo} class="img-responsive faq_smlogo" />
                                  </div>    
                                </NavLink >
                                <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FAQEmailLogo} class="img-responsive faq_smlogo" />
                                  </div>    
                                </NavLink >
                    </div>
                    <div className="col-4"></div>
                </div>
            </section>
                        </>
    )
}

export default FAQs
