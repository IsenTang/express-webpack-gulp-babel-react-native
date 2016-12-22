/**
 * Created by 唐逸超 on 2016/12/22.
 */
'use strict'

let mongoose = require('mongoose');
let dbSetting = require('../public/setting/db');
let db = mongoose.createConnection(dbSetting.db);

db.on('error',function(error){
    console.log(error);
})

