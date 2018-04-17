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

var app = express();
var mysql = require('mysql')
var orm = require('orm');

var config = require('./config');

var opts = {
  host:     'localhost',
  database: 'hanliDB',
  protocol: 'mysql',
  port:     '3306',
  query:    {pool: true}
};

var connection = mysql.createConnection(config.sql);

connection.connect();

const addProduct = (connection) => {
  var addSql = 'INSERT INTO product_list(id, title, number, date) VALUES(0, ?, ?, ?)';
  let date = (new Date()).getTime()
  var addSqlParams = ['title1','3', '2017-11-20'];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }
    console.log('INSERT ID:',result);
    return result;
  });
}

// let productList = getProductList(connection)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/get', getapi);
app.use('/post', postapi);

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
  res.render('error');
});

module.exports = app;
