var configApi = require('./config/configApi.js');
var request = require('request');


var WeatherApi = {

  apiCall : function (city) {
    return new Promise((resolve, error) => {
      var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=7'
        + '&key=' + configApi.apiKey + '&tp=24&format=json';
      request(requestUrl, (error, response, body) => {
        if (error) reject (error);
        else resolve(JSON.parse(body));
        });
    })
  },

  findWeeklyWeather : function (jsonData) {
    return jsonData.data.weather;
  },

  findWeeklyParams : function (jsonData) {
    return (
      jsonData.data.weather.map(function(weatherDay){
        return {
          "humidity": weatherDay.hourly[0].humidity,
          "visibility": weatherDay.hourly[0].visibility,
          "pressure": weatherDay.hourly[0].pressure,
          "cloudcover": weatherDay.hourly[0].cloudcover
        }
      })
    )
  }

}

module.exports = WeatherApi;