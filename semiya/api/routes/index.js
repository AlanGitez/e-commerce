const express = require("express");
const Router = express.Router();

const products = require("./products")


Router.use("/products", products)


module.exports = Router;