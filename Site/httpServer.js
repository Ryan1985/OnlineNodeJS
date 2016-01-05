var http = require('http');
var router = require('./router');

exports.start = function start(port){
	var server = http.createServer(function (request,response){
		console.log('recieved request from '+request.connection.remoteAddress);
		router.route(request,response);
	});


	server.listen(port);
}

