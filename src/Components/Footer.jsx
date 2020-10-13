import React from 'react'
import {NavLink} from "react-router-dom"
import "./Footer.css";

function Footer() {
 
      const footerText = {
          feedback: "Feedback",
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
                <div className="col-12 mt-3 my-col">
                    <div className="row py-5">
                        <div className="col-4">
                           <div className="row ml-5">
                               <div className="col-6">
                                   <div className="row pb-3">
                                       <div className="col-12">
                                   <NavLink active className="footer-link" to="/">{footerText.feedback}</NavLink>
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/">{footerText.getInTouch}</NavLink >
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/">{footerText.phoneNo}</NavLink><br />
                                   </div>
                                   </div>
                                   <div className="row">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/">{footerText.emailAddress}</NavLink >  
                                   </div>
                                   </div>
                               </div>
                               <div className="col-6 text-center d-flex align-items-end">
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
                                       <NavLink active className="footer-link" to="/">{footerText.subscribeNewsletter}</NavLink ><br />
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/">{footerText.privacyPolicy}</NavLink ><br />
                                   </div>
                                   </div>
                                   <div className="row pb-3">
                                       <div className="col-12">
                                       <NavLink active className="footer-link" to="/">{footerText.termsConditions}</NavLink >
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
