var React = require('react');
var DaySummary = require('./daySummary');

var DaySummaryGroup = React.createClass({
  render : function () {
    return (
      <div className="weatherContent">
        {
          this.props.days.map(function(day){
            return (
                <DaySummary
                  weatherCode = {day.hourly[0].weatherCode}
                  currentDate = {day.date}
                  maxTempCelsius = {day.maxtempC}
                  minTempCelsius = {day.mintempC}
                  maxTempFahrenheit = {day.maxtempF}
                  minTempFahrenheit = {day.mintempF} />
              )
          })
        }
      </div>
      )
  }
});

module.exports = DaySummaryGroup;

/*
{
  this.props.days.map(function(day){
    return (
        <DaySummary
          day = {day} />
      )
  })
}
*/