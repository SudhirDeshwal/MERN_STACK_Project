const express = require('express');


//Router
const router = express.Router();

//from controller user
const { userByID } = require('../controllers/user')

//imports from controller Product
const { create , productById , fectchproduct , removeProduct , updateProduct , listproducts,
    listRelated, listCategories , photo} = require('../controllers/product')

//from controller auth
const {requireSignin , isAuth , isAdmin} = require('../controllers/auth')

//-------CRUD operations functionlities----------//
router.get("/product/:productId", fectchproduct);
router.post('/product/create/:userId', requireSignin,isAuth,isAdmin, create )
router.delete("/product/:productId/:userId",requireSignin,isAuth,isAdmin,removeProduct);
router.put("/product/:productId/:userId",requireSignin,isAuth,isAdmin,updateProduct);
//Advnaced fetch operations quieries on products
router.get("/products", listproducts);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.get("/product/photo/:productId", photo);

//using id in param
router.param('userId', userByID);
router.param("productId", productById); 

module.exports = router; 
