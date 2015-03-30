var express = require('express');

var app = express();


app.get('/', function(req, res){
	res.send('Hola mundo!');
});

var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Esta aplicacion esta corriendo en http://%s:%s',host,port);

});