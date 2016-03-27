var configApi = require('./config/configApi.js');
var request = require('request');
var Weather = require('../models/Weather');
var R = require('ramda');

var WeatherApi = {

  apiCall : function (city) {
    return new Promise((resolve, error) => {
      var requestUrl = 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=' + city + '&num_of_days=7'
        + '&key=' + configApi.apiKey + '&tp=24&format=json';
      request(requestUrl, (error, response, body) => {
        if (error) reject (error);
        else resolve(new Weather(this.toModel(JSON.parse(body))));
        });
    })
  },

  toModel: function (jsonData) {
    var jsResult = R.mapObjIndexed(function(val, key, obj) {

    switch(key) {
      case 'request':
      var value = val[0]
        return {
          "place": {
            "city": value.query
          }
        }
      case 'weather':
        return {
          "weekly" :
              val.map(function(value) {
                return {
                    "weatherCode": value.hourly[0].weatherCode,
                    "date": value.date,
                    "maxtempF": value.maxtempF,
                    "mintempF": value.mintempF,
                    "maxtempC": value.maxtempC,
                    "mintempC": value.mintempC,
                    "humidity": value.hourly[0].humidity,
                    "visibility": value.hourly[0].visibility,
                    "pressure": value.hourly[0].pressure,
                    "cloudcover": value.hourly[0].cloudcover
                }
              })
        }
      case 'current_condition':
      var value = val[0]
        return {
          "currently" : {
            "current": value.weatherDesc[0].value,
            "winddir16Point": value.winddir16Point,
            "windspeedMiles": value.windspeedMiles,
            "windspeedKmph": value.windspeedKmph,
            "humidity": value.humidity
          }
        }

      default: return null
    }
   }, jsonData.data)

    return R.values(jsResult).filter(e => e !== null).reduce(function(acc, obj) {
      return R.merge(acc, obj)
    }, {})
  }
}

module.exports = WeatherApi;
