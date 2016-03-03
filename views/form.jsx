/**
 * Created by Herve on 03/03/2016.
 */

var React = require('react');

var DefaultLayout = require('./layout/master');


var FormComponent = React.createClass({
    render: function() {
        return (
            <DefaultLayout name={this.props.name}>
                <div className="container">
                    <div className="page-header jumbotron">
                        <h1>Meteo Weather Forecast</h1>
                        <br />
                            <h5>Interroge moi sur une ville de ton choix...</h5>
                            <h5>et je te donnerai la météo ;-)</h5>
                    </div>

                    <form action="/form" method="POST">
                        <div className="row">
                            <div className="form-group col-md-4">
                                <h4><label>VILLE : </label></h4>
                                <input type="text" name="city" className="form-control"/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-3">
                                <input type="submit" name="submit" value="What's the Meteo ?" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
});

module.exports = FormComponent;