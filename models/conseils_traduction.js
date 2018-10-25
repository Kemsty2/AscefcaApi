module.exports = (sequelize, DataType) => {

  return sequelize.define("Conseils_traduction", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
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
