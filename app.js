var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var getapi = require('./routes/getapi');
var postapi = require('./routes/postapi');
var deleteapi = require('./routes/deleteapi');

var app = express();
var mysql = require('mysql')
var orm = require('orm');

var config = require('./config');

var connection = mysql.createConnection(config.sql);

var exec = require('child_process').exec;

var cmdStr = 'pm2 restart www';

setTimeout(() => {
  exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
        var data = JSON.parse(stdout);
        console.log(data);
    }
  });
}, 2 * 60 * 60 * 1000)

connection.connect();

const keepQuery = () => {
  var sql = "SELECT * FROM tester_list";
  connection.query(sql, function (err, res) {
      console.log('+1s');
  });
}

setInterval(keepQuery, 1000);

// let productList = getProductList(connection)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/ajax', express.static('public'));

app.use('/ajax/admin', index);
app.use('/users', users);
app.use('/ajax/get', getapi);
app.use('/ajax/post', postapi);
app.use('/ajax/delete', deleteapi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
