const s = require("sequelize");
const { Products } = require("../models");
const Router = require("express").Router();

const filterQuery = (req, res, next) => {
  const isEmpty = Object.keys(req.query).length === 0;
  if (isEmpty) return next();
  const queryValue = req.query.name.toUpperCase();
  Products.findAndCountAll({
    where: {
      name: {
        [s.Op.substring]: queryValue,
      },
    },
    // include: [{ model: Categories, as: 'categories'}]
  })
    .then((response) => res.send(response.rows))
    .catch((err) => console.error("PRODUCT-QUERYSEARCH-ERR", err));
};
module.exports = { filterQuery };
