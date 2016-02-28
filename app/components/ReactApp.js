/** @jsx React.DOM */

var React = require('react/addons');

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log("component mounted");

      },
      render: function () {
        return (
          <div>
            <h1> React implem works fine</h1>
            <h2 className="tryCSS">if this is blue, CSS works fine</h2>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;