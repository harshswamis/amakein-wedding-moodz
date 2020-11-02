import React from 'react'


//Feedback modal - pending work
class FeedbackModal extends React.Component {
    constructor() {
        super()
        this.state = {
           feedbackEmailAddress: "",
           feedbackName: "",
           feedbackComments: "",
           feedbackReview: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

//record input no. in to the state onChange event
    handleChange (event) {
        const {name, value, type, checked} = event.target;
          [type] ==="radio" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
   }

render() {
    return (
        <>
            <div className="container">
                <div id={this.props.id} className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{height: "490px"}}>
                        <div className="modal-header">
                            <h5 className="modal-title mt-2" style={{fontSize : "25px", fontWeight: "bold"}}>Feedback</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="ml-3">
                            <h6>Please provide your feedback below:</h6>
                        </div>
                        <div className="modal-body mt-1">
                                <form className="container-fluid" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1" style={{fontSize : "small"}}><strong>How do you rate your overall experience?</strong></label>
                                            <div className="d-flex">
                                                <div className="form-check mr-4">
                                                    <input className="form-check-input" type="radio" name="feedbackReview" value="bad" checked={this.state.feedbackReview === "bad"}  onChange={this.handleChange}/>
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Bad
                                                    </label>
                                                </div>
                                                <div className="form-check mr-4">
                                                    <input className="form-check-input" type="radio" name="feedbackReview" value="average" checked={this.state.feedbackReview === "average"}  onChange={this.handleChange}/>
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Average
                                                    </label>
                                                </div>
                                                <div className="form-check mr-4">
                                                    <input className="form-check-input" type="radio" name="feedbackReview" value="good" checked={this.state.feedbackReview === "good"}  onChange={this.handleChange}/>
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Good
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="exampleFormControlTextarea1" style={{fontSize : "small"}}><strong>Comments:</strong></label>
                                            <textarea className="form-control" name="feedbackComments" value={this.state.feedbackComments} onChange={this.handleChange} id="exampleFormControlTextarea1" rows="5" style={{fontSize : "small"}}></textarea>
                                        </div>
                                        <div className="row form-group mt-3">
                                            <div className="col-6">
                                                <label htmlFor="exampleFormControlInput1" style={{fontSize : "small"}}><strong>Name:</strong></label>
                                                <input type="text" className="form-control" name="feedbackName" value={this.feedbackName} onChange={this.handleChange} id="exampleFormControlInput1" placeholder="name" style={{fontSize : "small"}}/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="exampleFormControlInput1" style={{fontSize : "small"}}><strong>Email address:</strong></label>
                                                <input type="email" className="form-control" name="feedbackEmailAddress" value={this.feedbackEmailAddress} onChange={this.handleChange} id="exampleFormControlInput1" placeholder="name@example.com" style={{fontSize : "small"}}/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center my-3">
                                        <button type="submit" className="btn btn-danger shadow-none signup_button_edit">Submit</button>
                                    </div>
                                </form>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}

export default FeedbackModal
