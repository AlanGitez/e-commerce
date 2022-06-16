const Users = require("./Users");
const Products = require("./Products");
const Purchases = require("./Purchases");
const Review = require("./Review");
const Categories = require("./Categories");

// Favorites.belongsTo(Users, {as: "author"});
// Users.hasOne(Favorites, {as: "favorites"});


Purchases.belongsTo(Users, {as: "author", foreignKey: 'authorId'});
Purchases.hasMany(Products, {as: "products"});
Users.hasMany(Purchases, {as: "purchases"});

// Favorites.hasMany(Products, {as: "product"});

// Review.belongsTo(Users, {as: "author"});
// Users.hasMany(Review, {as: "review"});

Categories.belongsToMany(Products,  { through: 'products_categories' })
Products.belongsToMany(Categories, { through: 'products_categories' })

Products.hasMany(Review, {as: "review"})
Review.belongsTo(Products, {as: "product", foreignKey: 'authorId'})

module.exports = {Users, Products, Purchases, Review, Categories};