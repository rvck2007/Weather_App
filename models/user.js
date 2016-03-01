'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});
const UserCollection = 'users';

var userModel = mongoose.model('user', UserSchema, UserCollection);

module.exports = userModel;