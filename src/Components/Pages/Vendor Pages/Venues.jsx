import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

export class Venues extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Venues" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default Venues
