import React from 'react'
import {NavLink} from "react-router-dom"
import "./Footer.css";
import "./Pages/Modals/FeedbackModal"
import FeedbackModal from './Pages/Modals/FeedbackModal';
import PrivacyPolicy from "./Pages/Modals/PrivacyPolicy";
import TermsAndConditions from "./Pages/Modals/TermsAndConditions";
import GetInTouchWithUs from "./Pages/Modals/GetInTouchWithUs";
import FAQs from "./Pages/FAQs"
import FooterWMLogo from "./Images/Logo/logo1@4x_withouttext.png";
import FooterFacebookLogo from "./Images/Icons _ vectors/facebook@4x.png";
import FooterInstaLogo from "./Images/Icons _ vectors/instagram@4x.png";
import FooterWatsappLogo from "./Images/Icons _ vectors/whats app@4x.png";
import FooterPhoneLogo from "./Images/Icons _ vectors/phone@4x.png"
import FooterEmailLogo from "./Images/Icons _ vectors/mail@4x.png"


function Footer() {
 
      const footerText = {
          feedback: "Feedback",
          faq: "FAQ's",
          getInTouch: "Get in touch with us",
          phoneNo: "+91-018911187",
          emailAddress: "email@address.com",
          socialMediaIcons: "SocialMediaIcons",
          weddingMoodzLogo: "WEDDING MOODZ LOGO",
          subscribeNewsletter: "Subscribe to our Newsletter",
          privacyPolicy: "Privacy Policy",
          termsConditions: "Terms & Conditions"
      };

    return (
        <>
        <div className="container-fluid">
            <div className="row my-col">
                <div className="col-xs-12 col-sm-4">
                    <div className="row ml-3 my-3">
                        <div className="col-12 col-sm-12 mb-4">
                        <NavLink active className="footer-link mr-4" to="/" data-target="#FeedbackModal" data-toggle="modal">{footerText.feedback}</NavLink>
                        <NavLink active className="footer-link mr-4" to="/FAQs">{footerText.faq}</NavLink>
                        <NavLink active className="footer-link" to="/" data-target="#GetInTouchWithUs" data-toggle="modal">{footerText.getInTouch}</NavLink >
                        <FeedbackModal id="FeedbackModal" />
                        <GetInTouchWithUs id="GetInTouchWithUs" />
                        </div>
                        {/* <div className="col-6 col-sm-12">
                        
                        </div> */}
                        <div className="col-4 col-sm-12 d-flex align-items-center">
                        <img src={FooterPhoneLogo} class="img-responsive footer_smlogo mr-2"></img>
                        <p className="footer-link pt-3">{footerText.phoneNo}</p>
                        </div>
                        <div className="col-4 col-sm-12 col-lg-6 d-flex align-items-center">
                        <img src={FooterEmailLogo} class="img-responsive footer_smlogo mr-2"></img>
                        <p className="footer-link pt-3">{footerText.emailAddress}</p> 
                        </div>
                        <div className="col-4 col-sm-12 col-lg-6 d-flex align-items-end pl-3 mb-3">
                        {/* <NavLink active className="footer-link footer_sm_logos mr-4" to="/"> */}
                                  <div className="footer-link footer_sm_logos mr-4">
                                    <a href="#" target="_blank">
                                        <img src={FooterWatsappLogo} class="img-responsive footer_smlogo" />
                                    </a>
                                  </div>    
                                  {/* </NavLink > */}
                                  {/* <NavLink active className="footer-link footer_sm_logos mr-4" to="/"> */}
                                  <div className="footer-link footer_sm_logos mr-4">
                                    <a href="https://www.instagram.com/amakeinco/" target="_blank">
                                        <img src={FooterInstaLogo} class="img-responsive footer_smlogo" />
                                    </a>
                                  </div>    
                                  {/* </NavLink >   */}
                                  {/* <NavLink active className="footer-link footer_sm_logos mr-4" to="/"> */}
                                  <div className="footer-link footer_sm_logos mr-4">
                                    <a href="https://www.facebook.com/amakeinco/" target="_blank">
                                        <img src={FooterFacebookLogo} class="img-responsive footer_smlogo" />
                                    </a>
                                  </div>    
                            {/* </NavLink >   */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 d-flex align-items-end mb-1">
                <div className="row">         
                <div className="d-none d-sm-block col-sm-12 text-center">
                    <div>
                      <img src={FooterWMLogo} class="img-responsive footer_wmlogo"></img>
                    </div>
                      <span className="footer_brand_logo_text">WEDDINGMOODZ</span><br />
                    </div>
                    <div className="d-none d-sm-block col-sm-12">
                      <p className="footer_allrightsreserved_Text text-center">all rights reserved</p>
                    </div>
                </div>
                </div>
            <div className="col-12 col-sm-4">
                <div className="row pt-4 ">
                                    <div className="col-6 col-sm-12 mb-4">
                                       <h5 className="right_footer_text">{footerText.subscribeNewsletter}</h5 >
                                       <form className="d-flex">
                                        <input className="form-control shadow-none mr-2 footer_text_box" type="search" placeholder="" aria-label="Search" />
                                        <button type="submit" className="btn btn-warning btn_footer_submit">Submit</button>
                                        </form>
                                   </div> 
                                    <div className="col-3 col-sm-12 mb-3">
                                       <NavLink active className="right_footer_text" to="/" data-target="#PrivacyPolicy" data-toggle="modal">{footerText.privacyPolicy}</NavLink >
                                       <PrivacyPolicy id="PrivacyPolicy" />
                                    </div>
                                    <div className="col-3 col-sm-12">
                                       <NavLink active className="right_footer_text" to="/" data-target="#TermsAndConditions" data-toggle="modal">{footerText.termsConditions}</NavLink >
                                       <TermsAndConditions id="TermsAndConditions" />
                                   </div>
                                   
                </div>
            </div>
        </div>
        </div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-1 my-col">
                    <div className="row py-3">
                        <div className="col-4">
                           <div className="row ml-5">
                               <div className="col-6">
                                   <div className="row pb-2">
                                       <div className="col-12">
                                   <NavLink active className="footer-link pr-4" to="/" data-target="#FeedbackModal" data-toggle="modal">{footerText.feedback}</NavLink>
                                   <NavLink active className="footer-link" to="/FAQs">{footerText.faq}</NavLink>
                                   <FeedbackModal id="FeedbackModal" />
                                   
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/" data-target="#GetInTouchWithUs" data-toggle="modal">{footerText.getInTouch}</NavLink >
                                       <GetInTouchWithUs id="GetInTouchWithUs" />
                                   </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-12">
                                       <p className="footer-link">{footerText.phoneNo}</p>
                                       </div>
                                    </div>
                                   <div className="row">
                                       <div className="col-12">
                                       <p className="footer-link">{footerText.emailAddress}</p>  
                                   </div>
                                   </div>
                               </div>
                               <div className="col-6 text-center d-flex align-items-end pb-3">
                                  <NavLink active className="footer-link footer_sm_logos mr-4" to="/">
                                  <div>
                                    <img src={FooterWatsappLogo} class="img-responsive footer_smlogo"></img>
                                  </div>    
                                  </NavLink >
                                  <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FooterInstaLogo} class="img-responsive footer_smlogo"></img>
                                  </div>    
                                  </NavLink >  
                                  <NavLink active className="footer-link mr-4" to="/">
                                  <div>
                                    <img src={FooterFacebookLogo} class="img-responsive footer_smlogo"></img>
                                  </div>    
                                  </NavLink >  
                               </div>
                           </div>
                        </div>
                        <div className="col-4 d-flex text-center align-items-end">
                        <div className="row">
                            <div className="col-12">
                            <div>
                            <img src={FooterWMLogo} class="img-responsive footer_wmlogo"></img>
                            </div>
                            <span className="footer_brand_logo_text">WEDDINGMOODZ</span><br />
                            </div>
                            <div className="col-12">
                            <p className="footer_allrightsreserved_Text text-center">all rights reserved</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="row pb-3">
                                       <div className="col-12">
                                       <h5 className="right_footer_text">{footerText.subscribeNewsletter}</h5 >
                                       <form className="d-flex">
                                        <input className="form-control shadow-none mr-2 footer_text_box" type="search" placeholder="" aria-label="Search" />
                                        <button type="submit" className="btn btn-warning btn_footer_submit">Submit</button>
                                        </form>
                                   </div>
                                   </div>
                                   <div className="row pb-1">
                                       <div className="col-12">
                                       <NavLink active className="right_footer_text" to="/" data-target="#PrivacyPolicy" data-toggle="modal">{footerText.privacyPolicy}</NavLink >
                                       <PrivacyPolicy id="PrivacyPolicy" />
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="right_footer_text" to="/" data-target="#TermsAndConditions" data-toggle="modal">{footerText.termsConditions}</NavLink >
                                       <TermsAndConditions id="TermsAndConditions" />
                                   </div>
                                   </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
        </>
    )
}

export default Footer
