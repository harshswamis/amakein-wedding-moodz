import React, { Component } from 'react'
import CategoryCardPage from '../CategoryCardPage'
import VendorCardData from "../VendorCardData";

export class MusicAndDance extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <CategoryCardPage pageTitle="Music and Dance" vendorCardData={VendorCardData}/>
            </div>
        )
    }
}

export default MusicAndDance
