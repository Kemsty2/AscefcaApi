module.exports = (sequelize, DataType) => {

  return sequelize.define("Video_traduction", {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titre_video: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: ""
      },
      desc_video: {
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
      },
      langue: {
        type: DataType.STRING(10),
        allowNull: false,
        defaultValue: "FR"
      }
    });

};