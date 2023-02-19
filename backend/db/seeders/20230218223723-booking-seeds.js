"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          id: 1,
          userId: 1,
          propertyId: 2,
          startDate: new Date("2023-5-12"),
          endDate: new Date("2023-5-15"),
        },
        {
          id: 2,
          userId: 2,
          propertyId: 1,
          startDate: new Date("2023-2-13"),
          endDate: new Date("2023-2-14"),
        },
        {
          id: 3,
          userId: 1,
          propertyId: 1,
          startDate: new Date("2023-4-21"),
          endDate: new Date("2023-4-25"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
