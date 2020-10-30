import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

class InvitesAndGifts extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Invites and Gifts" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default InvitesAndGifts