import React from 'react'
import Web from "../Images/img-1.jpg";

function Categories() {
    return (
        <>
<section id="categories_text_container">
<div className="container-fluid">
    <div className="row my-5 align-items-center">
        <div className="col-md-5"></div>
        <div className="col-md-2">
            <h1 className="text-center categories_text">Categories</h1>
        </div>
        <div className="col-md-5 text-center">
            <button type="button" class="btn btn-danger">View All</button>
        </div>
    </div>
    <div className="row my-2 align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <h4 className="text-center category_content_text">Build your dream wedding team from the verified list of best wedding photographers, wedding venues, bridal makeup artists, wedding decor and more. We always choose our vendors who are from the best!</h4>
        </div>
        <div className="col-md-2"></div>
    </div>
</div>
</section>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-12 mx-auto scroll_list">
                    <div className="row mr-2">
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>               
                    </div>
                    <div className="row mr-2">
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>               
                    </div>
                    <div className="row mr-2">
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>
                        <div className="my-5 col-lg-4 col-md-4 col-sm-4 col-12">  
                            <img src={Web} className="img-fluid my_image" alt="..." />
                        </div>               
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Categories
