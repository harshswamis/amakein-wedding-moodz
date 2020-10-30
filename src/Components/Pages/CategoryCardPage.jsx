import React, { Component } from 'react'
import VendorCard from './VendorCard'
import VendorCardData from "./VendorCardData"

export class CategoryCardPage extends Component {
    
   constructor() {
        super()
        this.state = {
            pageTitle : ""
        }
   }

    render() {
            
        const vendorData = VendorCardData.map(vendorCard => {
             return <VendorCard vendorCard={vendorCard}/>
        })

        return (
            <>
           <section>
            <div className="container-fluid">
                <div className="row ml-5 mt-5 my-4">
                    <div className="col-6">
                        <h3><strong>{this.props.pageTitle}</strong></h3>
                    </div>
                    <div className="col-6">
                    <div className="d-flex inline-block align-items-center faq_searchbox">
                        <input className="form-control faq_textbox shadow-none" type="text" placeholder="search photographers..." aria-label="Search" />
                        <div className="input-group-append"> 
                            <button className="faq_searchbutton"><span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search"
                                aria-hidden="true"></i></span></button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           </section>
            
           <section>
            <div className="container-fluid">
                <div className="row mb-5">  
                <div className="col-11 mx-auto">
                    <div className="row">       
                    {vendorData} 
                    </div>   
                </div>                
                </div>
            </div>
            </section>
            </>
        )
    }
}

export default CategoryCardPage
