const express = require('express');

//Router
const router = express.Router();


//from controller user
const { userByID } = require('../controllers/user')

//from controller auth
const {requireSignin} = require('../controllers/auth')


//functionalities

router.get('/onlyLogged/:userId', requireSignin, (req, res) => {
    res.json({
        user: req.profile
    });
});


router.get('/user/:userId', requireSignin);

router.param('userId', userByID);

module.exports = router;