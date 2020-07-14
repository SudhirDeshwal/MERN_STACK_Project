const express = require('express');

//Router
const router = express.Router();


//from controller user
const { userByID } = require('../controllers/user')

//from controller auth
const {requireSignin , isAuth , isAdmin} = require('../controllers/auth')


//functionalities

router.get('/onlyLogged/:userId', requireSignin, isAuth ,(req, res) => {
    res.json({
        user: req.profile
    });
});


router.get('/user/:userId', requireSignin, isAuth);

router.param('userId', userByID);

module.exports = router;