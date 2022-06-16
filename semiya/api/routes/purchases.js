const express= require('express')
const nodemailer = require("nodemailer");
const {Purchases, Users}=require('../models');

const purchasesRouter=express.Router();


purchasesRouter.post("/:id", (req, res, next) => {
const id =req.params.id
// let testAccount;
// let transporter;
Users.findByPk(id)
.then((user)=> 
    Purchases.create(req.body)
      .then((purchase) => purchase.setAuthor(user))
      // .then(()=> testAccount =  nodemailer.createTestAccount())
    //   .then(()=>{ transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: testAccount.user, // generated ethereal user
    //       pass: testAccount.pass, // generated ethereal password
    //     },
    //   });})
    //   .then(()=>transporter.sendMail({
    //     from: testAccount, // sender address
    //     to: req.body.email, // list of receivers
    //     subject: `Tu orden llegara pronto.`, // Subject line
    //     text: `Hola ${req.body.name}, tu pedido llegara a ${req.body.adress} en tan solo tres dias. Esperamos que disfrutes de tu compra!`, // plain text body
     
    //   }))
      .then((purchase) => res.send(purchase))
      .catch(next))
    .catch(next)
  });
  
  purchasesRouter.get('/:id', (req,res, next)=>{
    const id =req.params.id
    Purchases.findAll({where:{authorId: id}}) 
    .then((purchases) => res.send(purchases))
    .catch(next)
  })

  module.exports=purchasesRouter;