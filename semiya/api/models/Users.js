const s = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends s.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Users.init(
  {
    name: {
      type: s.STRING,
      allowNull: false,
    },
    lastName: {
      type: s.STRING,
      allowNull: false,
    },
    email: {
      type: s.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: s.TEXT,
      allowNull: false,
      validate: {
        len: [4, 8],
      },
    },
    salt: {
      type: s.STRING,
    },
    address: {
      type: s.STRING,
    },
    type: {
      type: s.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

Users.beforeCreate((user) => {
  if (this.type == null) this.type = "common";
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = Users;
