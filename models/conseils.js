module.exports = (sequelize, DataType) => {
  return sequelize.define("Conseils", {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url_photo: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      }
    });
};