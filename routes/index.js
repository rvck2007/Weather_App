var express = require('express');
var router = express.Router();
var React = require('react/addons');
var ReactApp = React.createFactory(require('../app/components/essai'));

/* GET home page. */
router.get('/', function(req, res, next) { 
  var reactHtml = React.renderToString(ReactApp({}));  
  res.render('index.ejs', {reactOutput: reactHtml});
});

module.exports = router;
