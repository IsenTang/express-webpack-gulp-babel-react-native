'use strict';

/**
 * Created by 唐逸超 on 2016/12/23.
 */
var express = require('express');
var router = express.Router();
var app = express();
var db = require('./common/db.js');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');