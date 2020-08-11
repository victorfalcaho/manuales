const { Sequelize } = require('sequelize');

const sequelize = require('../database/database');

const Usuario = sequelize.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  foto: Sequelize.STRING,
  sexo: Sequelize.STRING,
});

module.exports = Usuario;
