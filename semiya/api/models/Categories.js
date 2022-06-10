const s = require("sequelize");
const db = require("../db");
const Products = require("./Products");

class Categories extends s.Model{}

Categories.init({
    name:{
        type: s.STRING,
        allowNull: false
    },
}, {sequelize:db, modelName:"categories"});


module.exports = Categories;


