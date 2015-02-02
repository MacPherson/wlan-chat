var net = require('net');

var sockets = [];

var server = net.createServer(function(socket) {
    socket.write('Welcome!\n');

    socket.on('connect', function() {
        sockets.push(socket)
    });

    socket.on('end', function() {
        delete sockets[sockets.indexOf(socket)]
    });

    socket.on('data', function(data) {
        for(var i in sockets) sockets[i].write(data)
    });
});

server.listen(1667);