"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Properties",
      [
        {
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
        },
        {
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
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Properties", null, {});
  },
};
