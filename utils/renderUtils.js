var React = require('react');
var ReactDOMServer = require('reat-dom/server');

module.exports = {
  renderReactComponent : function(req,res,strComponent, strTargetJadeFile, jsonParams){
    var Component = React.createFactory(require(strComponent));
    var reactHtml = ReactDOMServer.renderToString(Component(params));
    res.render(strTargetJadeFile, {reactOutput: reactHtml, params:jsonParams});
  }
}