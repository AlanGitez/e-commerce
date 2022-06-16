const express = require("express");
const { Products, Categories } = require("../models");
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


ProductsRouter.post("/", (req, res, next) => {
  const { categories } = req.body;
  const { name } = categories;
  Categories.findOrCreate({
    where: { name },
  })
    .then((data) => {
      const category = data[0];
      Products.create(req.body)
        .then((product) => product.setCategories(category))
        .then((product) => res.send(product));
    })
    .catch(next);
});

//modificar un producto
ProductsRouter.put("/update/:id", (req, res, next) => {
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
ProductsRouter.delete("/delete/:id", (req, res, next) => {
  Products.destroy({
    where: { id: req.params.id },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

module.exports = ProductsRouter;
