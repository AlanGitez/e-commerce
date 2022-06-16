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
    image: {
      type: s.STRING,
      // allowNull: false,
    },
    snippet: {
      type: s.VIRTUAL,
      get() {
        if (this.getDataValue("name") === undefined) return "";
        if (this.getDataValue("name").length < 30) {
          let dif = 30 - this.getDataValue("name").length;
          let blanks = "";
          for (let i = 0; i < dif; i++) {
            blanks += " ";
          }
          return this.getDataValue("name") + blanks + "...";
        }
        return this.getDataValue("name").slice(0, 30) + "...";
      },
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;
