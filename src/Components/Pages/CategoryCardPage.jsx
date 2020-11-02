import React, { Component } from 'react'
import CategoriesCardData from "./CategoriesCardData"
import VendorCard from './VendorCard'

export class CategoryCardPage extends Component {
    
   constructor() {
        super()
        this.state = {
            pageTitle : "",
            searchVendorInput: ""
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

componentDidMount() {
    this.fetchItem();
    console.log(this.props.match);
}

   fetchItem = async () => {
       const fetchItem = await fetch("fetch-url-with-specific-id");
       //can match the id from ${this.props.match.params.id} with the fetch id to land on right page.
       const item = await fetchItem.json();
       console.log(item);
   }

    render() {
            
        const vendorData = CategoriesCardData.map(vendorCard => {
             return <VendorCard vendorCard={vendorCard}/>
        })

        return (
            <>
           <section>
            <div className="container-fluid">
                <div className="row ml-4 mt-5 my-4">
                    <div className="col-6">
                        <h3><strong>{this.props.match.params.cardText}</strong></h3>
                    </div>
                    <div className="col-6">
                    <form className="d-flex inline-block align-items-center faq_searchbox" onSubmit={this.handleSubmit}>
                        <input className="form-control faq_textbox shadow-none" type="text" name="searchVendorInput" value={this.state.searchVendorInput} onChange={this.handleChange} placeholder="search photographers..." aria-label="Search" />
                        <div className="input-group-append"> 
                            <button type="submit" className="faq_searchbutton"><span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search"
                                aria-hidden="true"></i></span>
                            </button>
                        </div>
                    </form>
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
