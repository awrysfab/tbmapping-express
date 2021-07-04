const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const ClusterAttribute = require("./cluster-attribute.model")

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

Year.hasMany(ClusterAttribute, {
  foreignKey: "year_id",
});
ClusterAttribute.belongsTo(Year, {
  foreignKey: "year_id",
});

// console.log("Year", Year === sequelize.models.Year);

module.exports = Year;
