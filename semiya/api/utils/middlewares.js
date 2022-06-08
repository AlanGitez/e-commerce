const { Products } = require("../models");
const Router = require("express").Router();

const filterQuery = (req, res, next) => {
    const isEmpty  = Object.keys(req.query).length === 0
    if(isEmpty) return next();

    Products.findAndCountAll({
        where: req.query,
        // include: [{ model: Categories, as: 'categories'}]
    })
    .then((response) => res.send(response))
    .catch(err => console.error("PRODUCT-QUERYSEARCH-ERR", err));
}
module.exports = {filterQuery};