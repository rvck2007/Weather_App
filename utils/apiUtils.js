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

  findWeeklyMaxTempCelsius : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.maxtempC;
    });
  },

  findWeeklyMinTempCelsius : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.mintempC;
    });
  },

  findWeeklyHumidity : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.hourly[0].humidity;
    });
  },

  findWeeklyVisibility : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.hourly[0].visibility;
    });
  },

  findWeeklyPressure : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.hourly[0].pressure;
    });
  },

  findWeeklyCloudcover : function (jsonData) {
    return jsonData.data.weather.map(function(weatherDay){
      return weatherDay.hourly[0].cloudcover;
    });
  },

  findCurrentWeather : function (jsonData){
    return jsonData.data.current_condition.map(function(currentWeather){
      return ({
        "current": currentWeather.weatherDesc[0].value,
        "winddir16Point": currentWeather.winddir16Point,
        "windspeedMiles": currentWeather.windspeedMiles,
        "windspeedKmph": currentWeather.windspeedKmph,
        "humidity": currentWeather.humidity
      })
    })
  },

  findWeeklyWeather : function (jsonData) {
    return jsonData.data.weather.map(function (weatherDay){
      return ({
        "weatherCode": weatherDay.hourly[0].weatherCode,
        "currentDate": weatherDay.date,
        "maxTempCelsius": weatherDay.maxtempC,
        "minTempCelsius": weatherDay.mintempC,
        "maxTempFahrenheit": weatherDay.maxtempF,
        "minTempFahrenheit": weatherDay.mintempF
      })
    });
  },

  findWeeklyEvolution : function (jsonData) {
    return ({
      "maxtempC": this.findWeeklyMaxTempCelsius(jsonData),
      "mintempC": this.findWeeklyMinTempCelsius(jsonData)
    })
  },

  findWeeklyParams : function (jsonData) {
    return ({
      "humidity": this.findWeeklyHumidity(jsonData),
      "visibility": this.findWeeklyVisibility(jsonData),
      "pressure": this.findWeeklyPressure(jsonData),
      "cloudcover": this.findWeeklyCloudcover(jsonData)
    })
  },

  constructJsonForReact: function (jsonData) {
    return ({
      "currentWeather": this.findCurrentWeather(jsonData),
      "weeklyWeather": this.findWeeklyWeather(jsonData),
      "weeklyEvolution": this.findWeeklyEvolution(jsonData),
      "weeklyParams": this.findWeeklyParams(jsonData)
    })
  }

}

module.exports = WeatherApi;