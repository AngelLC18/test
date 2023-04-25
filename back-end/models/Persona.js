const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Persona = sequelize.define('Personas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },

    genero: {
        type: DataTypes.ENUM('masculino','femenino'),
        allowNull: false,
    },


},{
    timestamps: false
})


module.exports = Persona;
