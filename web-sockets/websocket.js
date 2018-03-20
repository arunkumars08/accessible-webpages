// Simple websocket

function CustomWebSocket(url) {
    return new WebSocket(url);
}

var url = 'wss://echo.websocket.org';

var webSocket = CustomWebSocket(url);

webSocket.onopen = function(event) {
    console.log('Open', event);
};

webSocket.onmessage = function(message) {
    console.log('Message', message);
};

webSocket.onclose = function(close) {
    console.log('Close', close);
};
