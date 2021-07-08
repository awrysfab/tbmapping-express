const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../../config/database");
const TbInfo = require("./tb-info.model");
const HealthFacility = require("./health-facility.model");
const ClusterAttribute = require("./cluster-attribute.model");
class Admin extends Model {}

Admin.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Admin",
    tableName: "admins",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

Admin.hasMany(TbInfo, {
  foreignKey: "admin_id",
});
TbInfo.belongsTo(Admin, {
  foreignKey: "admin_id",
  as: "admin"
});

Admin.hasMany(HealthFacility, {
  foreignKey: "admin_id",
});
HealthFacility.belongsTo(Admin, {
  foreignKey: "admin_id",
  as: "admin"
});

Admin.hasMany(ClusterAttribute, {
  foreignKey: "admin_id",
});
ClusterAttribute.belongsTo(Admin, {
  foreignKey: "admin_id",
  as: "admin"
});

// console.log("Admin", Admin === sequelize.models.Admin);

module.exports = Admin;
