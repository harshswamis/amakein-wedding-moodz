import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class MakeUp extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
               <CategoryCardPage pageTitle="Make Up" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default MakeUp
