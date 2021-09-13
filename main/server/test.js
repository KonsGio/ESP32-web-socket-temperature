document.getElementById("test").innerHTML = "WebSocket is not connected";

var websocket = new WebSocket('ws://' + location.hostname + '/');

function sendMsg() {
    websocket.send('L50');
    console.log('Sent message to websocket');
}

function sendText(text) {
    websocket.send("M" + text);
}

websocket.onopen = function(evt) {
    console.log('WebSocket connection opened');
    websocket.send("It's open! Hooray!!!");
    document.getElementById("test").innerHTML = "WebSocket is connected!";
}

websocket.onmessage = function(evt) {
    document.getElementById("output").innerHTML = evt.data;
}


websocket.onclose = function(evt) {
    console.log('Websocket connection closed');
    document.getElementById("test").innerHTML = "WebSocket closed";
}

websocket.onerror = function(evt) {
    console.log('Websocket error: ' + evt);
    document.getElementById("test").innerHTML = "WebSocket error????!!!1!!";
}