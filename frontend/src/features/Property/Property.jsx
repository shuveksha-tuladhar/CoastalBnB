import "./Property.css";
import PropertyItem from "./PropertyItem";

const Property = () => {
  const properties = [
    {
      id: 1,
      userId: 1,
      address: "22848 E Pacific Coast Hwy",
      city: "Malibu Beach",
      state: "California",
      country: "United States",
      zipcode: 90165,
      name: "The Malibu Suites",
      description: "This beach front residence sits directly on the Pacific Ocean with with no neighbors and a private sandy cove. We welcome responsible guests seeking to enjoy the finest that Malibu offers in a serene and upscale setting.",
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
      ],
      imageUrls: [
        "https://a0.muscache.com/im/pictures/f3e42ca3-6d2a-47e5-af3a-481ec297cf54.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/afac06ca-3ca2-4435-8ce3-7a79ea6c2a37.jpg?im_w=1440",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53431391/original/5e80e8b7-0940-4b46-a68b-ef8aa4a4fae2.jpeg?im_w=1440",
        "https://a0.muscache.com/im/pictures/afac06ca-3ca2-4435-8ce3-7a79ea6c2a37.jpg?im_w=1440",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53431391/original/5e80e8b7-0940-4b46-a68b-ef8aa4a4fae2.jpeg?im_w=1440",
      ],
    },
    {
      id: 2,
      userId: 1,
      address: "711 S Myers St",
      city: "Oceanside",
      state: "California",
      country: "United States",
      zipcode: 92054,
      name: "Ocean Front Home",
      description: "",
      price: 625.0,
      bedrooms: 3,
      baths: 2,
      maxGuest: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrls: [
        "https://a0.muscache.com/im/pictures/9400ca04-25df-4631-8eb8-cf2fb990cd19.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/3b693b83-9998-4740-8b4b-afa4ee236d83.jpg?im_w=1440",
        "https://a0.muscache.com/im/pictures/66e13f00-7df9-44cb-988d-153fa233a57a.jpg?im_w=1440",
      ],
    },
  ];
  const propertyItems = properties.map((property) => {
    return <PropertyItem key={property.id} property={property} />;
  });

  return (
    <div className="properties-index">
      <ul>{propertyItems}</ul>
    </div>
  );
};

export default Property;
