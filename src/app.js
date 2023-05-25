const express = require('express');
require('dotenv').config();
const db = require('./utils/database');
const Todos = require("./models/todos.models");
const Categories = require("./models/categories.models");
const Users = require("./models/users.models");
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');
const categorieRoutes = require('./routes/categories.routes');

const initModels = require("./models/initModels");
const cors = require('cors');

initModels();

db.authenticate()
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch((error) => console.log(error));

db.sync()
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((error) => {
        console.log(error);
    });

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Servidor OK");
});

app.use(userRoutes);
app.use(todoRoutes);
app.use(categorieRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

console.log(process.env)

