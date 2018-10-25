module.exports = (sequelize, DataType) => {

  return sequelize.define("Video", {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url_video: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      }
    });
};