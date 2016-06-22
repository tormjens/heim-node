var express = require('express');
var http = require('http');

module.exports = function() {
	var app = express();

	// Set app configuration
	app.engine('mustache', require('mustache-express')());
	app.set('view engine', 'mustache');
	app.set('views', __dirname + '/../views');

	// Create server instance
	var server = http.createServer(app);

	// Serve index
	app.get('/', function(req, res) {
		res.render('index');
	});

	return server;
};
