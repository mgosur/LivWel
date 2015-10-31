//app.js
'use strict'


var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require("body-parser")

var app = express();
mongoose.connect('mongodb://localhost/LivWel')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //add more parsing as needed
app.use(require('./controllers'));

var port = process.env.port || 8080; //listening to enviroment
app.listen(port, function() {
	console.log('app listening on ' + port);
})
