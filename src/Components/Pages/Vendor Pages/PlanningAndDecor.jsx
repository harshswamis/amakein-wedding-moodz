import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class PlanningAndDecor extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
               <CategoryCardPage pageTitle="Planning and Decor" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default PlanningAndDecor
