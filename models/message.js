module.exports = (sequelize, DataType) => {

  return sequelize.define("Message", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      },
      id_emetteur: {
        type: DataType.INTEGER,
        allowNull: false
      },
      id_recepteur: {
        type: DataType.INTEGER,
        allowNull: false
      }
    });
};