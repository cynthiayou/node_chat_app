let socket = io();

socket.on('connect', function() {
    console.log("Connceted to server");
    // socket.emit('createMessage', {
    //     From: 'Andrew',
    //     text: "Hahaha"
    // });
});

socket.on('disconnect', function() {
    console.log("Disconnected from server");
});

socket.on('newMessage', function(message){
    console.log('newMessage', message);
    let li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});



jQuery('#message_form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
})