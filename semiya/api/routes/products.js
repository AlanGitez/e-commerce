
const express = require("express");
const { Products } = require("../models");
const ProductsRouter = express.Router();


// const filterQuery = (req, res, send) => {
//   next();

//   ProductsRouter.get("/", (req, res, next) => {
//     console.log(req);

// };
//devuelve todos los productos
//filterQuery = filtra si tiene query o no
ProductsRouter.get("/", function (req, res, next) {
  // if (req.query === {}) {
    // console.log(...req.query);
    Products.findAll()
      .then((productos) => res.send(productos))
      .catch((error) => console.log(error));
  // } else {
  //   console.log(req.query);
  //   Products.findAll({
  //     where: { name: req.query.name },

  //     // include: [{ model: Categories, as: 'categories'}]
  //   })
  //     .then((products) => res.send(products))
  //     .catch((err) => console.error("PRODUCT-QUERYSEARCH-ERR", err));
  // }
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

