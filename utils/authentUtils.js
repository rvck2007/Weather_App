var jwt = require('jsonwebtoken');
var config = require('./config/config.js');

var authentMiddleware = function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = '';

  if (req.headers['cookie']){
    var cookies = req.headers['cookie'];
    var cookiesArray = cookies.split(';');
    var tokenReq = cookiesArray[0];
    var tokenReqArray = tokenReq.split('=');
    token = tokenReqArray[1];
  }

  //var token = tokenReqArray[1];// || req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['cookie']['s'];
  
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.send('Failed to authenticate token.');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send('No token provided...');
  }
};

module.exports = authentMiddleware;