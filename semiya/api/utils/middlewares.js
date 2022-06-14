const s = require("sequelize");
const { Products } = require("../models");
const Router = require("express").Router();
const passport= require('passport')

const filterQuery = (req, res, next) => {
  const isEmpty = Object.keys(req.query).length === 0;
  if (isEmpty) return next();
  const queryType= Object.keys(req.query)[0];
  const queryValue = req.query.name.toUpperCase();
  Products.findAndCountAll({
    where: {
      [queryType]: {
        [s.Op.substring]: queryValue,
      },
    },
    // include: [{ model: Categories, as: 'categories'}]
  })
    .then((response) => res.send(response.rows))
    .catch((err) => console.error("PRODUCT-QUERYSEARCH-ERR", err));
};

function itsLoggedIn (req, res, next) {
  if(req.isAuthenticated()) next();
  else res.sendStatus(401)
}

module.exports = { filterQuery,
   itsLoggedIn 
  };

 