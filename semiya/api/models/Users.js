const s = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends s.Model{}

Users.init({
    name:{
        type: s.STRING,
        allowNull: false
    },
    lastName: {
        type: s.STRING,
        allowNull: false
    },
    email: {
        type: s.TEXT,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: s.TEXT,
        allowNull: false,
        validate:{
            len: [4, 8]
        }
    },
    adress: {
        type: s.STRING,
    },
    type:{
        type: s.STRING
    }

}, {sequelize:db, modelName:"users"});


Users.beforeCreate(() => {
    if(this.type == null) this.type = "common";
});


module.exports = Users;