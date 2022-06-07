const express = require("express");
const router = express.Router();
const routerProducts = require("./products");

router.use('/products', routerProducts)


module.exports = router;
