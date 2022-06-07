const s = require("sequelize");
const db = require("../db");

class Review extends s.Model{}

Review.init({
    content: {
        type: s.TEXT
    }
}, {sequelize:db, modelName:"review"});


module.exports = Review;