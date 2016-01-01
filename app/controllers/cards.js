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
	
	var keyArray = [req.body.name];
	if(req.body.tags)
		keyArray = keyArray.concat(req.body.tags);
	console.log(keyArray);
	
	Cards.create({
		name : req.body.name,
		phone_number : req.body.phone_number,
		address : req.body.address,
		about : req.body.about,
		mission_statement : req.body.mission_statement,
		services_provided : req.body.services_provided,
		populations_served : req.body.populations_served,
		specialities : req.body.specialities,
		media : req.body.media,
		tags : req.body.tags,
		keys : keyArray
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
router.delete('/:card_id', function(req, res) {
	console.log('DELETE RECEIVED');
	Cards.remove({
		_id : req.params.card_id
	}, function(error, cards) {
		if(error)
			res.send(error);

		Cards.find(function(error, cards){
			if(error)
				res.send(error);
			res.json(cards);
		});
	});
});
module.exports = router;
