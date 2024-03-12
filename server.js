const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState == WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.use(express.static('public'));

server.listen(3000, function listening(){
    console.log('server started on port 3000');
});
