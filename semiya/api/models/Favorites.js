const s = require("sequelize");
const db = require("../db");

class Favorites extends s.Model{}

Favorites.init({

}, {sequelize:db, modelName:"favorites"});


module.exports = Favorites;
