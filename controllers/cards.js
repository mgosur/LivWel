var express = require('express');
var router = express.Router();
var Cards = require('../models/card');

router.get('/', function(req, res) {
	Cards.find(function(error, cardsReturned) {
		if(error) {
			res.send(error);
		}
		res.json(cardsReturned);
	});
});

router.post('/', function(req, res) {
	Cards.create({
		company : req.body.company,
		phone_number : req.body.phone_number,
		address : req.body.address,
		about : req.body.about,
		mission_statement : req.body.mission_statement,
		services_provided : req.body.services_provided,
		populations_served : req.body.populations_served,
		specialities : req.body.specialities,
		media : req.body.media,
		tags : req.body.tags
	}, function(error, card) {
		if(error)
			res.send(error)

		Cards.find(function(error, cardsReturned) {
			if(error)
				res.send(error)
			res.json(cardsReturned)
		});
	});
});

module.exports = router;
