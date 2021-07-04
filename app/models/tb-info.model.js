const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class TbInfo extends Model {}

TbInfo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    admin_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "TbInfo",
    tableName: "tb_infos",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

// console.log("TbInfo", TbInfo === sequelize.models.TbInfo);

module.exports = TbInfo;
