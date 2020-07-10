let User = require('../models/Users');
const Users = require('../models/Users');


exports.signup = (req ,res) => {
   
    console.log('user body',req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        user.randomStr = undefined;
        user.encryp_password = undefined;
        res.json({
            user
        });
    });

};