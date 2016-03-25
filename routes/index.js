var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Homepage = React.createFactory(require('../views/app/components/homepage'));
var Essai = React.createFactory(require('../views/app/components/essai'));
var authentMiddleware = require('../utils/authentUtils.js');
var cookieParser = require('cookie-parser');
var request = require('request');
var api = require('../utils/apiUtils.js');

//router.use('/essai',authentMiddleware);
router.use(cookieParser());

/* GET home page. */
router.get('/', function(req, res, next) {  
  var params = {city: "marseille", country:"france"};
  console.log(req.cookies);
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage', {reactOutput: reactHtml, params:params});
});

router.post('/city', function(req, res, next) {  
  console.log(req.body.city);
  console.log(req.cookies);
  var city = req.body.city;
  var apiKey = '63e2008bb395370c0510bbac7155b';
  var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=5'
        + '&key=' + apiKey + '&tp=24&format=json';

    request(requestUrl, function (error, response, body){
      if (error) res.json({error:"error with the api"});
      var params = JSON.parse(body);
      var reactHtml = ReactDOMServer.renderToString(Homepage(params));
      res.render('homepage', {reactOutput: reactHtml, params:params});      
      });
});

router.get('/city/:city', function(req, res, next) {  
  
  var params = {city: req.params.city};
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage', {reactOutput: reactHtml, params:params});
});

router.get('/essai/:city', function(req, res, next) {  
  
  var params = {city: req.params.city};
  var reactHtml = ReactDOMServer.renderToString(Homepage(params));
  res.render('homepage', {reactOutput: reactHtml, params:params});
});


router.get('/:city', function(req, res, next) {
  console.log(req.cookies);
  console.log(req.params.city);
  var city = req.params.city;
  var apiKey = '63e2008bb395370c0510bbac7155b';
  var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=7'
        + '&key=' + apiKey + '&tp=24&format=json';

    request(requestUrl, function (error, response, body){
      if (error) res.json({error:"error with the api"});
      var params = JSON.parse(body);
      var reactHtml = ReactDOMServer.renderToString(Homepage(params));
      res.render('homepage', {reactOutput: reactHtml, params:params});      
      });
});

router.post('/:city', function(req, res, next) {  
  console.log(req.params.city);
  console.log(req.cookies);
  var city = req.params.city;
  var apiKey = '63e2008bb395370c0510bbac7155b';
  var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=7'
        + '&key=' + apiKey + '&tp=24&format=json';

    request(requestUrl, function (error, response, body){
      if (error) res.json({error:"error with the api"});
      var params = JSON.parse(body);
      var reactHtml = ReactDOMServer.renderToString(Homepage(params));
      res.render('homepage', {reactOutput: reactHtml, params:params});      
      });
});

router.use('/essai',authentMiddleware);

router.get('/essai', function(req, res, next) {
  var params = {test: "Salut !"};
  var reactHtml = ReactDOMServer.renderToString(Essai(params));
  res.render('index', {reactOutput: reactHtml, params:params});
});




module.exports = router;
