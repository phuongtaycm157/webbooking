var express = require('express');
var router = express.Router();
var md5 = require('md5');

var con = require('../DB');

router.get('/', function(req, res, next) {
  res.render('guest/index');
});

router.post('/search', function(req, res, next) {
	var findKeyWord = req.body.findKeyWord;
	res.send(findKeyWord);
});

module.exports = router;
