var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.js');
var authentMiddleware = require('../utils/authentUtils.js');


// route middleware to verify a token
//WARNING: all the routes placed above this line won't be protected
router.use(authentMiddleware);

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

module.exports = router;