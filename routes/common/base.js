/**
 * Created by 唐逸超 on 2016/12/22.
 */
'use strict';

var mongoose = require('mongoose');
var dbSetting = require('../public/setting/db');
var db = mongoose.createConnection(dbSetting.db);