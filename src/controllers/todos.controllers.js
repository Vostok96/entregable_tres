const Todos = require("../models/todos.models");

const getAllTodos = async (req, res) => {
    try{
        const todos = await Todos.findAll();
        res.json(todos);
    } catch (error) {
        res.status(400).json(error)
    }
};

const getTodosByCategorie = async (req, res) => {
    try {
        const categoryId = req.params.categorie;
        const todos = await Todos.findAll({
            where: {
                categoryId: categoryId
            }
        });
        res.json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
};


const createTodo = async (req, res) => {
    try {
        const { title, description, completed, userId, categoryId } = req.body;
        const todo = await Todos.create({
            title,
            description,
            completed,
            userId,
            categoryId
        });
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
};
  

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todos.destroy({
            where: {id}
        });
        res.status(204).send();
        } catch (error) {
        res.status(400).json(error);
        }
};

const updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {completed} = req.body;
        await Todos.update({completed}, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = {
    getAllTodos,
    getTodosByCategorie,
    createTodo,
    deleteTodo,
    updateTodo
}