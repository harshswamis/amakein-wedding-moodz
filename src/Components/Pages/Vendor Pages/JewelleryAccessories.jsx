import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class JewelleryAccessories extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Jewellery Accessories" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default JewelleryAccessories
