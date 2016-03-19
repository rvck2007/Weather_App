var React = require('react');

var CurrentWeather = React.createClass({
  render: function () {
    var currentCondition = this.props.currentCondition;
    return (
      <div className="weatherContent">
        <p>Current: <strong>{currentCondition.weatherDesc[0].value}</strong></p>
        <p>{
          "Wind:" + currentCondition.winddir16Point + 
          " at " + currentCondition.windspeedMiles + 
          " mph - " + currentCondition.windspeedKmph + 
          " km/h"
        }</p>
        <p>{"Humidity: " + currentCondition.humidity}</p>
      </div>
      )
  }
});

module.exports = CurrentWeather;