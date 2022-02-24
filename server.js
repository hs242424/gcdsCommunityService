var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 8080;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
 });


app.get('/index.js', function(req, res){
    res.sendFile(__dirname + "/index.js");
});
io.on('connection', function(socket) {
    socket.emit('message', 'Hello World')
});

 http.listen(port, function(){
    console.log('connected on port: ' + port)
});