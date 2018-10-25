module.exports = (sequelize, DataType) => {

  return sequelize.define("Groupe_user", {

      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tranche_age: {
        type: DataType.STRING,
        allowNull: false
      },
      numero_tranche_age: {
        type: DataType.INTEGER,
        allowNull: false
      }
    });
};