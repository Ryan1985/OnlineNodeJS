var http = require("http");
var fs = require('fs');

var handler = function postHandler(pathName,queryObj,response,postData){
	var postObj = JSON.parse(postData);
	console.log(postObj.siteName);
	console.log(postObj.scriptText);

}
exports.handle=handler;

