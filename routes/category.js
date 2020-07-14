const express = require('express');


//Router
const router = express.Router();


//imports from controller
const { create } = require('../controllers/category')


//functionlities
router.post('/category/create', create )



module.exports = router;
