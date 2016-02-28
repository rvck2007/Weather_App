var express = require('express');
var router = express.Router();
var React = require('react');
var ReactApp = React.createFactory(require('../views/app/components/reactApp'));

/* GET users listing. */
router.get('/', function(req, res, next) { 
  var reactHtml = React.renderToString(ReactApp({}));
  res.render('index.ejs', {reactOutput: reactHtml});
});

module.exports = router;
