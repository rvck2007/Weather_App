/** @jsx React.DOM */

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Tab = require('react-bootstrap').Tab;
var Tabs = require('react-bootstrap').Tabs;
var ModalSignUp = require('./modalSignUp.js');
var ModalLogin = require('./modalLogin.js');

var Homepage = React.createClass({

  getInitialState: function () {    
    return {
        cityValue: '',
        key: 3
    }
  },

  componentDidMount: function () {
    console.log("homepage component mounted");
  },

  handleSelect: function(e) {    
    //this.setState({key});
    console.log(e);
    this.setState({key: e.target.value})
  },

  _onChangeCityValue:function(e){
    this.setState({cityValue: e.target.value})
  },

  openModalLogin: function (){
    this.refs.modalLogin.open()
  },

  openModalSignUp: function (){
    this.refs.modalSignUp.open()
  },

  test: function(){
    alert('it works');
  },

  render: function () {

    const innerButton = <Button>search</Button>;
    

    return (
      <div>
          <div className="row homepage">
            <div className="commonOverlay homeOverlayImage"></div>
            <div className="row homePageLoginSignup">
              <div className="col-sm-offset-10 col-sm-1 homeTopTitle">
                <a className="" onClick={this.test}><b>login</b></a>
                  <ModalLogin ref="modalLogin" />
              </div>
              <div className="col-sm-1 homeTopTitle">
                  <a className="" onClick={this.openModalSignUp}><b>signup</b></a>
                  <ModalSignUp ref="modalSignUp" />
              </div>
            </div>
            <div className="homepageOverlay">
              <h1 className="homepageTitle"> METEO WEATHER FORECAST </h1>
              <h3 className="homepageSubTitle">please enter a city in the field below</h3>
              <div className="homepageInput col-sm-offset-4 col-sm-4">
                <Input
                    type="text" 
                    placeholder="type a city here" 
                    buttonAfter={innerButton} 
                    bsSize="small"
                    value={this.state.cityValue} 
                    onChange={this._onChangeCityValue} />
                </div>
              </div>
        </div>
        <div className="container homepageTabs">
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
              <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
              <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
              <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
          </Tabs>
        </div>
      </div>
    )
  }
});

module.exports = Homepage;