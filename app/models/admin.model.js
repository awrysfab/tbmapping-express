const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../../config/database");

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

// Admin.hasMany(Forum, {
//   foreignKey: "creator",
// });
// Forum.belongsTo(Admin, {
//   foreignKey: "creator",
// });

// console.log("Admin", Admin === sequelize.models.Admin);

module.exports = Admin;