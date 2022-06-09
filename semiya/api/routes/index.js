const express = require("express");
const router = express.Router();
const routerProducts = require("./products");
const routerUsers = require("./users.js");
const routerCategories = require("./categories");

router.use('/products', routerProducts)
router.use('/users', routerUsers)
router.use('/cateogries', routerCategories)


module.exports = router;
