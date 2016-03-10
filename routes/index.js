var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var ReactApp = React.createFactory(require('../views/app/components/reactApp'));
var Homepage = React.createFactory(require('../views/app/components/homepage'));
var Essai = React.createFactory(require('../views/app/components/essai'));
var authentMiddleware = require('../utils/authentUtils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = {test: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage.ejs', {reactOutput: reactHtml, params:params});
});


router.get('/essai', function(req, res, next) {
  var params = {test: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Essai(params));
  res.render('index.ejs', {reactOutput: reactHtml, params:params});
});

router.use(authentMiddleware);


module.exports = router;
