const {Router} = require('express');
const { getAllCategories, getCategoriesById, createCategories, deleteCategories } = require('../controllers/categories.controllers');

const router = Router();

router.get("/categories", getAllCategories );

router.get("/categories/:id", getCategoriesById );

router.post("/categories", createCategories);

router.delete("/categories/:id", deleteCategories);


module.exports = router;