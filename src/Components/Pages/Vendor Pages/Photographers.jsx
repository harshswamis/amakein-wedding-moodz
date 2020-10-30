import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class Photographers extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Wedding Photographers" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default Photographers
