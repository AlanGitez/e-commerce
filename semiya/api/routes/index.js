const express = require("express");
const router = express.Router();
const routerProducts = require("./products");
const routerUsers = require("./users.js");
const routerCategories = require("./categories");
const routerPurchases= require('./purchases')

router.use('/products', routerProducts)
router.use('/users', routerUsers)
router.use('/categories', routerCategories)
router.use('/purchases', routerPurchases)


module.exports = router;
