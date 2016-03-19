var Reflux = require('reflux');
var $ = require('jquery');
var CityActions = require('../actions/cityActions');

var results = [];

var CityStore = Reflux.createStore({
    listenables: CityActions,
    getInitialState : function () {
            return{
                results : results
            }
    },
    onSearch : function (city) {
        var route = 'http://localhost:3000/'+city;
        var route1 = "https://api.worldweatheronline.com/free/v2/weather.ashx?q="+city+"&num_of_days=5&key=63e2008bb395370c0510bbac7155b&tp=24&format=json";
        $.ajax({
          url: route1,
          type: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          data: {},
          dataType: "json",
          context:this,
          success: function(data) {
            if (data) {
              console.log(data);
              results = results.concat(data);
              this.trigger(results);
              //location.href = "http://localhost:3000/city/"+city;
              location.href = "http://localhost:3000";
            }else{
              console.log("Search Result KO");
            }
          }
        });
    }
});

module.exports = CityStore;