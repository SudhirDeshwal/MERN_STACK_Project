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