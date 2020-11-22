var express = require('express');
var router = express.Router();
var md5 = require('md5');

var con = require('../DB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  id = req.signedCookies.userid;
  res.render('host/index', {userid: id});
});


module.exports = router;
