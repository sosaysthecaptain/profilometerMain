console.log('loading correctly')







// Socket client
var apiURL = 'https://damp-sierra-42875.herokuapp.com/';

// Make connection
var socket = io.connect(apiURL);

// Listen for command event from Socket
socket.on('command', function(data) {
    console.log(data.command);

    if (data.command.slice(0, 8) == 'moveXBy:') {
        let quantity = data.command.slice(9, data.command.length);
        console.log(quantity)
        demoFunction(Number(quantity));
    }
});

function demoFunction(quantity) {
    console.log('demo parser function. Quantity: ' + quantity);
}