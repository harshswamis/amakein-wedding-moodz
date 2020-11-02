import React from 'react'

class ContactUsForm extends React.Component {

    constructor() {
        super()
        this.state = {
           contactUsName: "",
           contactUsEmail: "",
           contactUsPhoneNo: "",
           contactUsMessage: ""
        }
        this.handleChange = this.handleChange.bind(this)
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

   render() {
    return (
        
        <div className="row">
            <div className="col-1"></div>

{/* contact us form */}
            <form className="col-10 contactus_form" onSubmit={this.handleSubmit}>
                   <div className="my-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label text_label">Name</label>
                    <input type="text" className="form-control shadow-none text_box" name="contactUsName" onChange={this.handleChange} value={this.contactUsName} id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-2">
                    <label htmlFor="exampleFormControlInput2" className="form-label text_label">Email address</label>
                    <input type="email" className="form-control shadow-none text_box" name="contactUsEmail" onChange={this.handleChange} value={this.contactUsEmail} id="exampleFormControlInput2" />
                    </div>
                    <div className="mb-2">
                    <label htmlFor="exampleFormControlInput3" className="form-label text_label">Phone Number</label>
                    <input type="tel" className="form-control shadow-none text_box" name="contactUsPhoneNo" onChange={this.handleChange} value={this.contactUsPhoneNo} id="exampleFormControlInput3" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea" className="form-label text_label">Message</label>
                    <textarea className="form-control shadow-none text_area" name="contactUsMessage" onChange={this.handleChange} value={this.contactUsName} id="exampleFormControlTextarea" rows="3"></textarea>
                    </div>
                    <div className="mb-3 mr-5 d-flex justify-content-end">
                    <button type="submit" className="btn btn-danger shadow-none contactus_button_edit">Sign Up</button>
                    </div>
            </form>
            <div className="col-1"></div>
            </div>   
    )
}
}

export default ContactUsForm
