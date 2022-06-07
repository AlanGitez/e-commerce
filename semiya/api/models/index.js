const Users = require("./Users");
const Products = require("./Products");
const Favorites = require("./Favorites");
const Purchases = require("./Purchases");


Favorites.belongsTo(Users, {as: "author"});
Users.belongsTo(Favorites, {as: "favorites"});

Purchases.belongsTo(Users, {as: "author"});
Purchases.hasMany(Products, {as: "products"});
Users.hasMany(Purchases, {as: "purchases"});

Favorites.hasMany(Products, {as: "product"});

module.exports = {Users, Products, Favorites, Purchases};