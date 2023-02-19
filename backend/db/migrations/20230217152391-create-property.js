"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users" ,
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
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
      maxGuest: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Properties");
  },
};
