import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class GroomWear extends Component {

    render() {
        return (
            <div>
               <CategoryCardPage pageTitle="Groom Wear" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default GroomWear