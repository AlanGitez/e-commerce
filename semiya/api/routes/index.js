const express = require("express");
const router = express.Router();
const routerProducts = require("./products");
const routerUsers = require("./users.js");

router.use('/products', routerProducts)
router.use('/users', routerUsers)


module.exports = router;
