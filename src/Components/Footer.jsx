import React from 'react'
import {NavLink} from "react-router-dom"
import "./Footer.css";
import "./Pages/Modals/FeedbackModal"
import FeedbackModal from './Pages/Modals/FeedbackModal';
import PrivacyPolicy from "./Pages/Modals/PrivacyPolicy";
import TermsAndConditions from "./Pages/Modals/TermsAndConditions";
import GetInTouchWithUs from "./Pages/Modals/GetInTouchWithUs";
import FAQs from "./Pages/FAQs"

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
                                  <NavLink active className="footer-link" to="/">{footerText.socialMediaIcons}</NavLink >                                 
                               </div>
                           </div>
                        </div>
                        <div className="col-4 d-flex text-center align-items-end mycol_1">
                            <h4>{footerText.weddingMoodzLogo}</h4>
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
            </div>
        </>
    )
}

export default Footer
