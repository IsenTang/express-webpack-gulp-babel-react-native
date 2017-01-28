'use strict'
let express = require('express');
let router = express.Router();
let app = express();
let db = require('../common/db.js');
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//在实例化 mongoose的schema的时候，要实例化在全局上。
let userSchema = new mongoose.Schema({
  name:String,
  password:String
});

/* GET home page. */

router.get('/login', function(req, res, next) {

  // let username = req.session.username;
  // let password = req.session.password;

  res.render('login/index', { title: '登陆' });
});

router.post('/main',function(req,res,next){
    let username = req.body.username;
    let password = req.body.password;

    let userModel = db.model('user', userSchema);
    userModel.find({name:username,password:password},function(err,docs){
        if(docs.length == 0) {
            res.redirect('/loginError');
        }
        else {
            res.render('main/index');
        }
    })

})

router.get('/loginError',function(req,res,next){
    res.render('err/loginErr');
})



module.exports = router;
