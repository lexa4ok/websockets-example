var socket = io('http://localhost:3000');
socket.on('connect', function() {});
socket.on('event', function(data) {});
socket.on('disconnect', function() {});

setInterval(function() {
    socket.emit('new_message', {test: 'success'});
}, 500);
socket.on('new_message', function(data) {
    console.log('new_message', data);
});

