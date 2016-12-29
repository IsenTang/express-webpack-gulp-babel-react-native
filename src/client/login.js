'use strict'
let express = require('express');
let router = express.Router();
let app = express();
let db = require('../common/db.js');
let mongoose = require('mongoose');
//在实例化 mongoose的schema的时候，要实例化在全局上。
let userSchema = new mongoose.Schema({
  name:String,
  password:String
});

/* GET home page. */

router.get('/login', function(req, res, next) {

  let username = req.session.username;
  let password = req.session.password;
  if(username){
    console.log(username);
  }else{
    req.session.username = 'isen';
  }
  if(password){
    console.log(password);
  }else {
    req.session.password = '12345';
  }

  let userModel = db.model('user',userSchema);
  let userEntity = new userModel({name:'Tom'});
  userModel.find(function(err,users){
    console.log(users);
  });
  res.render('login/index', { title: '登陆' });
});



module.exports = router;
