"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    
  );

  Review.associate = function (models) {
    // Review.belongsTo(models.User, { foreignKey: "userId" });
    // Review.belongsTo(models.Property, { foreignKey: "propertyId" });
  };
  return Review;
};
