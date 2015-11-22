var express = require('express');
var app = express();
 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../.dist'));

app.get('/', function(req, res) {
	res.render('../public/index');
})

var port = process.env.port || 8888; //listening to enviroment
app.listen(port, function() {
	console.log('LivWel server listening on ' + port);
})