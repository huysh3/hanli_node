var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config');

var connection = mysql.createConnection(config.sql);
connection.connect();

/* GET users listing. */
router.get('/tester_list', (req, res, next) => {
  var  sql = 'SELECT * FROM tester_list';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   result.map(item => {
     console.log(item.id)
   })
   res.json(result);
  });
});

router.get('/truck_list', (req, res, next) => {
  var  sql = 'SELECT * FROM truck_list';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   result.map(item => {
     console.log(item.id)
   })
   res.json(result);
  });
});

router.get('/company_info', (req, res, next) => {
  var  sql = 'SELECT * FROM company_info';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

router.get('/qs_list', (req, res, next) => {
  var  sql = 'SELECT * FROM qs_list';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

router.get('/company_qualification_list', (req, res, next) => {
  var  sql = 'SELECT * FROM company_qualification_list';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

router.get('/product_list', (req, res, next) => {
  var  sql = 'SELECT * FROM product_list';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

router.get('/company_info', (req, res, next) => {
  var  sql = 'SELECT * FROM company_info';
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

module.exports = router;
