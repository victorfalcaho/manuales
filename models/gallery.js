const { Sequelize } = require('sequelize');

const sequelize = require('../database/database');

const Gallery = sequelize.define('galeria', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  imagen: Sequelize.STRING,
});

module.exports = Gallery;
