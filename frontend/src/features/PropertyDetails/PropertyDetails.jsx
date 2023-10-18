import React, { useState } from "react";
import AmenityContainer from "../Amenity/AmenityContainer";
import ReservationForm from "../Reservation/ReservationForm";
import Review from "../Review/Review";
import "./PropertyDetails.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PropertyDetails = () => {
  // axios BE with proprty id
  const property = {
    id: 1,
    userId: 1,
    address: "22848 E Pacific Coast Hwy",
    city: "Malibu Beach",
    state: "California",
    country: "United States",
    zipcode: 90165,
    name: "The Malibu Suites",
    description:
      "This beach front residence sits directly on the Pacific Ocean with with no neighbors and a private sandy cove. We welcome responsible guests seeking to enjoy the finest that Malibu offers in a serene and upscale setting.",
    price: 450.0,
    bedrooms: 5,
    baths: 4,
    maxGuest: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    amenities: [
      { id: 1, description: "Parking" },
      { id: 2, description: "Kitchen" },
      { id: 3, description: "Wifi" },
      { id: 4, description: "Washer" },
    ],
    imageUrls: [
      "https://a0.muscache.com/im/pictures/f3e42ca3-6d2a-47e5-af3a-481ec297cf54.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/afac06ca-3ca2-4435-8ce3-7a79ea6c2a37.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53431391/original/5e80e8b7-0940-4b46-a68b-ef8aa4a4fae2.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/afac06ca-3ca2-4435-8ce3-7a79ea6c2a37.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53431391/original/5e80e8b7-0940-4b46-a68b-ef8aa4a4fae2.jpeg?im_w=1440",
    ],
  };

  const reviews = [
    {
      userId: 1,
      propertyId: 2,
      review:
        "Very nice and clean.Absolutely gorgeous location. Stunning house.",
      rating: 5,
      User: {
        id: 1,
        username: "john.doe",
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "777-777-7777",
        avatarUrl:
          "https://gravatar.com/avatar/0702e63f4e9cb23ad9928fbda8f3f9f3?s=400&d=robohash&r=x",
      },
    },
    {
      userId: 2,
      propertyId: 1,
      review: "Beautiful place! Thanks for hosting!",
      rating: 4,
    },
    {
      userId: 1,
      propertyId: 1,
      review:
        "The property was the perfect location to have a peaceful weekend with an amazing view.",
      rating: 4,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  function PropertyImgModal() {
    if (showModal) {
      return (
        <>
          <div
            className="property-img-modal-container"
            onClick={() => setShowModal(false)}
          />
          <div className="property-img-modal">
            <ul>
              {property.imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt="" />
              ))}
            </ul>
          </div>
        </>
      );
    }
  }

  return (
    <Container>
      {property?.imageUrls && (
        <div>
          <PropertyImgModal />

          <div className="show-page-images" onClick={() => setShowModal(true)}>
            <div className="property-show-idx-div">
              <img
                className="property-show-image-main"
                src={property.imageUrls[0]}
                alt=""
              />
            </div>
            <div className="show-page-small-images">
              {property.imageUrls.slice(1).map((url, index) => {
                return <img key={index} src={url} alt="" />;
              })}
            </div>
          </div>
        </div>
      )}

      <Row className="mt-4">
        <Col md={6}>
          <div id="property-show-page">
            <div id="show-page-title-pic">
              <h2>{property.name}</h2>
            </div>
            <span>
              {property.city}, {property.country}
            </span>{" "}
            <br />
            <span>
              {property.maxGuest} guests · {property.bedrooms}{" "}
              {property.bedrooms > 1 ? "bedrooms" : "bedroom"} ·{" "}
              {property.bedrooms} {property.bedrooms > 1 ? "beds" : "bed"} ·{" "}
              {property.baths} {property.baths > 1 ? "bathrooms" : "bathroom"}
            </span>
            <div className="solid-line"></div>
            <span>${property.price} per night</span>
            <div className="solid-line mt-4"></div>
            <span>{property.description}</span>
            <div className="solid-line"></div>
            <div className="mt-4">
              <AmenityContainer amenities={property.amenities} />
            </div>
          </div>
          <div >
            <Review
              userId={reviews[0].userId}
              propertyId={reviews[0].propertyId}
              user={reviews[0].User}
              review={reviews[0].review}
              rating={reviews[0].rating}
            />
          </div>
        </Col>
        <Col md={6}>
          <div>
            <ReservationForm
              price={property.price}
              maxGuest={property.maxGuest}
              bedrooms={property.bedrooms}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
