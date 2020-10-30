import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class BridalWear extends Component {
    
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Bridal Wear" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default BridalWear
