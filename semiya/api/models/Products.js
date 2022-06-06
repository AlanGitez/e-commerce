const s = require("sequelize");
const db = require("../db");

class Products extends s.Model{}

Products.init({
    name:{
        type: s.STRING,
        allowNull: false
    },
    price: {
        type: s.FLOAT,
        allowNull: false
    },
    stock: {
        type: s.FLOAT,
        allowNull: false,
    },
    description: {
        type: s.TEXT,
        allowNull: false,
    },
    fraccionable: {
        type: s.BOOLEAN,
    }

}, {sequelize:db, modelName:"products"});


module.exports = Products;