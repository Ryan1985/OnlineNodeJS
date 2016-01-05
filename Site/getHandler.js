var http=require('http');
var fs = require('fs');

var handler = function getHandler(pathName,queryObj,response){
	if (pathName==='/'){
		var source = fs.readFile('../htmls/index.html', {encoding: 'utf8'},function(err,data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write(data);
			response.end();
		});
	}
	else{
		var source = fs.readFile('../htmls'+pathName, {encoding: 'utf8'},function(err,data){
			if (err == null){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.write(data);
				response.end();
			}
			else{
				response.writeHead(404,{"Content-Type":"text/plain"});
				response.write(err.stack);
				response.end();
			}
		});
	}
}
exports.handle=handler;