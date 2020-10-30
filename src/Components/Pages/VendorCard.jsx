import React from 'react'
import {Card, Badge} from "react-bootstrap"

function VendorCard(props) {  
    
          const reviewBadgeStyle = {
              color : "white",
              backgroundColor : "green",
              padding: "5px",
              fontSize : "small",
              borderRadius : "2px"
          }

        return (
      <div className="col-3 gy-4">
        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.vendorCard.image} />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title>{props.vendorCard.title}</Card.Title>
                        <Card.Title style={reviewBadgeStyle}><i className="fas fa-star mr-1"></i><small>5.0</small></Card.Title>
                    </div>
                    <div className="d-flex justify-content-between">
                    <Card.Text>
                        {props.vendorCard.text}
                    </Card.Text>
                    <Card.Text style={{fontSize : "small"}}>
                        40 reviews
                    </Card.Text>
                    </div>
                    <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>    
                    <small className="text-muted" style={{fontSize : "small"}}>Last updated 3 mins ago</small>< br />
                    <small className="text-muted"style={{fontSize : "small"}}>Rs. 95,000 per day</small>               
              </Card.Footer>
        </Card>
      </div>
        )
}

export default VendorCard
