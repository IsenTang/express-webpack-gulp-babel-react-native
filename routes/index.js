'use strict';

var express = require('express');
var router = express.Router();
var db = require('./common/db.js');

/* GET home page. */

router.get('/', function (req, res, next) {
  console.log(db);
  res.render('index', { title: 'Express' });
});

module.exports = router;