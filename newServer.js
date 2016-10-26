var url = require('url');
var http = require('http');
var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

/*
function handleRequest(req, res) {
	fs.readFile("index.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
}
*/

server.listen(PORT, function(){
	console.log("Server is listening on : " + PORT);
});

function handleRequest(request, res) {
	var url_parts = url.parse(request.url);
	console.log(url_parts);
	switch (url_parts.pathname) {
		case '/index.html':
			fs.readFile("index.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
			break;
		case '/food.html':
		fs.readFile("food.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
			break;
		case '/movies.html':
fs.readFile("movies.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
			break;
		case '/css.html':
fs.readFile("css.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
			break;
		default:
			console.log("Something went wrong");
	}
}

/*
function handleRequestTwo(req, res) {
	fs.readFile("movies.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
}

function handleRequestThree(req, res) {
	fs.readFile("food.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
}

function handleRequestFour(req, res) {
	fs.readFile("css.html", function(err, data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(data);
	});
}
*/