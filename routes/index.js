/**
 * Created by Herve on 03/03/2016.
 */

var express = require('express');
var request = require('request');

var app = express();


var bodyParser = require('body-parser');
/* Le Parseur de fichiers Json  */
/* ---------------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var router = express.Router();

var apiKey = '63e2008bb395370c0510bbac7155b';


function dayOfWeekAsString(dayIndex) {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][dayIndex];
}



var createCurrentWeatherHTML = function(currConditions, locationString) {
    var html = '<div class="col first">';
    html += "<h3>" + locationString + "</h3>";  // 'locationString' is the "city, Country". Ex: "Paris, France"

    // get the current weather description :
    html += "<p>Current: <strong>" + currConditions[0].weatherDesc[0].value + "</strong></p>";

    // wind details :
    html += "<p>Wind:" + currConditions[0].winddir16Point + " at " + currConditions[0].windspeedMiles
        + " mph - " + currConditions[0].windspeedKmph + " km/h</p>";

    html += "<p>Humidity: " + currConditions[0].humidity + "</p>";

    html += "</div>";

    return html;
};

var createDaySummaryHTML = function(daysWeather) {
    var imgSrc = "http://cdn.worldweatheronline.net/images/weather/small/"
        + daysWeather.hourly[0].weatherCode + '_day_sm.png';
    var html = '<div class="col">';
    html += '<div class="day">' + dayOfWeekAsString(new Date(daysWeather.date).getDay()) + '</div>';
    html += '<div class="icon"><img src="' + imgSrc + '" alt="" /></div>';
    html += '<div class="celsius">' + daysWeather.maxtempC + '°C | ' + daysWeather.mintempC + '°C</div>';
    html += '<div class="farenheit">' + daysWeather.maxtempF + '°F | ' + daysWeather.mintempF + '°F</div>';
    html += '</div>';

    return html;
};



router.get('/', function(req, res){
   res.render('form', {name: "Weather App Engine"});

});




router.get('/form', function(req, res){
    res.render('postform', {name: "Weather App Engine"});

});




router.post('/form',function(req, res){

    var city =req.body.city; // reçoit la ville du formulaire

    var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=5'
        + '&key=' + apiKey + '&tp=24&format=json';


    request(requestUrl, function (error, response, body){

        var result = JSON.parse(body);
        var currentWeather = result.data.current_condition;
        var weeklyWeather = result.data.weather;

        var meteo = createCurrentWeatherHTML(currentWeather, result.data.request[0].query);

        weeklyWeather.forEach(function(day) {
            meteo += createDaySummaryHTML(day);
        });

        res.render('postform', {meteoval: meteo});

    });


});

module.exports = router;