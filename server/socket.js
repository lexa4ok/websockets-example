// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log('Server listening at port ' + port);
});

io.on('connection', function(socket) {

    setInterval(function() {
        socket.broadcast.emit('new_message', {test: 'success'});
    }, 500);

    socket.on('new_message', function(data) {
        console.log('new_message', data);
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function() {});

});