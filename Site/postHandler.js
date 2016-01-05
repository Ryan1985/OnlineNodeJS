var http = require("http");
var fs = require('fs');

var handler = function postHandler(pathName,queryObj,response,postData){
	var postObj = JSON.parse(postData);
	var siteName = postObj.siteName;
	var fileName = postObj.fileName;
	var scriptText = postObj.scriptText;
	var userSitePath ='../../'+postObj.siteName;
	fs.stat(userSitePath,function(err,stats){
		if (err || !stats.isDirectory() ) {
			fs.mkdir(userSitePath,function(err){
				if (err) console.log('fs.mkdir Error :'+err.message);
				else{
					fs.writeFile(userSitePath+'/'+fileName,scriptText,function(err){
						if (err) console.log('fs.writeFile Error :'+err.message);
					});
				}
			});
		}
		else{
			fs.writeFile(userSitePath+'/'+fileName,scriptText,function(err){
				if (err) console.log('fs.writeFile Error :'+err.message);
			});
		}
	});

}
exports.handle=handler;

