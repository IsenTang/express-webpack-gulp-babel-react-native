'use strict'
var express = require('express');
var path = require('path');
var debug = require('debug')('envproject:server');
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');




let app = express();
var port = normalizePort(process.env.PORT || '3000');





app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
//网站图标
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// local variables for all views
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;


// static assets served by webpack-dev-middleware & webpack-hot-middleware for development
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack.config.js');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

  // public path should be the same with webpack config
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

//cookieParser  做session时候，要将值加密放入cookie中，use coolieParser与session要在Router之前才起效果。
app.use(cookieParser());
app.use(session({
  secret: '12345',
  cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: true,  //是否允许session重新设置，要保证session有操作时候，必须设置这个属性为true
  saveUninitialized: true,
  unset:'keep'
}));

//路由
var index = require('./routes/index');
var users = require('./routes/users');
app.use('/', index);
app.use('/users', users);




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// add "reload" to express, see: https://www.npmjs.com/package/reload
var reload = require('reload');
var http = require('http');

var server = http.createServer(app);
reload(server, app);

server.listen(port, function(){
  console.log('App (dev) is now running on port 3000!');
});

server.on('error', onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}