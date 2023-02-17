"use strict";
const bcrypt = require("bcryptjs");
const { Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "bookings",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          startDateBeforeToday(value) {
            if (value.isBefore(new Date())) {
              throw new Error("Start date must not be before today's date");
            }
          },
          startDateAfterEndDate() {
            if (this.startDate.isAfter(this.endDate)) {
              throw new Error("Start date must be before the end date.");
            }
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          endDatebeforeStartDate() {
            if (this.endDate.isBefore(this.startDate)) {
              throw new Error("End date must be after the start date.");
            }
          },
        },
      },
    },
    {
      underscored: true,
    }
  );
};
