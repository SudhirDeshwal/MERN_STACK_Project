const express = require('express');
const { check, validationResult } = require('express-validator');
let userlist = require('../models/Users');


const router = express.Router();


//from controller
const {signup , signin , singout} = require('../controllers/user')


//functionlities
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/signout', singout)





module.exports = router;
