module.exports = function(req, res, next) {
	if (!req.signedCookies.userid) {
		res.redirect('/auth/login');
	}
	next();
}