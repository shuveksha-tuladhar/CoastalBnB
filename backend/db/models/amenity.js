"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },

    Amenity.associate = function (models) {
      Amenity.belongsToMany(models.Properties, { through: 'propertyId'})
    }

  );
  return Amenity;
};
