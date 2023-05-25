const Todos = require("./todos.models");
const Categories = require("./categories.models");
const Users = require("./users.models");

const initModels = () => {
    Users.hasMany(Todos, { foreignKey: 'userId' });
    Users.hasMany(Categories, { foreignKey: 'userId' });
    Categories.hasMany(Todos, { foreignKey: 'categoryId' });
};

module.exports = initModels;

