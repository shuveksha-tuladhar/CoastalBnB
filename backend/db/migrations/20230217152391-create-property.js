"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      address: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      name: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      price: {
        type: Sequelize.NUMERIC(10,2),
        allowNull: false,
        unique: false,
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      baths: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      max_guest: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("reviews");
  },
};
