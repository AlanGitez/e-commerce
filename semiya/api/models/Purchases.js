const s = require("sequelize");
const db = require("../db");

class Purchases extends s.Model{}

Purchases.init({
    amount:{
        type: s.FLOAT,
        allowNull: false
    },
    shippingAdress: {
        type: s.STRING,
        allowNull: false
    }
}, {sequelize:db, modelName:"purchases"});


module.exports = Purchases;