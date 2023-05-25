const {Router} = require('express');
const { getAllTodos, getTodosByCategorie, createTodo, deleteTodo, updateTodo } = require('../controllers/todos.controllers');

const router = Router();

router.get("/todos", getAllTodos );

router.get("/todos/:categorie", getTodosByCategorie );

router.post("/todos", createTodo);

router.delete("/todos/:id", deleteTodo);

router.put("/todos/:id", updateTodo);

module.exports = router;