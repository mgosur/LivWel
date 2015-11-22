var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	first_name: String,
	last_name: String,
	password: String, //before hashing
	demographic: String,
	location: String, //might need different method
	needs: String
});

module.exports = mongoose.model('User', userSchema);