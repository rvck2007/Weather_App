/**
 * Created by Herve on 03/03/2016.
 */

var React = require('react');

var MasterLayout = React.createClass({

    render: function() {
        return (
            <html lang="fr">
            <head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <title>{this.props.name}</title>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                <link href='http://myapprvck01.azurewebsites.net/public/main.css' rel='stylesheet' type='text/css'/>
            </head>
            <body>
                {this.props.children}
            </body>
            </html>
        )
    }
});

module.exports = MasterLayout;