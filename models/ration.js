module.exports = (sequelize, DataType) => {

  return sequelize.define("Ration", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantite: {
        type: DataType.FLOAT,
        allowNull: false
      },
      url_photo: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      }
    });
};