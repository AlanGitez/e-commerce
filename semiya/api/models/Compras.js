const s = require("sequelize");
const db = require("../db");

class Compras extends s.Model{}

Compras.init({
    amount:{
        type: s.FLOAT,
        allowNull: false
    },
    shippingAdress: {
        type: s.STRING,
        allowNull: false
    }
}, {sequelize:db, modelName:"compras"});


module.exports = Compras;