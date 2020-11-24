var express = require('express');
var router = express.Router();

var md5 = require('md5');
var con = require('../DB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
	res.render('auth/register');
});

router.get('/login', function(req, res, next) {
	res.render('auth/login');
});

router.post('/login', function(req, res, next) {
	var user = req.body;
	user.password = md5(user.password)
	// con.connect(function(err) {
		// if (err) throw err;
		var sql = `SELECT * FROM users WHERE username="${user.username}" AND password="${user.password}"`;
		con.query(sql, function(err, result, fields) {
			if (err) throw err;
			if (result.length === 1) {
				var id = result[0].id;
				res.cookie('userid', id.toString(), {expires: new Date(Date.now() + 3600000), signed: true});
				res.redirect('/host');
			} else {
				res.redirect('/auth/login');
			}
		});
	// })
});

module.exports = router;