/**
 * Created by 唐逸超 on 2016/12/22.
 */
'use strict';

var mongoose = require('mongoose');
var dbSetting = require('../../public/setting/db');
var dbStr = dbSetting.db + '://' + dbSetting.host + ':' + dbSetting.port + '/' + dbSetting.dbname;
console.log(dbStr);
var db = mongoose.createConnection(dbStr);

db.on('error', function (error) {
  console.log(error);
});

module.exports = db;