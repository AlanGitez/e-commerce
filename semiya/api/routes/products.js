const express = require("express");
const { Products } = require("../models");
const ProductsRouter = express.Router();

const { filterQuery } = require("../utils/middlewares");


ProductsRouter.get("/", filterQuery, (req, res, next) => {
  Products.findAll()
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

//devuelve un producto especifico
ProductsRouter.get("/:id", (req, res, next) => {
  Products.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => console.log(error));
});

//agrega un producto
ProductsRouter.post("/", (req, res) => {
  Products.create(req.body)
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

//modificar un producto
ProductsRouter.put("/:id", (req, res, next) => {
  Products.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([affectedRows, product]) => {
      res.send(product[0]);
    })
    .catch(next);
});

//eliminar un producto
ProductsRouter.delete("/:id", (req, res, next) => {
  Products.destroy({
    where: { id: req.params.id },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

module.exports = ProductsRouter;

