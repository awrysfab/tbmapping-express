const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const HealthFacility = require("./health-facility.model");
const ClusterAttribute = require("./cluster-attribute.model");

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

Subdistrict.hasMany(HealthFacility, {
  foreignKey: "subdistrict_id",
});
HealthFacility.belongsTo(Subdistrict, {
  foreignKey: "subdistrict_id",
});

Subdistrict.hasMany(ClusterAttribute, {
  foreignKey: "subdistrict_id",
});
ClusterAttribute.belongsTo(Subdistrict, {
  foreignKey: "subdistrict_id",
});

// console.log("Subdistrict", Subdistrict === sequelize.models.Subdistrict);

module.exports = Subdistrict;
