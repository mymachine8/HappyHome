var express = require('express');
var app = express();
var fs = require('fs');
var io = require('socket.io')(app.listen(8080));
app.use(express.static('public'));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	console.log('A user is connected');
	socket.on('disconnect', function(){
		console.log('User Disconnected');
	});
	socket.on('chat message',function(msg){
		io.emit('chat message',msg);
	});
})

