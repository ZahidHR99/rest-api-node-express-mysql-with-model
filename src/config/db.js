const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_app_node', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
