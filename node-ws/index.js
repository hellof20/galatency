'use strict';

const express = require('express');
const path = require('path');
const { createServer } = require('http');
const WebSocket = require('ws');
const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function(ws) {
    ws.on('message', function (message) {
        ws.send('repsonse',function(){
        })
    })
    ws.on('close', function() {
        console.log('stopping client interval');
    });
});

server.listen(80,'0.0.0.0', function() {
  console.log('Listening on http://0.0.0.0:80');
});
