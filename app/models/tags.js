var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SortableArray = new Schema({
	//keywords contains tags and names of company
	Cards : [];
})


//michaels thoughts


//cards schema which contains array of tags and general info
//keep a seperate array that is used for display on the main page
//this defaults to all cards
//when filtering you filter this array based on the input filter + indexOf
//re display cards tha


//json file loaded into data base
//on page load pull json data into objects on front end
//search goes through array of cards and searches keywords
//within each card objects (services, names) --> returns card objects that match
//