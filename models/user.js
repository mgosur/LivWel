var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	password: String, //holder before encrypt
	demographic: String,
	location: String, //might need different method
	needs: String
});

module.exmodule.exports = mongoose.model('User', userSchema);