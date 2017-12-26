const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'test01@example.com',
        text: 'Hey! How is it going?',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'Mom',
        text: 'How are you?',
        createdAt: 2203
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail)
    });

    socket.on('createMessage', (message) => {
        console.log('Receive Message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});
