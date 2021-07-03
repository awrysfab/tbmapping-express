const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Year extends Model {}

Year.init(
  {
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Year",
    tableName: "years",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

// console.log("Year", Year === sequelize.models.Year);

module.exports = Year;
