let Category = require('../models/Category');
const { errorHandler } = require('../helpers/dbErrorHandler');


//New category
exports.create = (req, res) => {
    const newcategory = new Category(req.body);
    newcategory.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data }); 
    });
};

//category by id Middle ware
exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

// fectchCategory by id

exports.fectchCategory = (req , res) => {

    return res.json(req.category);

}