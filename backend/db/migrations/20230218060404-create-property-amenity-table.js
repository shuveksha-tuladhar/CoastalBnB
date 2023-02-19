module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("PropertyAmenities", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        PropertyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Properties",
            key: "id",
          },
        },
        AmenityId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Amenities",
            key: "id",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    },
  
    down: (queryInterface, Sequelize) => {
      // remove table
      return queryInterface.dropTable("PropertyAmenities");
    },
  };
  