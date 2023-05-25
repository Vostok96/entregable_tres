const {Router} = require('express');
const { getAllUsers, getUsersById, createUser, deleteUser } = require('../controllers/users.controllers');

const router = Router();

router.get("/users", getAllUsers );

router.get("/users/:id", getUsersById );

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

module.exports = router;