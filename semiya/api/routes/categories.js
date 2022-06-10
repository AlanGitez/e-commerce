const express = require("express");
const { Products, Categories } = require("../models");
const CategoriesRouter = express.Router();

CategoriesRouter.get('/', (req, res, next)=>{
    Categories.findAll()
    .then((categories)=>res.send(categories))
    .catch(next)
})

CategoriesRouter.get('/:name', (req, res, next)=>{
    const name=req.params.name
    Categories.findOne({where:{name}, include: { model: Products, as: 'products' }})
    .then((categories)=>res.send(categories))
    .catch(next)
})

CategoriesRouter.post('/', (req, res, next)=>{
    Categories.create(req.body.name)
    .then((category)=>res.send(category))
    .catch(next)
})

CategoriesRouter.delete("/:id", (req, res, next) => {
    Categories.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.sendStatus(202))
      .catch(next);
  });

  CategoriesRouter.put("/update/:id",(req, res,next)=>{
    const id=req.params.id
    Categories.update({name:req.body.name},{where:{id}, returning:true})
    .then(([affectedRows, category]) => {
      res.send(category[0]);
    })
    .catch(next);
  });
  



//Para cuando hagamos las categorias redefinir la ruta de creado, ojo con el "setCategories(category)", no estoy seguro.

// ProductsRouter.post("/",(req, res, next)=>{
//     const { name, email } = req.body;
//       Categories.findOrCreate({
//         where: { name },
//       })
//         .then((data) => {
//           const category = data[0];
//           Products.create(req.body)
//             .then((product) => product.setCategories(category))
//             .then((product) => res.send(product));
//         })
//         .catch(next);
//     })


module.exports=CategoriesRouter;