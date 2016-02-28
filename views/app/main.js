/** @jsx React.DOM */

var React = require('react');
var ReactDom = require('react-dom');
var RouterApp = require('./router/routerApp');

var mountNode = document.getElementById('react-main-mount');

ReactDom.render(<RouterApp />, mountNode);