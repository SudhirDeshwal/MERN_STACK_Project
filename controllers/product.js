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

exports.productBytID = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
            if (err || !product) {
                return res.status(400).json({
                    error: 'Product not found'
                });
            }
            req.product = product;
            next();
        });
};