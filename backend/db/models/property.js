"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    "Property",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false,
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      baths: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxGuest: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    
  );

  Property.associate = function (models) {
    Property.hasMany(models.Bookings, { foreignKey: "propertyId"});
    Property.hasMany(models.PropertyImages, { foreignKey: "propertyId"});
    Property.hasMany(models.Reviews, { foreignKey: "propertyId"});

    Property.belongsTo(models.Users, { foreignKey: "userId" });
    Property.belongsToMany(models.Amenities, { through: "PropertyAmenitis" });
  };
  return Property;
};

