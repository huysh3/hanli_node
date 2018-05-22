var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config');

var connection = mysql.createConnection(config.sql);
connection.connect();

router.get('/add_truck', (req, res, next) => {
  var addSql = 'INSERT INTO truck_list(id, name, type, status, start_time, number) VALUES(0, ?, ?, ?, ?, ?)';
  var addSqlParams = [req.query.name, req.query.type, req.query.status, req.query.start_time, req.query.number];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      res.json('error')
    }
    console.log('INSERT ID:',result);
    res.json('success')
  });
})

router.get('/add_tester', (req, res, next) => {
  // console.log(req.query)
  var addSql = 'INSERT INTO tester_list(id, name, type, status, number) VALUES(0, ?, ?, ?, ?)';
  var addSqlParams = [req.query.name, req.query.type, req.query.status, req.query.number];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      res.json('error')
    }
    console.log('INSERT ID:',result);
    res.json('success')
  });
})

router.get('/add_qs', (req, res, next) => {
  // console.log(req.query)
  var addSql = 'INSERT INTO qs_list(id, img_url) VALUES(0, ?)';
  var addSqlParams = [req.query.img_url];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      res.json('error')
    }
    console.log('INSERT ID:',result);
    res.json('success')
  });
})

router.get('/add_company_qualification', (req, res, next) => {
  // console.log(req.query)
  var addSql = 'INSERT INTO company_qualification_list(id, img_url) VALUES(0, ?)';
  var addSqlParams = [req.query.img_url];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      res.json('error')
    }
    console.log('INSERT ID:',result);
    res.json('success')
  });
})

router.get('/add_product', (req, res, next) => {
  // console.log(req.query)
  var addSql = 'INSERT INTO product_list(id, name, img_url) VALUES(0, ?, ?)';
  var addSqlParams = [req.query.img_url, req.query.name];
  connection.query(addSql, addSqlParams, (err, result) => {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      res.json('error')
    }
    console.log('INSERT ID:',result);
    res.json('success')
  });
})

module.exports = router;
