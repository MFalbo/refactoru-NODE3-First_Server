var express = require('express');
var app = express();

var fs = require('fs');

// Part III
// var fileContents = fs.readFileSync('data.txt', 'utf-8');

// app.get('/', function(req, res) {
// 	res.send('<h1>' +fileContents+ '</h1>');
// });

// Part IV
app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data){
		res.send('<h1>' + data +'</h1>');
	});
});



var server = app.listen(3400, function() {
	console.log('Express server listening on port ' + server.address().port);
});