'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var db = require('../common/db.js');
var mongoose = require('mongoose');
//在实例化 mongoose的schema的时候，要实例化在全局上。
var userSchema = new mongoose.Schema({
  name: String,
  password: String
});

/* GET home page. */

router.get('/login', function (req, res, next) {

  var username = req.session.username;
  var password = req.session.password;
  if (username) {
    console.log(username);
  } else {
    req.session.username = 'isen';
  }
  if (password) {
    console.log(password);
  } else {
    req.session.password = '12345';
  }

  var userModel = db.model('user', userSchema);
  var userEntity = new userModel({ name: 'Tom' });
  userModel.find(function (err, users) {
    console.log(users);
  });
  res.render('login/index', { title: '登陆' });
});

module.exports = router;