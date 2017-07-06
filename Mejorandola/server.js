express = require('express');

server = express();

var messages = [];
var responses = [];

server.get('/',function(req,res){

	res.send('hello world');
});

server.get('/messages/:message',function(req,res){
	messages.push(req.params.message);

	responses.forEach(function (res) {
			res.send(messages + '<script>window.location.reload()</script>');
	})

	res.send('Your message is: '+req.params.message);
});

server.get('/messages',function (req,res) {
	responses.push(res);
});

server.listen(3000);