var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
	company: String,
	phone_number: String,
	address: String,
	about: String,
	mission_statement: String,
	services_provided: String,
	populations_served: String,
	specialities: String,
	media: String, //holder for images
	tags: String
});

module.exports = mongoose.model('Card', cardSchema);