const ws = require('ws');

const wss = new ws.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    ws.broadcast(data);
    console.log('received: %s', data);
  });

});