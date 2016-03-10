var React = require('react');

var Essai = React.createClass({

  propTypes: {
    test: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    console.log("component mounted");
    console.log(this.props.test);
  },
  
  test: function(){
    alert('it works');
  },
  render: function () {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <h2 onClick={this.test} className="tryCSS">if this page is shown, router works fine...</h2>
        <a onClick={this.test}>essai</a>
      </div>
      )
    }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Essai;
