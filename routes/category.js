const express = require('express');


//Router
const router = express.Router();

//from controller user
const { userByID } = require('../controllers/user')

//imports from controller category
const { create , categoryById ,fectchCategory } = require('../controllers/category')

//from controller auth
const {requireSignin , isAuth , isAdmin} = require('../controllers/auth')

//-------CRUD operations functionlities----------//
router.get('/category/:categoryId', fectchCategory);
router.post('/category/create/:userId',requireSignin,isAuth,isAdmin, create )

//using id through param
router.param('userId', userByID); 
router.param('categoryId', categoryById);

module.exports = router;
