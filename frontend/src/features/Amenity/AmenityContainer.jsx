import React, { useState } from "react";
import Amenity from "./Amenity";
import "./Amenity.css";



export default function AmenityContainer(props) {
    const {amenities} = props;
    console.log(amenities)
    return (
        <div>
            <h3>What this place offers</h3>
            <div className="amenity-grid">
                {amenities.map(amenity => <Amenity name={amenity.description}/>)}
                
            </div>
          
        </div>
    )
}