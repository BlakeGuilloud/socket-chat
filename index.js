const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chatRoutes = require('./lib/routes/chat.routes');

const db = process.env.MOGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

// mongoose.connect(db);

io.on('connection', (socket) => {

  socket.on('submit', (msg) => {
    io.emit('submit', msg);
  });
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use('/chats', chatRoutes);

http.listen(port, () => console.log('app listening on port: ', port));
