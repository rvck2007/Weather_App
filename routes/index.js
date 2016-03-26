var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Homepage = React.createFactory(require('../views/app/components/homepage'));
var Essai = React.createFactory(require('../views/app/components/essai'));
var authentMiddleware = require('../utils/authentUtils.js');
var cookieParser = require('cookie-parser');
var request = require('request');
var apiUtils = require('../utils/apiUtils.js');
var renderUtils = require('../utils/renderUtils.js');

//router.use('/essai',authentMiddleware);
router.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {  
  var jsonParams = {city: "marseille", country:"france"};
  console.log(req.cookies);
  renderUtils.renderReactComponent(req,res,
        '../views/app/components/homepage',
        'homepage',jsonParams);
});

router.get('/city/:city', function(req, res, next) {  
  apiUtils.apiCall(req.params.city)
    .then((jsonParams) => {
      renderUtils.renderReactComponent(req,res,
        '../views/app/components/homepage',
        'homepage',jsonParams);
    })
    .catch((errs) => {
      res.json({error:"error with the api"});
    })
});

router.post('/city/:city', function(req, res, next) {  
  apiUtils.apiCall(req.params.city)
    .then((jsonParams) => {
      renderUtils.renderReactComponent(req,res,
        '../views/app/components/homepage',
        'homepage',jsonParams);
    })
    .catch((errs) => {
      res.json({error:"error with the api"});
    })
});

router.use('/essai',authentMiddleware);

router.get('/essai', function(req, res, next) {
  var params = {test: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Essai(params));
  res.render('index', {reactOutput: reactHtml, params:params});
});

module.exports = router;