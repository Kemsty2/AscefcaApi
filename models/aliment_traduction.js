module.exports = (sequelize, DataType) => {

  return sequelize.define("AlimentTraduction", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom_aliment: {
        type: DataType.STRING(500),
        allowNull: false,
        defaultValue: ""
      },
      unite_mesure: {
        type: DataType.STRING,
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