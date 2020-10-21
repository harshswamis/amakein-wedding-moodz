import React from 'react'
import Web from "../Images/img-home-background.JPG";
import WebHandpickedImg from "../Images/img_f0326e.png"
import "./Stories.css"

function Stories() {
    return (
<>
<section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
                <h1 className="text-center stories_text">Stories</h1>
            </div>
            <div className="col-5"></div>
        </div>
    </div>
</section>
  <section>
     <div className="container-fluid">
        <div className="row">
            {/* <div className="col-sm-1 my-5"></div> */}
            <div className="col-sm-10 my-5 mx-auto">
                <div id="stories_cards_carousel"className="carousel slide" data-ride="carousel" data-interval="false">
                     <div className="carousel-inner">
                         <div className="carousel-item active">
                               <div className="container">
                                   <div className="row">
                                     <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <p class="card-title stories_card_title text-center">Mr. & Mrs. Taneja</p>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <h5 class="card-title stories_card_title text-center">Mr & Mrs. Taneja</h5>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <h5 class="card-title stories_card_title text-center">Mr & Mrs. Taneja</h5>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>

                         <div className="carousel-item">
                               <div className="container">
                                   <div className="row">
                                   <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <h5 class="card-title stories_card_title text-center">Mr & Mrs. Taneja</h5>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <h5 class="card-title stories_card_title text-center">Mr & Mrs. Taneja</h5>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-lg-4">
                                       <div className="card stories_card">
                                            <img src={Web} className="card-img-top stories_card_image" alt="image-1" />
                                            <div className="card-body stories_card_bodies">
                                            <h5 class="card-title stories_card_title text-center">Mr & Mrs. Taneja</h5>
                                            <p class="card-text stories_card_text text-center">Wedding photographer</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>


                     </div>
                     <a className="carousel-control-prev mr-5" href="#stories_cards_carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#stories_cards_carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>  
            {/* <div className="col-sm-1 my-5"></div>   */}
        </div>    
     </div>            
  </section> 
  <section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <h1 className="text-center stories_text">Handpicked by Wedding Moodz</h1>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
</section>  
<section>
     <div className="container-fluid">
        <div className="row">
            <div className="col-sm-1 my-5"></div>
            <div className="col-sm-10 my-5">
                <div id="handpicked_cards_carousel"className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-10">
                     <div className="carousel-inner">
                         <div className="carousel-item active">
                               <div className="container-fluid">
                                   <div className="row">
                                     <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                            <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                            <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>

                         <div className="carousel-item">
                               <div className="container-fluid">
                                   <div className="row">
                                     <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                       <div className="card handpicked_card">
                                            <img src={WebHandpickedImg} className="card-img-top handpicked_card_image" alt="image-1" />
                                            <div className="card-body handpicked_card_body">
                                            <p class="card-title handpicked_card_title ml-2">Sharma Studio's Dharamshala</p>
                                                <p class="card-text handpicked_card_text ml-2">Wedding photographer</p>
                                            </div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                         </div>

                         </div>
                     </div>
                   <div className="col-1">
                    </div>
                    <a className="carousel-control-prev" href="#handpicked_cards_carousel" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#handpicked_cards_carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                    </div>
                </div>
            </div>  
            <div className="col-sm-1 my-5"></div>  
        </div>    
     </div>            
  </section>      
</>
    )
}

export default Stories
