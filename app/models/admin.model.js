module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
    freezeTableName: true
  });
  return Admin;
};
