console.log('Hello Node');
var fs = require('fs')
setTimeout(function(){
	console.log('Hello World');
}, 1000);

// console.log(process.version);
// console.log(process.argv);
// console.log(process.env);
// console.log(process.pid);
// console.log(process.getuid());
// console.log(process.cwd());
// console.log(process.chdir('..'));
// console.log(process.exit());

// process.on('exit', function() {
// 	console.log('Goodbye');
// });

// process.on('uncaughtException', function(e){
// 	console.log(e);
// });

// process.on('SIGINT', function(){
// 	console.log('Ingnore ctrl-C');
// });

var bytes = new Buffer(256);
for (var i = 0; i < bytes.length; i++) {
	bytes[i] = i;
};
var end = bytes.slice(240,256);
console.log(end[0]);
end[0] = 0;
console.log(bytes[240]);
var more = new Buffer(8);
end.copy(more, 0, 8, 16);
console.log(more[0]);

var buf = new Buffer('2pir', 'utf-8');
console.log(buf.length);
console.log(buf.toString());
buf = new Buffer(10);
var len = buf.write('pir2', 4);
console.log(buf.toString('utf-8', 4, 4+len));

var fs = require('fs');
var text = fs.readFileSync('config.json', 'utf-8');
fs.readFile('image.png', function(err, buffer){
	if(err){
		throw err;
	}
	// process(buffer);
});

var userprefs = '';
fs.writeFile('config.json', JSON.stringify(userprefs));

function fileCopy(filename1, filename2, done){
	var input = fs.createReadStream(filename1);
	var output = fs.createWriteStream(filename2);
	input.on('data', function(d){
		output.write(d);
	});
	input.on('error', function(err){
		throw err;
	});
	input.on('end', function(){
		output.end();
		if(done){
			done();
		}
	});
}

var fs = require('fs'), path = require('path');
var dir = process.cwd();
if(process.argv.lrngth > 2){
	dir = process.argv[2];
}
var files = fs.readdirSync(dir);
process.stdout.write('Name\tSize\tDate\n');
files.forEach(function(filename){
	var fullname = path.join(dir, filename);
	var stats = fs.statSync(fullname);
	if(stats.isDirectory()){
		filename += '/';
	}
	process.stdout.write(filename + '\t' + stats.size + '\t' + stats.mtime + '\n');
});


// var net = require('net');
// var server = net.createServer(); 
// server.listen(2000, function(){
// 	console.log('Listening on port 2000');
// });
// server.on('connection', function(stream){
// 	console.log('Accepting connection from', stream.remoteAddress);
// 	stream.on('data', function(data){
// 		stream.write(data);
// 	});
// 	stream.on('end', function(data){
// 		console.log('Connection closed');
// 	});
// });


var http = require('http');
var fs = require('fs');

var server = new http.Server();
server.listen(8000);

server.on('request', function(request, response){
	var url = require('url').parse(request.url);
	if(url.path === '/test/delay'){
		var delay = parseInt(url.query) || 2000;
		response.writeHead(200, {'Content-type': 'text/plain; charset=UTF-8'});
		response.write('Sleeping for ' + delay + 'milliseconds');
		setTimeout(function(){
			response.write('done.');
			response.end();
		}, delay);
	}else if(url.pathname === '/test/mirror'){
		response.writeHead(200, {'Content-type': 'text/plain; charset=UTF-8'});
		response.write(request.method + ' ' + request.url + 
			' HTTP/' + request.httpVersion + '\r\n');
		for(var h in request.headers){
			response.write(h + ':' + headers[h] + '\r\n');
		}
		response.write('\r\n');
		request.on('data', function(chunk){
			response.write(chunk);
		});
		request.on('end', function(chunk){
			response.end();
		});
	}else{
		var filename = url.pathname.substring(1);
		var type;
		switch(filename.substring(filename.lastIndexOf('.') + 1)){
			case 'html':
			case 'htm':
				type = 'text/html; charset = UTF-8';
				break;
			case 'js':
				type = 'application/javascript; charset = UTF-8';
				break;
			case 'css':
				type = 'text/css; charset = UTF-8';
				break;
			case 'txt':
				type = 'text/plain; charset = UTF-8';
				break;
			case 'manifest':
				type = 'text/cache-manifest; charset = UTF-8';
				break;
			default:
				type = 'application/otcset-stream';
				break;
		}
		fs.readFile(filename, function(err, content){
			if(err){
				response.writeHead(404, {
					'Content-type': 'text/plain; charset=UTF-8'
				});
				response.write(err.message);
				response.end();
			}else{
				response.writeHead(200, {'Content-type': type});
				response.write(content);
				response.end();
			}
		});
	}
})