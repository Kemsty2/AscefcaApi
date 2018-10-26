module.exports = (sequelize, DataType) => {

  return sequelize.define("MessageForum", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      }
    });
};