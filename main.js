var PythonShell = require('python-shell');
var pyshell = new PythonShell('controller.py');
var express = require('express');
var app = express();

app.get('/testget', function(request, response) {
	var speed = request.query['speed']
	if (isNaN(speed))
		response.end('Invalid speed');
	else {
		setSpeed(Number(speed));
		response.end('Speed set to ' + speed);
	}
		

});

function setSpeed(speed) {
	var args = {
		'function': 'test',
		'args': {'speed': speed, 'direction': 'left'}
	};
	pyshell.send(JSON.stringify(args));
	pyshell.on('message', function (message) {
		console.log(message);
	});
	pyshell.end(function (err) {
		if (err) throw err;
	});
}

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
