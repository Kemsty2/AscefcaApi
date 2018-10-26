module.exports = (sequelize, DataType) => {

  return sequelize.define("SuiviPersonnel", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataType.INTEGER,
        allowNull: false
      }
    });
};