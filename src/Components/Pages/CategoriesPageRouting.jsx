import React, { Component } from 'react'
import {Route} from "react-router-dom";
import CategoryCardPage from './CategoryCardPage';
import Photographers from "./Vendor Pages/Photographers";
import MakeUp from "./Vendor Pages/MakeUp";
import BridalWear from "./Vendor Pages/BridalWear";
import GroomWear from "./Vendor Pages/GroomWear";
import Mehndi from "./Vendor Pages/Mehndi";
import PlanningAndDecor from "./Vendor Pages/PlanningAndDecor";
import InvitesAndGifts from "./Vendor Pages/InvitesAndGifts";
import MusicAndDance from "./Vendor Pages/MusicAndDance";
import Venues from "./Vendor Pages/Venues";
import JewelleryAccessories from "./Vendor Pages/JewelleryAccessories";
import Pandits from "./Vendor Pages/Pandits";
import Food from "./Vendor Pages/Food";

export class CategoriesPageRouting extends Component {
    constructor () {
        super()
        this.state = {
            photographers : "/categories/photographers",
            makeUp : "/categories/make-up",
            bridalWear : "/categories/bridal-wear",
            groomWear : "/categories/groom-wear",
            mehndi : "/categories/mehndi",
            planningAndDecor : "/categories/planning-and-decor",
            invitesAndGifts : "/categories/invites-and-gifts",
            musicAndDance : "/categories/music-and-dance",
            venues : "/categories/venues",
            jewelleryAccessories : "/categories/jewellery-accessories",
            pandits : "/categories/pandits",
            food : "/categories/food"
        }
    }

    render() {

        return (
            <div>
              <Route exact path={this.state.photographers} component={Photographers}/>
              <Route exact path={this.state.makeUp} component={MakeUp}/>
              <Route exact path={this.state.bridalWear} component={BridalWear}/>
              <Route exact path={this.state.groomWear} component={GroomWear}/>
              <Route exact path={this.state.mehndi} component={Mehndi}/>
              <Route exact path={this.state.planningAndDecor} component={PlanningAndDecor}/>
              <Route exact path={this.state.invitesAndGifts} component={InvitesAndGifts}/>
              <Route exact path={this.state.musicAndDance} component={MusicAndDance}/>
              <Route exact path={this.state.venues} component={Venues}/>
              <Route exact path={this.state.jewelleryAccessories} component={JewelleryAccessories}/>
              <Route exact path={this.state.pandits} component={Pandits}/>
              <Route exact path={this.state.food} component={Food}/>

            </div>
        )
    }
}

export default CategoriesPageRouting

