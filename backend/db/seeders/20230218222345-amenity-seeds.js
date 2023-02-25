"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Amenities",
      [
        {
          description: "Kitchen",
          isActive: true,
        },
        {
          description: "Central air conditioning",
          isActive: true,
        },
        {
          description: "Washer/Dryer",
          isActive: true,
        },

        {
          description: "Hair dryer",
          isActive: true,
        },
        {
          description: "Shampoo",
          isActive: true,
        },
        {
          description: "Iron",
          isActive: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Amenities", null, {});
  },
};
