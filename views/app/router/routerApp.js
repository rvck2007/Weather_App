var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var ReactApp = require('../components/reactApp');
var Essai = require('../components/essai');

var RouterApp = React.createClass({

      componentDidMount: function () {
        console.log("component mounted");

      },
      render: function () {
        return (
          <Router history={browserHistory}>
                <Route path="/" component={ReactApp} />
                <Route path="/users" component={Essai} />
            </Router>
            )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = RouterApp;