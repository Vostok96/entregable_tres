const Categories = require("../models/categories.models");

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getCategoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params);
        const categories = await Categories.findByPk(id);
        res.json(categories);
    } catch (error) {
        res.status(400).json(error);
    }
};

const createCategories = async (req, res) => {
    try {
        const { name, userId } = req.body;
        if (!name || !userId) {
            return res.status(400).json({ error: 'Campos faltantes' });
        }

        const category = await Categories.create({ name, userId });
        res.status(201).json(category);
    } catch (error) {
   
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const deleteCategories = async (req, res) => {
    try {
        const { id } = req.params;
        await Categories.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getAllCategories,
    getCategoriesById,
    createCategories,
    deleteCategories
};
