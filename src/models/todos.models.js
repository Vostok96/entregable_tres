const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todos = db.define('todos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING(360),
        allowNull: false,
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'user_id',
    },
    categoryId:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'category_id'
    }
},{
    timestamps: false,

});

module.exports = Todos;