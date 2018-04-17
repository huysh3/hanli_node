var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var config = require('../config');

router.get('/add_tester', (req, res, next) => {
  console.log(req.query)
  res.json('success')
})

module.exports = router;
