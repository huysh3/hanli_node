var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index.ejs');
});

router.get('/layout', function(req, res, next) {
  res.render('layout.jade');
});

module.exports = router;
