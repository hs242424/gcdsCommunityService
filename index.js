var socket = io();
// h
socket.on('message', function (data){
    alert(data);
});