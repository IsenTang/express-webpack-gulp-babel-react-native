'use strict'
var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Expres' });
});

module.exports = router;
