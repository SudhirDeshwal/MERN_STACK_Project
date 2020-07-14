const express = require('express');


//Router
const router = express.Router();

//from controller user
const { userByID } = require('../controllers/user')

//imports from controller category
const { create } = require('../controllers/category')

//from controller auth
const {requireSignin , isAuth , isAdmin} = require('../controllers/auth')

//functionlities
router.post('/category/create/:userId',requireSignin,isAuth,isAdmin, create )

router.param('userId', userByID);

module.exports = router;
