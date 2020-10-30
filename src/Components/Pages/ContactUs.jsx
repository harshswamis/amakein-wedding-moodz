import React from 'react'
import "./ContactUs.css";
import ContactUsBackground from "../Images/background-common.jpg";
import ContactUsForm from './ContactUsForm';

class Contactus extends React.Component {

   constructor () {
       super()
    this.state = {

    }
    }

    componentDidMount ()
    {
      document.body.style.backgroundImage = `url(${ContactUsBackground})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";   
    }

render () {
    return (
 <>
    <section>
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col-5"></div> */}
                <div className="col-md-2 mx-auto">
                    <h1 className="text-center stories_text">Contact Us</h1>
                </div>
                {/* <div className="col-5"></div> */}
            </div>
        </div>
    </section>
    <section>
        <div className="container-fluid">
        <div className="row my-5">
            <div className="col-12 col-sm-1"></div>   
            <div className="col-12 col-sm-5">
                <p className="contactus_text">Our team is always there to help you. Have any doubts or questions for us feel free to drop your query and our team will respond to your query as soon as possible.</p>
            </div>
            <div className="col-12 col-sm-6">
            <ContactUsForm />
            </div>
        </div>    
        </div>   
    </section>  
</>
    )
}
}

export default Contactus
