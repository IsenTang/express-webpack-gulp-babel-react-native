'use strict'
let express = require('express');
let router = express.Router();
let db = require('./common/db.js');
let mongoose = require('mongoose');
/* GET home page. */

router.get('/', function(req, res, next) {
  let userSchema = new mongoose.Schema({
    name:String
  });
  let userModel = db.model('user',userSchema);
  let userEntity = new userModel({name:'Tom'});
  userModel.find(function(err,users){
    console.log(users);
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
