'use strict'

var Weather = function(model) {
  this.model = model
}

Weather.prototype.currently = function() { return this.model.currently}
Weather.prototype.weekly = function() { return this.model.weekly}
Weather.prototype.place = function() { return this.model.place}

Weather.prototype.toJson = function() {
  return {
    "currently" : this.currently(),
    "weekly" : this.weekly(),
    "place": this.place()
  }
}

module.exports = Weather
