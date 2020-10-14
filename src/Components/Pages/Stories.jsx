import React from 'react'
import Web from "../Images/img-home-background.JPG";
import "./Stories.css"

function Stories() {
    return (
<>
  <section>
     <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2 my-5"></div>
            <div className="col-sm-8 my-5">
                <div id="cards_carousel"className="carousel slide" data-ride="carousel" data-interval="false">
                     <div className="carousel-inner">
                         <div className="carousel-item active">
                               <div className="container">
                                   <div className="row">
                                     <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>

                         <div className="carousel-item">
                               <div className="container">
                                   <div className="row">
                                     <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                       <div className="card">
                                            <img src={Web} className="card-img-top" alt="image-1" />
                                            <div className="card-body">
                                            <h5 class="card-title text-center">Card title</h5>
                                            <p class="card-text text-center">"Some quick example text to build on the card title."</p>
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>


                     </div>
                     <a className="carousel-control-prev" href="#cards_carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#cards_carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>  
            <div className="col-sm-2 my-5"></div>  
        </div>    
     </div>            
  </section>        
</>
    )
}

export default Stories
