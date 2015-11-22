var express = require('express');
var router = express.Router();
var Users = require('../models/user');

router.get('/', function(req, res) {
	Users.find(function(error, usersReturned) {
		if(error) {
			res.send(error);
		}
		res.json(usersReturned);
	});
});

router.post('/', function(req, res) {
	Users.create({
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		password : req.body.password,
		demographic : req.body.demographic,
		location : req.body.location,
		needs : req.body.needs
	}, function(error, card) {
		if(error)
			res.send(error)

		Users.find(function(error, usersReturned) {
			if(error)
				res.send(error)
			res.json(usersReturned)
		});
	});
});

module.exports = router;