const express = require('express');


//Router
const router = express.Router();

//from controller user
const { userByID } = require('../controllers/user')

//imports from controller Product
const { create } = require('../controllers/product')

//from controller auth
const {requireSignin , isAuth , isAdmin} = require('../controllers/auth')

//functionlities
router.post('/product/create/:userId',requireSignin,isAuth,isAdmin, create )

router.param('userId', userByID);

module.exports = router; 
