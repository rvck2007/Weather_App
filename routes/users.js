var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) { 
  User.find({}, function (err, users) {
        if (!err) {
            res.send(users);
        } else {
            console.error(err);
            res.end();
        }
    }).select('-__v');
});

router.post('/add', function(req, res, next){
  var newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    newUser.save(function (err) {
        if (err) {
            console.error(err);
        }
        console.log("new user added");
        res.end();
    });
});

module.exports = router;
