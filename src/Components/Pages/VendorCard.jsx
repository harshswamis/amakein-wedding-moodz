import React, {useState} from 'react'
import {Card, Badge} from "react-bootstrap"
import VerifiedIcon from "../Images/Icons _ vectors/verified@4x.png";
import {Modal, Button} from "react-bootstrap"
import { NavLink } from 'react-router-dom';

function VendorCard(props) {  
    
          const reviewBadgeStyle = {
              color : "white",
              backgroundColor : "green",
              padding: "5px",
              fontSize : "small",
              borderRadius : "2px"
          }

        return (
            <>
            <div className="col-3 gy-4">
                <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={props.vendorCard.image} />
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title style={{fontSize : "medium", fontWeight : "bold"}}>
                                    {props.vendorCard.vendorTitle}
                                    <img style={props.vendorCard.isVerified ? {marginLeft: "6px", width : "22px"} : {display : "none"}}src={VerifiedIcon} className="card-img-top" alt="image-1" />
                                </Card.Title>
                                <Card.Title style={reviewBadgeStyle}>
                                    <i className="fas fa-star mr-1"></i>
                                    <small>{props.vendorCard.vendorRating}</small>
                                </Card.Title>
                            </div>
                            <div className="d-flex justify-content-between">
                            <Card.Text style={{fontSize : "small"}}>
                                {props.vendorCard.vendorLocation}
                            </Card.Text>
                            <Card.Text style={{fontSize : "small"}}>
                                {props.vendorCard.noOfReviews} reviews
                            </Card.Text>
                            </div>
                            <Card.Text></Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted" style={{fontSize : "small"}}>{props.vendorCard.addtionalInformation}</small>< br />
                            <small className="text-muted"style={{fontSize : "small", fontWeight :"bold"}}><i className="fas fa-rupee-sign mr-2"></i>{props.vendorCard.price}</small>               
                    </Card.Footer>
                </Card>
            </div>
</>
)
}

export default VendorCard
