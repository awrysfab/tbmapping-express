const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class HealthFacility extends Model {}

HealthFacility.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subdistrict_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "HealthFacility",
    tableName: "health_facilities",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

// console.log("HealthFacility", HealthFacility === sequelize.models.HealthFacility);

module.exports = HealthFacility;
