var express = require('express');
var router = express.Router();
var md5 = require('md5');

var con = require('../DB');

router.get('/', function(req, res, next) {
  res.render('guest/index');
})



module.exports = router;