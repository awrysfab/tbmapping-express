const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Subdistrict extends Model {}

Subdistrict.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Subdistrict",
    tableName: "subdistricts",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

// console.log("Subdistrict", Subdistrict === sequelize.models.Subdistrict);

module.exports = Subdistrict;
