"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PropertyImages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      url: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PropertyImages");
  },
};
