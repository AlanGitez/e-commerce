const express = require("express");
const { Products, Categories } = require("../models");
const CategoriesRouter = express.Router();

CategoriesRouter.get("/", (req, res, next) => {
  Categories.findAll()
    .then((categories) => res.send(categories))
    .catch(next);
});

CategoriesRouter.get("/:name", (req, res, next) => {
  const name = req.params.name;
  Products.findAll({
    include: {
      model: Categories,
      where: {
        name,
      },
    },
  })
    .then((categories) => res.send(categories))
    .catch(next);
});

CategoriesRouter.post("/", (req, res, next) => {
  Categories.create(req.body.name)
    .then((category) => res.send(category))
    .catch(next);
});

CategoriesRouter.delete("/delete/:id", (req, res, next) => {
  Categories.destroy({
    where: { id: req.params.id },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

CategoriesRouter.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  Categories.update({ name: req.body.name }, { where: { id }, returning: true })
    .then(([affectedRows, category]) => {
      res.send(category[0]);
    })
    .catch(next);
});

module.exports = CategoriesRouter;
