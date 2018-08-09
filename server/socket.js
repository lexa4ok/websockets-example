// Setup basic express server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

app.listen(8000);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,
}));

app.use(function (req, res, next) {
    next();
});

server.listen(port, function() {
    console.log('Server listening at port ' + port);
});

io.on('connection', function(socket) {

    app.get('/data', function(req, res) {
        var data = JSON.parse(req.param('data'));
        res.send('ok');
        socket.broadcast.emit('data', data);
    });

    socket.on('new_message', function(data) {
        console.log('new_message', data);
    });

    socket.on('disconnect', function() {});

});