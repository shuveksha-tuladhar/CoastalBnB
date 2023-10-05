import ReservationForm from "../Reservation/ReservationForm";
import "./PropertyDetails.css";

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
    description: "",
    price: 450.0,
    bedrooms: 5,
    baths: 4,
    maxGuest: 10,
    createdAt: new Date(),
    updatedAt: new Date(),

    imageUrls: [
      "https://a0.muscache.com/im/pictures/f3e42ca3-6d2a-47e5-af3a-481ec297cf54.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/afac06ca-3ca2-4435-8ce3-7a79ea6c2a37.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53431391/original/5e80e8b7-0940-4b46-a68b-ef8aa4a4fae2.jpeg?im_w=1440",
    ],
  };

  return (
    <>
      <div className="show-page-images">
        <div className="property-show-idx-div">
          <img
            className="property-show-image-main"
            src={property.imageUrls[0]}
            alt=""
          />
        </div>
        <div className="show-page-small-images">
          <img
            className="property-show-image-small"
            src={property.imageUrls[1]}
            alt=""
          />
          <img
            className="property-show-image-small"
            src={property.imageUrls[2]}
            alt=""
          />
          <img
            className="property-show-image-small"
            src={property.imageUrls[1]}
            alt=""
          />
          <img
            className="property-show-image-small"
            src={property.imageUrls[2]}
            alt=""
          />
        </div>
      </div>
      <div>
        <ReservationForm price={property.price} maxGuest={property.maxGuest} bedrooms={property.bedrooms}/>
      </div>
    </>
  );
};

export default PropertyDetails;
