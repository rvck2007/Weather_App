

var React = require('react');
var ReactDom = require('react-dom');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Tab = require('react-bootstrap').Tab;
var Tabs = require('react-bootstrap').Tabs;
var ModalSignUp = require('./modalSignUp.js');
var ModalLogin = require('./modalLogin.js');

var Homepage = React.createClass({

  getInitialState: function () {   
    console.log(this.props.test);
    return {
        cityValue: '',
        key: 1
    }
  },

  componentDidMount: function () {
    console.log("homepage component mounted");
  },

  handleSelect: function(key) {    
    this.setState({key});
    console.log(key);
    //this.setState({key: e.target.value})
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

    var innerButton = <Button onClick={this.test}><b>search</b></Button>;
    

    return (
      <div>
          <div className="row homepage">
            <div className="commonOverlay"></div>
            <div className="row homePageLoginSignup">
               <div className="col-sm-offset-10 col-sm-1 homeTopTitle" onClick={this.openModalLogin}>login</div>
                  <ModalLogin ref="modalLogin" />
               <div className="col-sm-1 homeTopTitle" onClick={this.openModalSignUp}>signup</div>
                  <ModalSignUp ref="modalSignUp" />
            </div>
            <div className="homepageOverlay">
              <h1 className="homepageTitle"> METEO WEATHER FORECAST </h1>
              <h4 className="homepageSubTitle">please enter a city in the field below</h4>
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
              <Tab eventKey={1} title="Current Weather">Will tell the Current Weather</Tab>
              <Tab eventKey={2} title="Daily Evolution">Will tell the Daily Evolution</Tab>
              <Tab eventKey={3} title="Weekly Evolution">Will tell the Weekly Evolution</Tab>
              <Tab eventKey={4} title="Map">Will tell the Map</Tab>
              <Tab eventKey={5} title="Pictures slider">Will tell the Pictures slider</Tab>
          </Tabs>
        </div>
      </div>
    )
  }
});

//<script>ReactDom.render(new Homepage({}), document.getElementById('app'));
module.exports = Homepage;