"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          propertyId: 2,
          review:
            "Very nice and clean.Absolutely gorgeous location. Stunning house.",
          rating: 5,
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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
