const express = require('express');
const { check, validationResult } = require('express-validator');
let userlist = require('../models/Users');


const router = express.Router();

const {signup} = require('../controllers/user')

router.post('/signup', signup)


router.get('/all', async (req, res) => {
  try {
    const userDb = await userlist.find();
    console.log("it is here"+userDb);
     res.send(userDb);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});



module.exports = router;
