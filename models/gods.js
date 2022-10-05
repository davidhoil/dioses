const {sequelize, DataTypes}= require('sequelize');
const Sequelize = require ('../config/db');

const God = Sequelize.define('God',{
    name: {
        type: DataTypes.STRING(64)
    },
    symbol: {
        type: DataTypes.STRING(64)
    }
})

module.exports = God;