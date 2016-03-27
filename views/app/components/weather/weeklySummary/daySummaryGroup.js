var React = require('react');
var DaySummary = require('./daySummary');

var DaySummaryGroup = React.createClass({
  render : function () {
    var i = 0;
    return (
      <div className="weatherContent">
        {
          this.props.days.map(function(day){
            return (
                <DaySummary
                  weatherCode = {day.weatherCode}
                  currentDate = {day.date}
                  maxTempCelsius = {day.maxtempC}
                  minTempCelsius = {day.mintempC}
                  maxTempFahrenheit = {day.maxtempF}
                  minTempFahrenheit = {day.mintempF}
                  key = {++i} />
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
