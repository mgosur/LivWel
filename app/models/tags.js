var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagIndexSchema = new Schema({
	cardId : [String]
})