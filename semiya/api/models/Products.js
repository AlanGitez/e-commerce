const s = require("sequelize");
const db = require("../db");

class Products extends s.Model {}

Products.init(
  {
    name: {
      type: s.STRING,
      // allowNull: false,
    },
    price: {
      type: s.FLOAT,
      // allowNull: false,
    },
    rating: {
        type: s.FLOAT
    },
    stock: {
      type: s.FLOAT,
      // allowNull: false,
    },
    description: {
      type: s.TEXT,
      // allowNull: false,
    },
    fraccionable: {
      type: s.BOOLEAN,
      // defaultValue : false,
    },
    quantity : {
      type: s.INTEGER,
      defaultValue: 1
    },
    image: {
      type: s.STRING,
      // allowNull: false,
    }
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;
