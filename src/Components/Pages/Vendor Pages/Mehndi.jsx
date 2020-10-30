import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class Mehndi extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Mehndi" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default Mehndi
