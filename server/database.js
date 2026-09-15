const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sapphire_db', 'postgres', 'Iamibtisam74@', {
    host: 'localhost',
    port: 7485,
    dialect: 'postgres'
});

module.exports = sequelize;