const User = require('../models/user.model.js')

userAuth = (req,res, next) => {
    User.findById(req.session.userId)
        .then((user) => { 
            res.status(200).json({ msg: "Login Successful", userType: req.session.userType, userId: req.session.userId });
        })
    .catch((err) => {
        console.error(err);
    });
    next();
}

module.exports = {userAuth:userAuth};