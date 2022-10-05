const {sequelize, DataTypes}= require('sequelize');
const Sequelize = require ('../config/db');

const God = Sequelize.define('God',{
    name: {
        type: DataTypes.CHAR(64)
    },
    symbol: {
        type: DataTypes.CHAR(64)
    }
})

module.exports = God;