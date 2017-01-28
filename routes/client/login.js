'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var db = require('../common/db.js');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//在实例化 mongoose的schema的时候，要实例化在全局上。
var userSchema = new mongoose.Schema({
    name: String,
    password: String
});

/* GET home page. */

router.get('/login', function (req, res, next) {

    // let username = req.session.username;
    // let password = req.session.password;

    res.render('login/index', { title: '登陆' });
});

router.post('/main', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    var userModel = db.model('user', userSchema);
    userModel.find({ name: username, password: password }, function (err, docs) {
        if (docs.length == 0) {
            res.redirect('/loginError');
        } else {
            res.render('main/index');
        }
    });
});

router.get('/loginError', function (req, res, next) {
    res.render('err/loginErr');
});

module.exports = router;