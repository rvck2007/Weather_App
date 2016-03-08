var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.js');


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

router.post('/authenticate', function(req,res){
    console.log(req.body.username);
    User.findOne({username:req.body.username}, function (err, user){
        if (err) console.error(err);
        if(user){
            if (user.password==req.body.password){
                var token = jwt.sign(user, config.secret, {
                  expiresInMinutes: 10000
                });
                res.json({authentication: true, user: user.username, token: token})
            }else{
                res.send('authentication failed: wrong password or username');
            }
        }else{
            res.send('authentication failed: no user found');
        }
    })

});


module.exports = router;
