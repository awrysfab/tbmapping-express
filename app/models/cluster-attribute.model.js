const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class ClusterAttribute extends Model { }

ClusterAttribute.init(
  {
    case: {
      type: DataTypes.INTEGER,
    },
    target_case: {
      type: DataTypes.INTEGER,
    },
    death_rate: {
      type: DataTypes.INTEGER,
    },
    density: {
      type: DataTypes.INTEGER,
    },
    healthy_home: {
      type: DataTypes.INTEGER,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year_id: {
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
    modelName: "ClusterAttribute",
    tableName: "cluster_atrributes",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

// console.log("ClusterAttribute", ClusterAttribute === sequelize.models.ClusterAttribute);

module.exports = ClusterAttribute;
