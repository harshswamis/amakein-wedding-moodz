import React from 'react'
import "./ContactUs.css";

function Contactus() {
    return (
        <div>
            <section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
                <h1 className="text-center stories_text">Contact Us</h1>
            </div>
            <div className="col-5"></div>
        </div>
    </div>
</section>
<section>
     <div className="container-fluid">
      <div className="row my-5">
        <div className="col-1"></div>   
        <div className="col-5">
            <p>Our team is always there to help you. Have any doubts or questions for us feel free to drop your query and our team will respond to your query as soon as possible.</p>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label text_box_label">Name</label>
                        <input type="text" className="form-control text_box" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                       <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label text_box_label">Email address</label>
                        <input type="email" className="form-control text_box" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label text_box_label">Phone Number</label>
                        <input type="tel" className="form-control text_box" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label text_area_label">Message</label>
                        <textarea className="form-control text_box" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                </div>
                
                </div>
        </div>
        {/* <div className="col-1"></div> */}
      </div>    
     </div>   



</section>  
        </div>
    )
}

export default Contactus
