/**
 * Created by 唐逸超 on 2016/12/23.
 */
let express = require('express');
let router = express.Router();
let app = express();
let db = require('./common/db.js');
let mongoose = require('mongoose');
let session = require('express-session');
let cookieParser = require('cookie-parser');