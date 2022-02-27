const e = require('express');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sqlite3 = require('sqlite3').verbose();

// Loads the database
let db = new sqlite3.Database('./database/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        console.log(err);
    }
});
//database is currently empty

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