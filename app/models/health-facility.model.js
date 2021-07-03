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
    },
    subdistrict_id: {
      type: DataTypes.INTEGER,
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

// Admin.hasMany(Forum, {
//   foreignKey: "creator",
// });
// Forum.belongsTo(Admin, {
//   foreignKey: "creator",
// });

// console.log("Admin", HealthFacility === sequelize.models.HealthFacility);

module.exports = HealthFacility;
