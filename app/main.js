/** @jsx React.DOM */

var React = require('react');
//var React = require('react/addons');
var ReactDom = require('react-dom');
//var ReactApp = require('./components/ReactApp');
var RouterApp = require('./components/router/routerApp');

var mountNode = document.getElementById('react-main-mount');

//ReactDom.render(new ReactApp({}), mountNode);
ReactDom.render(<RouterApp />, mountNode);