import React from 'react'
import WMLogo from "../../Images/Logo/Main Logo.png";

function PrivacyPolicy(props) {
    return (
        <>
            <div className="container-fluid">
                <div id={props.id} className="modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" role="document">
                        <div className="modal-header">
                        <div className="container">
                            <div className="row">
                            <div className="col-12 d-flex flex-column">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-end">
                                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-0">
                                <div className="col-12 d-flex justify-content-center mb-0">
                                <div>
                                <img src={WMLogo} class="img-responsive wmlogo_tandc"></img>
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
                             <div className="row">
                                 <div className="col-12">
                                     <p>Privacy Policy</p>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-12">
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
                                <div className="col-12 ">
                                <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="mr-1">
                                <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" />
                                </div>
                                <label class="form-check-label" for="flexCheckChecked">
                                  I've read and I hereby accept the privacy policy
                                </label>
                                </div>
                                </div>
                                <div className="row mt-1 mb-2">
                                    <div className="col-12 d-flex justify-content-center">
                                <button type="button" class="btn btn-danger shadow-none contactus_button_edit">Submit</button>
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
                
            </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
