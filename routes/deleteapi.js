var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config');

var connection = mysql.createConnection(config.sql);
connection.connect();

/* GET users listing. */
router.get('/delete_tester', (req, res, next) => {
  console.log(req.query.id);
  var  sql = 'DELETE FROM tester_list WHERE id=' + req.query.id;
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

router.get('/delete_truck', (req, res, next) => {
  console.log(req.query.id);
  var  sql = 'DELETE FROM truck_list WHERE id=' + req.query.id;
  connection.query(sql, (err, result) => {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
   console.log(result);
   res.json(result);
  });
});

// router.get('/truck_list', (req, res, next) => {
//   var  sql = 'SELECT * FROM truck_list';
//   connection.query(sql, (err, result) => {
//     if(err){
//       console.log('[SELECT ERROR] - ',err.message);
//       return;
//     }
//    console.log(result);
//    result.map(item => {
//      console.log(item.id)
//    })
//    res.json(result);
//   });
// });

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
