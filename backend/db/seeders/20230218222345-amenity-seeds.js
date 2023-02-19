"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Amenities",
      [
        {
          id: 1,
          description: "Kitchen",
          isActive: true,
        },
        {
          id: 2,
          description: "Central air conditioning",
          isActive: true,
        },
        {
          id: 3,
          description: "Washer/Dryer",
          isActive: true,
        },

        {
          id: 4,
          description: "Hair dryer",
          isActive: true,
        },
        {
          id: 5,
          description: "Shampoo",
          isActive: true,
        },
        {
          id: 6,
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
