let Product = require('../models/Product');
const { errorHandler } = require('../helpers/dbErrorHandler');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');


//New Product
exports.create = (req, res) => {
    let Productform = new formidable.IncomingForm();
    Productform.keepExtensions = true;
    Productform.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // product validation
        const { name, description, price, category, quantity, shipping } = fields;

        if (!name || !description || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let Newproduct = new Product(fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            Newproduct.photo.data = fs.readFileSync(files.photo.path);
            Newproduct.photo.contentType = files.photo.type;
        }

        Newproduct.save((err, result) => {
            if (err) {
                console.log('PRODUCT CREATE ERROR ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};



//Middeleware Product by id

exports.productById = (req, res, next, id) => {
    Product.findById(id)
    .exec((err, product) => {
            if (err || !product) {
                return res.status(400).json({
                    error: 'Product not found'
                });
            }
            req.product = product;
            next();
        });
};


//Fetch product by id
exports.fectchproduct = (req, res) => {
   req.product.photo = undefined;
    return res.json(req.product);
};

//Delete Product 

exports.removeProduct = (req , res) =>{

    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Product deleted successfully'
        });
    });

}


//Update Product

exports.updateProduct = (req , res) => {

    let Productform = new formidable.IncomingForm();
    Productform.keepExtensions = true;
    Productform.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // product validation
        const { name, description, price, category, quantity, shipping } = fields;

        if (!name || !description || !price || !category || !quantity || !shipping) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let Newproduct = req.product;
        product = _.extend(product, fields);


        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            Newproduct.photo.data = fs.readFileSync(files.photo.path);
            Newproduct.photo.contentType = files.photo.type;
        }

        Newproduct.save((err, result) => {
            if (err) {
                console.log('PRODUCT CREATE ERROR ', err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });


} 

//List product using query
// * sell / arrival
// * by sell = /products?sortBy=sold&order=desc&limit=4
// * by arrival = /products?sortBy=createdAt&order=desc&limit=4
// * if no params are sent, then all products are returned

exports.listproducts = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Product.find()
        .select('-photo')
        .populate('category')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};



//Related product 
exports.listRelated = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 2;
            //showing products except the one in params
    Product.find({ _id: { $ne: req.product }, category: req.product.category })
        .limit(limit)
        .populate('category', '_id name')
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};


//categories by product
exports.listCategories = (req, res) => {
    Product.distinct('category', {}, (err, categories) => {
        if (err) {
            return res.status(400).json({
                error: 'Categories not found'
            });
        }
        res.json(categories);
    });
};




