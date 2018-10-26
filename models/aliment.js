module.exports = (sequelize, DataType) => {

  return sequelize.define("Aliment", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url_photo: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      },
      numero_groupe: {
        type: DataType.INTEGER,
        allowNull: false
      }
    });
};