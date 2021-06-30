module.exports = (sequelize, Sequelize) => {
  const Info = sequelize.define("info", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });
  return Info;
};