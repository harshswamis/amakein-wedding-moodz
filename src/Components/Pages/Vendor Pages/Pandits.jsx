import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

export class Pandits extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Pandits" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default Pandits
