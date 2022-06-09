const express = require("express");
const { Users } = require("../models");
const UsersRouter = express.Router();
const passport = require("passport");

UsersRouter.get("/", (req, res, next)=>{
    Users.findAll()
    .then((users)=>res.send(users))
    .catch(next)
})

UsersRouter.post("/register", (req, res, next) => {
    Users.create(req.body)
      .then((user) => res.status(201).send(user))
      .catch(next);
  });
  
  UsersRouter.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("Llego al back:", req.body)
    req.login(req.user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send(req.user);
    });
  });
  
  UsersRouter.post("/logout", (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      return res.sendStatus(200);
    });
  });

  UsersRouter.put("/:id/update",(req, res,next)=>{
      const id=req.params.id
      Users.update(req.body,{where:{id}, returning:true})
      .then(([affectedRows, product]) => {
        res.send(product[0]);
      })
      .catch(next);
  });

  UsersRouter.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
  
    res.send(req.user);
  });
  
  module.exports= UsersRouter;