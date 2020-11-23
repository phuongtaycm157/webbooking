var express = require('express');
var router = express.Router();
var md5 = require('md5');

var con = require('../DB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  id = req.signedCookies.userid;
  res.render('host/index', {userid: id});
});

router.get('/room', function(req, res, next) {
	userid = req.signedCookies.userid;
	var sql = "SELECT hotels.hotel_id as hotel_id, hotels.hotel_country as hotel_country, hotels.hotel_province";
	con.query(sql, [userid], function(err, result, flieds) {
		if (err) throw err;
		res.send(result);
	})
	// res.render('host/room',);
})

module.exports = router;
