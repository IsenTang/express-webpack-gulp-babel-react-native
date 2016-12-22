'use strict'
let express = require('express');
let router = express.Router();
let db = require('./common/db.js');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
