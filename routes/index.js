var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactApp = React.createFactory(require('../views/app/components/reactApp'));
var Homepage = React.createFactory(require('../views/app/components/homepage'));
var Essai = React.createFactory(require('../views/app/components/essai'));
var authentMiddleware = require('../utils/authentUtils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var reactHtml = ReactDOMServer.renderToString(Homepage({}));
  res.render('index.ejs', {reactOutput: reactHtml});
});

router.use(authentMiddleware);

router.get('/essai', function(req, res, next) {
  var reactHtml = ReactDOMServer.renderToString(Essai({test: "Salut !"}));
  res.render('index.ejs', {reactOutput: reactHtml});
});

module.exports = router;
