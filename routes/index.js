'use strict';

var express = require('express');
var router = express.Router();
var db = require('./common/db.js');
var mongoose = require('mongoose');
/* GET home page. */

router.get('/', function (req, res, next) {
  var userSchema = new mongoose.Schema({
    name: String
  });
  var userModel = db.model('user', userSchema);
  // var userEntity = new userModel({ name: 'Tom' });
  let query = userModel.findOne({'name':'isen'});
  query.select('some select');
  query.exec(function(err,result){
    console.log(result);
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;