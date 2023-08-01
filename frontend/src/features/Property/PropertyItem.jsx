import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css'

const PropertyItem = (props) => {
    const property = props.property
    console.log(property)
    if(property.id) {
        return (
            <div className='property-item'>
                <Link className='index-show-list-element' to={`/properties/${property.id}`}>
                    <div className='property-item-div'>
                        <img className='property-item-image' src={property.imageUrls[0]} alt="" />
                    </div>
                    <div className='title-div'> 
                        <span className='name'>{property.name}</span> <br/>
                        <span className='location'>{property.city}, {property.state}</span>
                        
                    </div>
                    <div>
                        <span className='bed-bath'>Bedroom: {property.bedrooms} Bath: {property.baths}</span> 
                        <div className='property-page-price-div'>
                        <div className='card-price'>
                            <div className='price-div'>${property?.price}</div>
                            <div className='slash-div'> / </div>
                            <div className='night-div'>night</div>
                        </div>
                    </div>
                    </div>
                </Link>
            </div>
        );
    }
    else {
        return
    }
}

export default PropertyItem