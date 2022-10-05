const {sequelize, DataTypes}= require('sequelize');
const sequelize = require ('../config/db');

const God = require('./gods');

const Realm = sequelize.define('Realm',{
    name:{
        type: DataTypes.CHAR(64)
    },
    description:{
        type: DataTypes.TEXT
    }
});

//Relacion 1 a Muchos

Realm.hasMany(God);
God.belongsTo(Realm);

module.exports = Realm;