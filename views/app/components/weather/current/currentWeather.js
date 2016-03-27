var React = require('react');

var CurrentWeather = React.createClass({
  render: function () {
    return (
      <div className="weatherContent">
        <p>Current: <strong>{this.props.currentCondition.current}</strong></p>
        <p>{
          "Wind:" + this.props.currentCondition.winddir16Point +
          " at " + this.props.currentCondition.windspeedMiles +
          " mph - " + this.props.currentCondition.windspeedKmph +
          " km/h"
        }</p>
        <p>{"Humidity: " + this.props.currentCondition.humidity}</p>
      </div>
      )
  }
});

module.exports = CurrentWeather;
