const {Sequelize} = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    dialectOptions: {ssl: { require: true, rejectUnauthorized: false }}
});

module.exports = db;

//postgres://denis:WfjyBTu93t8Q9lvR1RNMHBXcalVA2BpF@dpg-chnba49mbg5577kicvh0-a.oregon-postgres.render.com/entregable_tres