const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'user_id',
    },
    
},{
    timestamps: false,

});

module.exports = Categories;