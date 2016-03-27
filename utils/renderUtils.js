var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = {
  renderReactComponent : function(req,res,strComponent, strTargetJadeFile, jsonParams){
    var Component = React.createFactory(require(strComponent));
    var reactHtml = ReactDOMServer.renderToString(Component(jsonParams));
    res.render(strTargetJadeFile, {reactOutput: reactHtml, params:jsonParams});
  }
}
