var Reflux = require('reflux');
var $ = require('jquery');
var UserActions = require('../actions/userActions');

var AuthenticationStore = Reflux.createStore({
    listenables: UserActions,
    onAddUser : function (username,password) {
        $.ajax({
          url: 'http://localhost:3000/user/add',
          type: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          data: {username:username,password:password},
          dataType: "json",
          context:this,
          success: function(data) {
              console.log(data);
              document.cookie = "s=" + data['token']+ "; path=/"; //the 'path=/' make the cookie global
              //document.cookie = "sok=" + data['authentication']+"; path=/";
              location.href = "http://localhost:3000";
          }
        });
    }
});

module.exports = AuthenticationStore;