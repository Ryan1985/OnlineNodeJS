var http = require('http');
var url = require('url');
var getHandler = require('./getHandler');
var postHandler = require('./postHandler');
//var deleteHandler = require('./deleteHandler');
//var putHandler = require('./putHandler');

var route = function(request,response){
	if (request.method == 'GET'){
		console.log('route into function routeGet');
		routeGet(request,response);
	}
	else if (request.method=='POST'){
		console.log('route into function routePost');
		var postData=[];
		request.addListener("data",function(postDataChunk){
			postData.push(postDataChunk);
		});

		request.addListener("end",function(){
			routePost(request,response,postData);
		});
	}
	else{
		response.writeHead(404,{"content-Type":"text/plain"});
		response.write("Can't find the route for method :"+request.method );
		response.end();
	}
//	else if (request.method=='Put'){
//		console.log('route into function routePut');
//		routePut(request,response);
//	}
//	else if (request.method=='Delete'){
//		console.log('route into function routeDelete');
//		routeDelete(request,response);
//	}
}


function routeGet(request,response){
	var parsedUrl = url.parse(request.url);
	var pathName = parsedUrl.pathname;
	var queryObj = parsedUrl.query;
	getHandler.handle(pathName,queryObj,response);
}

function routePost(request,response,postData){
	var parsedUrl = url.parse(request.url);
	var pathName = parsedUrl.pathname;
	var queryObj = parsedUrl.query;
	postHandler.handle(pathName,queryObj,response,postData);
}

function routePut(request,response){
}

function routeDelete(request,response){
}



exports.route = route;

