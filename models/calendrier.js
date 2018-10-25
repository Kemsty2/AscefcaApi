module.exports = (sequelize, DataType) => {

  return sequelize.define("Calendrier", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      mois: {
        type: DataType.INTEGER,
        allowNull: false
      },
      semaine: {
        type: DataType.INTEGER,
        allowNull: false
      },
      ville: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: ""
      },
      type_abondance: {
        type: DataType.INTEGER,
        allowNull: false
      }
    });
};