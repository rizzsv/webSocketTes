// public/script.js

const ws = new WebSocket('ws://localhost:3000');

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

ws.onmessage = function(event) {
  const message = document.createElement('div');
  message.innerText = event.data;
  messagesDiv.appendChild(message);
};

sendButton.onclick = function() {
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = '';
};
