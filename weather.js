var http = require('http');

var printer = require('./printer.js');


function getWeatherData(city){

    var request = http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d4026800de411665606bf982cf7f8d2e" , function(reponse){

        var body = "";

        reponse.on('data', function(chunk){
            body += chunk;
        });

        reponse.on('end', function(){

            if (reponse.statusCode === 200) {

                try {
                    var data_weather = JSON.parse(body);

                    printer.printMessage(city, data_weather.main.temp, data_weather.main.pressure);

                } catch(error) {
                    printer.printError(error);

                }
            } else {
                printer.printError({ message: "impossible de recuperer les informations" });
            }

        });

    });
// test
    request.on('error', printer.printError);
}

module.exports.get = getWeatherData;
