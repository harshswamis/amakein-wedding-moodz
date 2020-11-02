import React from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png";

//Privacy policy modal

class PrivacyPolicy extends React.Component {

    constructor() {
        super()
        this.state = {
           acceptPrivacyPolicy: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

//record input no. in to the state onChange event
    handleChange (event) {
        const {name, checked} = event.target;
          this.setState({
               [name] : checked
          })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
   }

    render () {
    return (
        <>
            <div className="container-fluid">
                <div id={this.props.id} className="modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" role="document">
                        <div className="modal-header">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end">

{/* modal close button */}
                                <button type="button" className="btn-close shadow-none" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-0">
                                <div className="col-12 d-flex justify-content-center mb-0">
                                <div>
                                <img src={WMLogo} className="img-responsive wmlogo_tandc"></img>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="modal-body tandc_body">
                        <div className="container">
                            <div className="row">
                            <div className="col-12">
                            <div className="row">
                            <div className="col-12 termsConditions_text">

                                {/* privacy policy body */}
                             <div className="row">
                                 <div className="col-12">
                                     <p>Privacy Policy</p>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-12">

{/* privacy policy content */}

                                            <p className="font-weight-light">Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper. The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble. So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be: Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph). Clearly related to the thesis: The sentences should all refer to the central idea, or thesis, of the paper (Rosen and Behrens 119). Coherent: The sentences should be arranged in a logical manner and should follow a definite plan for development (Rosen and Behrens 119). Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).</p>
                                </div>
                             </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer mt-0">
                            <div className="container">
                            <div className="row ">
                            <div className="col-12">
                            <div className="row">
                                <div className="col-12">

                                <form className="row" onSubmit={this.handleSubmit}>
                                    <div className="col-12 d-flex justify-content-center align-items-center">
{/* accept the privacy policy checkbox */}
                                        <div className="mr-1">
                                            <input className="form-check-input shadow-none" type="checkbox" name="acceptPrivacyPolicy" onChange={this.handleChange} checked={this.state.acceptPrivacyPolicy} id="flexCheckChecked" />
                                        </div>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I've read and I hereby accept the privacy policy
                                        </label>
                                    </div>                   
{/* submit button */}
                                    <div className="col-12 d-flex justify-content-center mt-1 mb-2">
                                        <button type="submit" className="btn btn-danger shadow-none contactus_button_edit">Submit</button>
                                    </div>
                                </form>
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
}

export default PrivacyPolicy
