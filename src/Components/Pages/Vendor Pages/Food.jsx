import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class Food extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Food" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default Food
