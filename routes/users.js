const express = require('express');
const { check, validationResult } = require('express-validator');
let userlist = require('../models/Users');

//Router
const router = express.Router();


//Validator
const { userSignupValidator } = require("../validator");

//from controller
const {signup , signin , signout} = require('../controllers/user')


//functionlities
router.post('/signup',userSignupValidator , signup )
router.post('/signin', signin)
router.get('/signout', signout)


module.exports = router;
