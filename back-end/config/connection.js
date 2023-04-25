const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 33066
});

module.exports = sequelize;