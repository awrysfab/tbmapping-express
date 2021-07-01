module.exports = (sequelize, Sequelize) => {
  const TbInfo = sequelize.define("tbinfo", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    }
  },{
    freezeTableName: true
  });
  return TbInfo;
};
