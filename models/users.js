module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: ""
        },
        prenom: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: ""
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        telephone: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: ""
        },
        status: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        poids: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: -1
        },
        taille: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: -1
        },
        region_residence: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 5
        },
        activite: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: ""
        },
        ville: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: ""
        },
        token: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
    classMethods: {
        associate: (models) => {
            Users.hasMany(models.Tasks);
        }
    }
    });
    return Users;
};