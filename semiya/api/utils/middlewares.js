const filterQuery = (req, res, send) => {
    
    if(!req.query) next();
    
    Router.get("/", (req, res, next) => {
        Products.findAndCountAll({
            where: req.query, 
            include: [{ model: Categories, as: 'categories'}]
        })
        .then(([count, products]) => res.send({products, count}))
        .catch(err => console.error("PRODUCT-QUERYSEARCH-ERR", err));
    });
}
module.exports = {filterQuery};