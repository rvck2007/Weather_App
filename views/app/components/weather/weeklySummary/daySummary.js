var React = require('react');

/*function dayOfWeekAsString(dayIndex) {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][dayIndex];
}*/

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

/*
render : function () {
    var currentDay = this.props.day;
    var imgSrc = "http://cdn.worldweatheronline.net/images/weather/small/"
        + currentDay.hourly[0].weatherCode + "_day_sm.png";
    return (
      <div>
        <div>{this.dayOfWeekAsString(new Date(currentDay.date).getDay())}</div>
        <div><img src={imgSrc} alt="weather image" /></div>
        <div>{currentDay.maxtempC + "°C | " + currentDay.mintempC + "°C"}</div>
        <div>{currentDay.maxtempF + "°F | " + currentDay.mintempF + "°F"}</div>
      </div>
      )
  }
*/