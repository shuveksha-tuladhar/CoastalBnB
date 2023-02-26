"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        startDateBeforeToday(value) {
          if (Validator.isBefore(value, new Date().toISOString())) {
            throw new Error("Start date must not be before today's date");
          }
        },
        startDateAfterEndDate() {
          if (Validator.isAfter(this.startDate, this.endDate)) {
            throw new Error("Start date must be before the end date.");
          }
        },
      },
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        endDatebeforeStartDate() {
          if (Validator.isBefore(this.endDate, this.startDate )) {
            throw new Error("End date must be after the start date.");
          }
        },
      },
    },
  });

  Booking.associate = function (models) {
    Booking.belongsTo(models.User, { foreignKey: "userId" });
    Booking.belongsTo(models.Property, { foreignKey: "propertyId" });
  };
  return Booking;
};
