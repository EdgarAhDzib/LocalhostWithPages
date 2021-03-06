var url = require('url');
var http = require('http');
var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server is listening on : " + PORT);
});

function handleRequest(request, res) {
	var url_parts = url.parse(request.url);
	console.log(url_parts);
	switch (url_parts.pathname) {
		case '/':
			fs.readFile("index.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
			break;
		case '/food':
			fs.readFile("food.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
			break;
		case '/movies':
			fs.readFile("movies.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
			break;
		case '/css':
			fs.readFile("css.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
			break;
		default:
			display_404(res);
			console.log("Something went wrong");
	}
}


function display_404(response) {
	response.writeHead(404, {'Content-Type': 'text/html'});
	response.write("<h1>404 Page not found!</h1>");
	response.end("Sorry, can't find page" + url);
}