var React = require('react');

var DaySummary = React.createClass({
  dayOfWeekAsString : function (dayIndex){
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][dayIndex];
  },
  render : function () {
    var imgSrc = "http://cdn.worldweatheronline.net/images/weather/small/"
        + this.props.weatherCode + "_day_sm.png";
    return (
      <div className="weeklyEvolution">
        <div>{this.dayOfWeekAsString(new Date(this.props.currentDate).getDay())}</div>
        <div><img src={imgSrc} alt="weather image" /></div>
        <div>{this.props.maxTempCelsius + "°C | " + this.props.minTempCelsius + "°C"}</div>
        <div>{this.props.maxTempFahrenheit + "°F | " + this.props.minTempFahrenheit + "°F"}</div>
      </div>
      )
  }
});

module.exports = DaySummary;
