var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Tab = require('react-bootstrap').Tab;
var Tabs = require('react-bootstrap').Tabs;
var ModalSignUp = require('./modalSignUp.js');
var ModalLogin = require('./modalLogin.js');
var cookie = require('cookie-dough')();

var CurrentWeather = require('./weather/current/currentWeather.js');
var DaySummaryGroup = require('./weather/weeklySummary/daysummaryGroup.js');

var CityActions = require('../actions/cityActions.js');
var CityStore = require('../stores/cityStore.js');

var DataMock = require('./weather/dataMock.js');



/*function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
*/

var Homepage = React.createClass({
  mixins: [Reflux.connect(CityStore, "store")],
  getInitialState: function () {   
    //console.log(this.props);
    console.log(DataMock);
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

  /* for AJAX call client side DEPRECATED */
  /*launchSearch: function(event){
        event.preventDefault();
        CityActions.search(this.state.cityValue);
        //this.refs.modalSignUp.open()
  },*/

  render: function () {

    var innerButton = <input type="submit" name="submit" value="What's the Meteo ?" className="btn btn-primary" />;    
    /*this.props.current_condition[0]*/
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
              <form method="POST" action={"/"+this.state.cityValue} className="homepageInput col-sm-offset-4 col-sm-4">
                <Input
                    type="text"
                    name="city"
                    placeholder="type a city here"
                    buttonAfter={innerButton}
                    bsSize="small"
                    value={this.state.cityValue} 
                    onChange={this._onChangeCityValue} />
                </form>
              </div>
        </div>
        <h3 className="cityTitle">{DataMock.data.request[0].query}</h3>
        <div className="container homepageTabs">
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
              <Tab eventKey={1} title="Current Weather"><CurrentWeather currentCondition={DataMock.data.current_condition[0]} /></Tab>
              <Tab eventKey={2} title="Daily Evolution">Will tell the Daily Evolution</Tab>
              <Tab eventKey={3} title="Weekly Evolution"><DaySummaryGroup days={DataMock.data.weather} /></Tab>
              <Tab eventKey={4} title="Map">Will tell the Map</Tab>
              <Tab eventKey={5} title="Pictures slider">Will tell the Pictures slider</Tab>
          </Tabs>
        </div>
      </div>
    )
  }
});


module.exports = Homepage;

/* for AJAX called client side DEPRECATED */
/*<form onSubmit={this.launchSearch} className="homepageInput col-sm-offset-4 col-sm-4">
                */
/*
<Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
    <Tab eventKey={1} title="Current Weather">Will tell the Current Weather</Tab>
    <Tab eventKey={2} title="Daily Evolution">Will tell the Daily Evolution</Tab>
    <Tab eventKey={3} title="Weekly Evolution">Will tell the Weekly Evolution</Tab>
    <Tab eventKey={4} title="Map">Will tell the Map</Tab>
    <Tab eventKey={5} title="Pictures slider">Will tell the Pictures slider</Tab>
</Tabs>
*/