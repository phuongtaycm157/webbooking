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
	var hotel_sql = "SELECT * FROM hotels WHERE user_id = ?";
	con.query(hotel_sql, [userid], function(err, result, flieds) {
		if (err) throw err;
		var hotel = result[0];
		var room_sql = "SELECT * FROM room WHERE hotel_id = ?";
		con.query(room_sql, [hotel.hotel_id], function(err, result, flieds) {
			var rooms = result;
			rooms = rooms.map(function(x) {
				x.room_loai = JSON.parse(x.room_loai);
				x.room_tieuchuan = JSON.parse(x.room_tieuchuan);
				x.room_loivao = JSON.parse(x.room_loivao);
				x.room_bep = JSON.parse(x.room_bep);
				x.room_phongtam = JSON.parse(x.room_phongtam);
				x.room_ngoaitroi = JSON.parse(x.room_ngoaitroi);
				x.room_giaitri = JSON.parse(x.room_giaitri);
				x.room_giadinh = JSON.parse(x.room_giadinh);
				x.room_doantoanvasachse = JSON.parse(x.room_doantoanvasachse);
				x.room_khac = JSON.parse(x.room_khac);
				x.room_anh = JSON.parse(x.room_anh);
				return x;
			});
			res.render('host/room',{hotel: hotel, rooms: rooms});
		});
	})
	// res.render('host/room',);
})

module.exports = router;
