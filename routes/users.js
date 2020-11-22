var express = require('express');
var router = express.Router();
var md5 = require('md5');

var con = require('../DB');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	var user = {...req.body};
	user.user_type = parseInt(user.user_type);
	user.password = md5(user.password);
	// res.send(user);

	con.connect(function(err) {
		if (err) throw err;
		console.log('Connected database!');
		var sql = `INSERT INTO users (username, email, password, user_type) VALUES ("${user.username}","${user.email}","${user.password}",${user.user_type})`;
		con.query(sql, function(err, result) {
			if (err) throw err;
			console.log(result);
			res.redirect('/auth/login');
		});
	});
});

module.exports = router;
