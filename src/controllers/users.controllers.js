const Users = require("../models/users.models");

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (typeof username !== 'string' || !username) {
            return res.status(400).json({
                error: 'invalid username',
                message: 'Username cannot be null or different from string'
            });
        }
        if (typeof email !== 'string' || !email) {
            return res.status(400).json({
                error: 'invalid email',
                message: 'Email cannot be null or different from string'
            });
        }
        if (typeof password !== 'string' || !password) {
            return res.status(400).json({
                error: 'invalid password',
                message: 'Password cannot be null or different from string'
            });
        }
        await Users.create({ username, email, password });
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await Users.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    deleteUser
};
