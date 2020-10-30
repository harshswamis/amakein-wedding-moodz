import React from 'react'

function ContactUsForm() {
    return (
        
        <div className="row">
            <div className="col-1"></div>

{/* contact us form */}
            <form className="col-10 contactus_form">
                   <div className="my-2">
                    <label for="exampleFormControlInput1" className="form-label text_label">Name</label>
                    <input type="text" className="form-control shadow-none text_box" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-2">
                    <label for="exampleFormControlInput1" className="form-label text_label">Email address</label>
                    <input type="email" className="form-control shadow-none text_box" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-2">
                    <label for="exampleFormControlInput1" className="form-label text_label">Phone Number</label>
                    <input type="tel" className="form-control shadow-none text_box" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text_label">Message</label>
                    <textarea className="form-control shadow-none text_area" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3 mr-5 d-flex justify-content-end">
                    <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Sign Up</button>
                    </div>
            </form>
            <div className="col-1"></div>
            </div>   
    )
}

export default ContactUsForm
