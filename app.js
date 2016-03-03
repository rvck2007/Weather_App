
var http = require("http");
var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');



app.use("/", express.static(__dirname));


/* Le Parseur de fichiers Json  */
/* ---------------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/* GESTION DES ROUTES : */
/* -------------------  */

var routes = require('./routes/index');

// var router = express.Router();

// ci-dessous, on demande d'utiliser le module 'routes' :
app.use('/', routes);

// Les fichiers statiques utilisés par Express :
app.use(express.static(path.join(__dirname)));



// Configuration du View Engine avec REACT :
// ----------------------------------------
// L'emplacement de stockage des Views dans le projet :
app.set('views', __dirname + '/views');

// Choix du 'View Engine' :
app.set('view engine', 'jsx');

// Création du moteur de vue de l'application :
app.engine('jsx', require('express-react-views').createEngine());



/* Configuration et configuration du erveur :  */
/* ------------------------------------------  */
app.set('port', process.env.PORT || 9080);

var server = app.listen(app.get('port'), function(){
    console.log("application started!");
});

