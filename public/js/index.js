let socket = io();

socket.on('connect', function() {
    console.log("Connceted to server");
    socket.emit('createMessage', {
        From: 'Andrew',
        text: "Hahaha"
    });
});

socket.on('disconnect', function() {
    console.log("Disconnected from server");
});

socket.on('newMessage', function(message){
    console.log('newMessage', message);
});