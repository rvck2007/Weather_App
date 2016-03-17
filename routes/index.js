var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var Homepage = React.createFactory(require('../views/app/components/homepage'));
var Essai = React.createFactory(require('../views/app/components/essai'));
var authentMiddleware = require('../utils/authentUtils.js');
var cookieParser = require('cookie-parser');
var CookieDough = require('cookie-dough');

router.use('/essai',authentMiddleware);
router.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {  
  var params = {city: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage.ejs', {reactOutput: reactHtml, params:params});
});

router.post('/city', function(req, res, next) {  
  console.log(req.body.city);
  console.log(req.cookies);
  var params = {city: req.body.city};
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage.ejs', {reactOutput: reactHtml, params:params});
});

//router.use('/essai',authentMiddleware);

router.get('/essai', function(req, res, next) {
  var params = {test: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Essai(params));
  res.render('index.ejs', {reactOutput: reactHtml, params:params});
});




module.exports = router;
