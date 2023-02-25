"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const PropertyImage = sequelize.define(
    "PropertyImage",
    {
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
   
  );

  PropertyImage.associate = function (models) {
      //  PropertyImage.belongsToMany(models.Property, { through: "propertyId" });
  };
  
  return PropertyImage;
};

