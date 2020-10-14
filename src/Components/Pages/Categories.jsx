import React from 'react'
import Web from "../Images/img-1.jpg";
import "../Pages/Categories.css";

function Categories() {
    return (
        <>
<section id="categories_text_container">
<div className="container-fluid">
    <div className="row my-3 align-items-center">
        <div className="col-md-5"></div>
        <div className="col-md-2">
            <h1 className="text-center categories_text">Categories</h1>
        </div>
        <div className="col-md-5 text-center">
            <button type="button" class="btn btn-danger shadow-none button_edit">View All</button>
        </div>
    </div>
    <div className="row my-4 align-items-center">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <h4 className="text-center category_content_text">Build your dream wedding team from the verified list of best wedding photographers, wedding venues, bridal makeup artists, wedding decor and more. We always choose our vendors who are from the best!</h4>
        </div>
        <div className="col-md-3"></div>
    </div>
</div>
</section>
<section>
    <div className="container-fluid">
        <div className="row mb-5">
            <div className="col-2 d-flex align-items-end justify-content-end">
                <div className="row text-right">
                    <div className="col-12 text-center faq_text">FAQ's</div>
                </div>
            </div>
            <div className="col-10 text-center">
                <div className="row scroll_list">
                  <div className="col-12">
                    <div className="row">
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                        <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>                 
                    </div>
                    <div className="row">
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                        <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>                 
                    </div>
                    <div className="row">
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                        <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>                  
                    </div>
                    <div className="row">
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                        <h5 className="image_text">Text goes here!</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">  
                            <h5 className="image_text">Text goes here!</h5>
                        </div>                 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Categories
