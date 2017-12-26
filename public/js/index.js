var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'test02@example.com',
        text: 'Hey! Its been a long time'
    });

    socket.emit('createMessage', {
        from: 'Dad',
        text: 'I am home'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New Email', email);
});

socket.on('newMessage', function(message) {
    console.log('You got a new message', message);
});
