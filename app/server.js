var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../.dist'));
app.use(bodyParser.json()); //allows request parsing
app.use(morgan('dev')); //request logging to terminal
app.use(require('./controllers')); //load in controllers

var port = process.env.port || 8888; //listening to enviroment
app.listen(port, function() {
	console.log('LivWel server listening on ' + port);
})