var http= require('http');
var fs=require('fs');
var server = http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html"});
	// res.end("hello world\n");
	// res.end("<p>BAM!</p>")
	// var data=fs.readFileSync(__dirname +"/data.txt");
	
	fs.readFile(__dirname + '/data.txt', function(err, data){

		if(err){
			res.writeHead(404)
			res.end("FILE NOT FOUND")
		}
		else{
			res.writeHead(200)
			res.end(data)
		}
	});

	//store something in a database
	// res.end(data)
})

server.listen(1337);
console.log("server running at http://127.0.01:1337/")



